"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ResumeBuilder from "@/components/resume-builder"
import ResumePreview from "@/components/resume-preview"
import TemplateSelector from "@/components/template-selector"
import { Button } from "@/components/ui/button"
import { generatePDF } from "../utils/pdf-generator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Dashboard() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit")
  const [selectedTemplate, setSelectedTemplate] = useState("modern")
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      title: "",
      summary: "",
      image: null, // Add this line
    },
    education: [{ institution: "", degree: "", field: "", startDate: "", endDate: "", description: "" }],
    experience: [{ company: "", position: "", startDate: "", endDate: "", description: "" }],
    skills: [""],
    projects: [{ title: "", description: "", link: "" }],
    certifications: [{ name: "", issuer: "", date: "" }],
  })

  useEffect(() => {
    setIsClient(true)
    const user = localStorage.getItem("user")
    if (!user) {
      router.push("/")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  const handleDownload = async () => {
    await generatePDF(resumeData, selectedTemplate)
  }

  if (!isClient) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">AI Resume Builder</h1>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="outline"
              className="border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="edit">
            <ResumeBuilder resumeData={resumeData} setResumeData={setResumeData} />
          </TabsContent>
          <TabsContent value="preview">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
              <ResumePreview resumeData={resumeData} template={selectedTemplate} />
            </div>
          </TabsContent>
        </Tabs>

        <Button className="w-full mt-4 bg-[#495057] hover:bg-[#343a40] text-white py-3" onClick={handleDownload}>
          Download PDF
        </Button>
      </main>
    </div>
  )
}

