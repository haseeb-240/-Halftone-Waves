import { ModernTemplate } from "@/components/resume-templates/modern-template"
import { ClassicTemplate } from "@/components/resume-templates/classic-template"
import { MinimalistTemplate } from "@/components/resume-templates/minimalist-template"
import { ProfessionalTemplate } from "@/components/resume-templates/professional-template"

const templates = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  minimalist: MinimalistTemplate,
  professional: ProfessionalTemplate,
}

export default function ResumePreview({ resumeData, template = "modern" }) {
  const TemplateComponent = templates[template] || templates.modern

  return (
    <div id="resume-preview" className="bg-white p-6 rounded-lg shadow-lg">
      <TemplateComponent resumeData={resumeData} />
    </div>
  )
}

