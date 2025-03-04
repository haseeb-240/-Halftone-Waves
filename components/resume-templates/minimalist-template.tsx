export function MinimalistTemplate({ resumeData }) {
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  return (
    <div className="font-sans text-gray-800 max-w-4xl mx-auto p-8 bg-white">
      <header className="mb-8 flex items-center">
        {resumeData.personalInfo.image && (
          <img
            src={resumeData.personalInfo.image || "/placeholder.svg"}
            alt={resumeData.personalInfo.name}
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
        )}
        <div>
          <h1 className="text-4xl font-light mb-2">{resumeData.personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-2">{resumeData.personalInfo.title}</p>
          <div className="text-sm text-gray-600">
            <p>
              {resumeData.personalInfo.email} • {resumeData.personalInfo.phone}
            </p>
            <p>{resumeData.personalInfo.address}</p>
          </div>
        </div>
      </header>

      {resumeData.personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2 uppercase tracking-wider">About</h2>
          <p className="text-gray-600">{resumeData.personalInfo.summary}</p>
        </section>
      )}

      {resumeData.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider">Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-medium">{exp.position}</h3>
                <p className="text-sm text-gray-600">
                  {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
                </p>
              </div>
              <p className="text-gray-600">{exp.company}</p>
              <p className="mt-2 text-sm">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {resumeData.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-medium">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-sm text-gray-600">
                  {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : "Present"}
                </p>
              </div>
              <p className="text-gray-600">{edu.institution}</p>
            </div>
          ))}
        </section>
      )}

      {resumeData.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2 uppercase tracking-wider">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span key={index} className="border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

