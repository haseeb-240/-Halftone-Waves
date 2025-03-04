export function ClassicTemplate({ resumeData }) {
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  return (
    <div className="font-serif text-gray-800 max-w-4xl mx-auto p-8 bg-white">
      <header className="text-center mb-8">
        {resumeData.personalInfo.image && (
          <img
            src={resumeData.personalInfo.image || "/placeholder.svg"}
            alt={resumeData.personalInfo.name}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
          />
        )}
        <h1 className="text-4xl font-bold mb-2">{resumeData.personalInfo.name}</h1>
        <p className="text-xl mb-2">{resumeData.personalInfo.title}</p>
        <div className="text-sm">
          <p>
            {resumeData.personalInfo.email} | {resumeData.personalInfo.phone}
          </p>
          <p>{resumeData.personalInfo.address}</p>
        </div>
      </header>

      {resumeData.personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300">Professional Summary</h2>
          <p>{resumeData.personalInfo.summary}</p>
        </section>
      )}

      {resumeData.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300">Work Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-medium">{exp.position}</h3>
                <p className="text-sm italic">
                  {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
                </p>
              </div>
              <p className="font-semibold">{exp.company}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {resumeData.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-medium">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-sm italic">
                  {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : "Present"}
                </p>
              </div>
              <p className="font-semibold">{edu.institution}</p>
            </div>
          ))}
        </section>
      )}

      {resumeData.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300">Skills</h2>
          <ul className="list-disc list-inside columns-2">
            {resumeData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

