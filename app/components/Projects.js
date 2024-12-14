export default function Projects() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-base-100">
          <div className="card-body">
            <h3 className="card-title">Project Name</h3>
            <p>Project description goes here.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 