export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Want to get in touch?</h2>
        <p className="text-xl">
          Just{" "}
          <a 
            href="mailto:jay@jaymccauley.me"
            className="text-primary hover:underline"
          >
            shoot me an email
          </a>
        </p>
      </div>
    </div>
  );
} 