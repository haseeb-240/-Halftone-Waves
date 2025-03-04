import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export const generatePDF = async (resumeData, template = "modern") => {
  const element = document.getElementById("resume-preview")
  if (!element) {
    console.error("Resume preview element not found")
    return
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      width: 795, // A4 width in pixels at 96 DPI
      height: 1123, // A4 height in pixels at 96 DPI
      onclone: (clonedDoc) => {
        // Fix image rendering issues
        const images = clonedDoc.getElementsByTagName("img")
        for (const img of images) {
          img.style.maxWidth = "none"
        }
      },
    })

    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    })

    pdf.addImage(imgData, "PNG", 0, 0, 210, 297) // A4 dimensions in mm
    pdf.save(`${resumeData.personalInfo.name || "resume"}_${template}.pdf`)
  } catch (error) {
    console.error("Error generating PDF:", error)
    alert("There was an error generating your PDF. Please try again.")
  }
}

