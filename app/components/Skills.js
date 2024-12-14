const SkillCard = ({ title, description, icon, proficiency }) => (
  <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
    <div className="card-body">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="text-base-content/80 mb-4">{description}</p>
      <div className="w-full bg-base-200 rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-500" 
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  </div>
)

const CertificationCard = ({ title, issuer, date, skills }) => (
  <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
    <div className="card-body">
      <h3 className="card-title text-primary">{title}</h3>
      <p className="text-base-content/80">{issuer}</p>
      <p className="text-sm text-base-content/60">{date}</p>
      {skills && (
        <div className="mt-2">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="badge badge-outline">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
)

export default function Skills() {
  const skills = [
    {
      title: "Python & TensorFlow",
      description: "Machine learning and data analysis with Python, including neural networks and deep learning.",
      proficiency: 90,
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"/>
        </svg>
      ),
    },
    {
      title: "Next.js & React",
      description: "Building modern web applications with Next.js 14 and React, focusing on performance and user experience.",
      proficiency: 85,
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"/>
        </svg>
      ),
    },
    {
      title: "SQL & Databases",
      description: "Working with PostgreSQL and database design, focusing on efficient queries and data modeling.",
      proficiency: 80,
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"/>
        </svg>
      ),
    },
    {
      title: "AWS Cloud",
      description: "Cloud infrastructure and services, certified as an AWS Cloud Practitioner.",
      proficiency: 75,
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"/>
        </svg>
      ),
    },
  ]

  const certifications = [
    {
      title: "Complete SQL + Databases Bootcamp",
      issuer: "Zero To Mastery Academy",
      date: "July 2024",
      skills: ["SQL", "PostgreSQL", "Databases"]
    },
    {
      title: "Complete Next.js Developer",
      issuer: "Zero To Mastery Academy",
      date: "May 2024",
      skills: ["Next.js"]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Zero To Mastery Academy",
      date: "Jan 2024",
      skills: ["Amazon Web Services (AWS)"]
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "Jan 2024",
      skills: ["Machine Learning", "Neural Networks", "Deep Learning"]
    },
    {
      title: "Django Bootcamp",
      issuer: "Zero To Mastery Academy",
      date: "Nov 2023",
      skills: ["Django REST Framework", "Django"]
    },
    {
      title: "Complete Python Developer",
      issuer: "Zero To Mastery Academy",
      date: "Oct 2023",
      skills: ["Python", "Machine Learning", "Pandas", "Data Analysis"]
    }
  ]

  return (
    <div className="container mx-auto px-4 space-y-24">
      {/* Technical Skills Section */}
      <div>
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </div>
  )
} 