export function ModernTemplate({ resumeData }) {
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  return (
    <div className="font-sans text-gray-800 max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <header className="mb-8 border-b-2 border-gray-300 pb-4 flex items-center">
        {resumeData.personalInfo.image && (
          <img
            src={resumeData.personalInfo.image || "/placeholder.svg"}
            alt={resumeData.personalInfo.name}
            className="w-32 h-32 rounded-full object-cover mr-6"
          />
        )}
        <div className={resumeData.personalInfo.image ? "" : "w-full"}>
          <h1 className="text-4xl font-bold mb-2">{resumeData.personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-2">{resumeData.personalInfo.title}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>{resumeData.personalInfo.email}</span>
            <span>{resumeData.personalInfo.phone}</span>
            <span>{resumeData.personalInfo.address}</span>
          </div>
        </div>
      </header>

      {resumeData.personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">Professional Summary</h2>
          <p className="text-gray-600">{resumeData.personalInfo.summary}</p>
        </section>
      )}

      {resumeData.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Work Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-medium">{exp.position}</h3>
              <p className="text-gray-600 italic">{exp.company}</p>
              <p className="text-sm text-gray-500">
                {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
              </p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {resumeData.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-medium">
                {edu.degree} in {edu.field}
              </h3>
              <p className="text-gray-600 italic">{edu.institution}</p>
              <p className="text-sm text-gray-500">
                {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : "Present"}
              </p>
            </div>
          ))}
        </section>
      )}

      {resumeData.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

