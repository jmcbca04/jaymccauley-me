'use client';

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="max-w-md mx-auto">
        <div className="card bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" className="input input-bordered" />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" className="input input-bordered" />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-24"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 