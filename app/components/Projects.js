const ProjectCard = ({ title, description, tech, liveUrl }) => (
  <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
    <div className="card-body">
      <h3 className="card-title text-primary">{title}</h3>
      <p className="text-base-content/80">{description}</p>
      {tech && (
        <div className="flex flex-wrap gap-2 my-4">
          {tech.map((item, index) => (
            <span key={index} className="badge badge-outline">{item}</span>
          ))}
        </div>
      )}
      <div className="card-actions justify-end">
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View Project
        </a>
      </div>
    </div>
  </div>
)

export default function Projects() {
  const projects = [
    {
      title: "Crystal Ball",
      description: "A web application for predicting and analyzing sports betting outcomes using machine learning.",
      tech: ["Python", "FastAPI","Next.js", "MongoDB", "Stripe","Machine Learning", "Tailwind CSS", "DaisyUI"],
      liveUrl: "https://www.getcrystalball.com/",
    },
    {
      title: "QuickLaunch",
      description: "A platform for quickly launching and managing SaaS applications with built-in authentication and payments.",
      tech: ["Next.js", "Tailwind CSS", "DaisyUI"],
      liveUrl: "https://www.usequicklaunch.com/",
    },
    {
      title: "ClickTrail",
      description: "Analytics tool for tracking and visualizing user behavior on websites.",
      tech: ["Next.js", "NeonDB", "Tailwind CSS", "DaisyUI"],
      liveUrl: "https://www.getclicktrail.com/",
    },
    {
      title: "Homepage Design Works",
      description: "Platform for creating and managing professional homepages with modern designs.",
      tech: ["Next.js", "DaisyUI", "Tailwind CSS", "React"],
      liveUrl: "https://www.homepagedesignworks.com/",
    },
    {
      title: "Landscaper Website",
      description: "Modern, responsive website template for landscaping businesses.",
      tech: ["Next.js", "Tailwind CSS", "DaisyUI", "Sanity", "Responsive Design"],
      liveUrl: "https://landscaper-chi.vercel.app/",
    },
    {
      title: "Basketball Stats Dashboard",
      description: "Interactive dashboard for analyzing high school basketball statistics and player performance.",
      tech: ["Python", "Streamlit", "Pandas", "Data Analysis", "Data Visualization"],
      liveUrl: "https://fhs-mbb-stats.streamlit.app/",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">I built this stuff</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
} 