export function ModernTemplate({ resumeData }) {
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  return (
    <div className="font-sans text-[#212529] p-4 max-w-4xl mx-auto">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#343a40] mb-2">{resumeData.personalInfo.name}</h1>
        {resumeData.personalInfo.title && (
          <p className="text-xl text-[#495057] mb-2">{resumeData.personalInfo.title}</p>
        )}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-[#6c757d]">
          {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
          {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
          {resumeData.personalInfo.address && <span>{resumeData.personalInfo.address}</span>}
        </div>
      </header>

      {/* Summary */}
      {resumeData.personalInfo.summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-[#495057] pb-2 mb-4">Professional Summary</h2>
          <p className="text-[#495057]">{resumeData.personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {resumeData.experience.some((exp) => exp.company || exp.position) && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-[#495057] pb-2 mb-4">Work Experience</h2>
          {resumeData.experience.map(
            (exp, index) =>
              (exp.company || exp.position) && (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium text-[#343a40]">{exp.position || "Position"}</h3>
                      <p className="text-[#495057]">{exp.company || "Company"}</p>
                    </div>
                    {(exp.startDate || exp.endDate) && (
                      <p className="text-sm text-[#6c757d]">
                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
                      </p>
                    )}
                  </div>
                  {exp.description && <p className="mt-2 text-[#495057]">{exp.description}</p>}
                </div>
              ),
          )}
        </section>
      )}

      {/* Education */}
      {resumeData.education.some((edu) => edu.institution || edu.degree) && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-[#495057] pb-2 mb-4">Education</h2>
          {resumeData.education.map(
            (edu, index) =>
              (edu.institution || edu.degree) && (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium text-[#343a40]">
                        {edu.degree} {edu.field ? `in ${edu.field}` : ""}
                      </h3>
                      <p className="text-[#495057]">{edu.institution}</p>
                    </div>
                    {(edu.startDate || edu.endDate) && (
                      <p className="text-sm text-[#6c757d]">
                        {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : "Present"}
                      </p>
                    )}
                  </div>
                  {edu.description && <p className="mt-2 text-[#495057]">{edu.description}</p>}
                </div>
              ),
          )}
        </section>
      )}

      {/* Skills */}
      {resumeData.skills.some((skill) => skill) && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-[#495057] pb-2 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map(
              (skill, index) =>
                skill && (
                  <span key={index} className="bg-[#e9ecef] text-[#495057] px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ),
            )}
          </div>
        </section>
      )}

      {/* Projects */}
      {resumeData.projects.some((project) => project.title) && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-[#495057] pb-2 mb-4">Projects</h2>
          {resumeData.projects.map(
            (project, index) =>
              project.title && (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-medium text-[#343a40]">{project.title}</h3>
                  {project.description && <p className="mt-1 text-[#495057]">{project.description}</p>}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      View Project
                    </a>
                  )}
                </div>
              ),
          )}
        </section>
      )}

      {/* Certifications */}
      {resumeData.certifications.some((cert) => cert.name) && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-[#495057] pb-2 mb-4">Certifications</h2>
          {resumeData.certifications.map(
            (cert, index) =>
              cert.name && (
                <div key={index} className="mb-2">
                  <h3 className="text-xl font-medium text-[#343a40]">{cert.name}</h3>
                  <div className="flex justify-between items-start">
                    <p className="text-[#495057]">{cert.issuer}</p>
                    {cert.date && <p className="text-sm text-[#6c757d]">{formatDate(cert.date)}</p>}
                  </div>
                </div>
              ),
          )}
        </section>
      )}
    </div>
  )
}

