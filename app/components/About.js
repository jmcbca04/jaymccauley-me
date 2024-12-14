export default function About() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
      
      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-primary">In my professional life:</h3>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              I have over a decade of experience working in customer facing roles, most of the last decade in Customer Success.
            </p>
            <p>
              In summer of 2023 I started learning to code. Started with Python and became a Certified TensorFlow Developer.
            </p>
            <p>
              Followed that up by learning Next.js. Now I&apos;m continuing to learn by building my own little projects.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-primary">In my personal life:</h3>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              I love playing and watching sports. I&apos;m really into golf, and I also dabble in running and biking.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 