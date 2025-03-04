import ReactDOMServer from "react-dom/server"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { ModernTemplate } from "@/components/resume-templates/modern-template"

const templates = {
  modern: ModernTemplate,
  classic: ModernTemplate, // Temporarily using ModernTemplate for all styles
  creative: ModernTemplate,
  professional: ModernTemplate,
  minimalist: ModernTemplate,
}

export const generatePDF = async (resumeData, template = "modern") => {
  const TemplateComponent = templates[template] || templates.modern

  // Create a temporary div to render the resume
  const tempDiv = document.createElement("div")
  tempDiv.style.position = "absolute"
  tempDiv.style.left = "-9999px"
  tempDiv.style.width = "794px" // A4 width in pixels at 96 DPI
  tempDiv.style.backgroundColor = "white"
  tempDiv.style.padding = "40px"
  document.body.appendChild(tempDiv)

  // Render the template to HTML string
  const htmlString = ReactDOMServer.renderToString(
    <div className="bg-white">
      <TemplateComponent resumeData={resumeData} />
    </div>,
  )
  tempDiv.innerHTML = htmlString

  try {
    // Wait for fonts to load
    await document.fonts.ready

    // Convert the div to canvas
    const canvas = await html2canvas(tempDiv, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      onclone: (clonedDoc) => {
        // Apply styles to cloned document
        const style = clonedDoc.createElement("style")
        style.textContent = `
          * { font-family: Arial, sans-serif; }
          .text-[#212529] { color: #212529; }
          .text-[#495057] { color: #495057; }
          .text-[#6c757d] { color: #6c757d; }
        `
        clonedDoc.head.appendChild(style)
      },
    })

    // Create PDF
    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    })

    const imgWidth = 210 // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)

    // Download PDF
    pdf.save(`${resumeData.personalInfo.name || "resume"}.pdf`)
  } catch (error) {
    console.error("Error generating PDF:", error)
    alert("There was an error generating your PDF. Please try again.")
  } finally {
    // Clean up
    document.body.removeChild(tempDiv)
  }
}

