const FloatingIcon = ({ className, icon }) => (
  <div className={`absolute opacity-20 dark:invert ${className}`}>
    <img src={icon} alt="" className="w-12 h-12" />
  </div>
)

export default function Hero() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-32 md:pt-16 relative">
      {/* Tech Floating Icons */}
      <FloatingIcon className="hidden md:block left-24 top-1/3 animate-float" icon="/cube.svg" />
      <FloatingIcon className="left-4 md:left-1/4 bottom-1/4 md:bottom-1/3 animate-float-delay-1" icon="/globe.svg" />
      <FloatingIcon className="right-4 md:left-1/3 top-1/4 md:bottom-1/4 animate-float-delay-2" icon="/code.svg" />
      <FloatingIcon className="hidden md:block right-32 top-1/4 animate-float-delay-3" icon="/branch.svg" />

      <div className="max-w-screen-xl mx-auto text-center">
        {/* Profile Image */}
        <div className="w-40 h-40 mx-auto mb-16 rounded-full overflow-hidden ring-4 ring-primary">
          <img 
            src="/headshot.png" 
            alt="Jay McCauley"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Text */}
        <div className="space-y-8">
          <h1 className="text-6xl font-medium mb-4">
            Hey there!
          </h1>
          <p className="text-3xl leading-relaxed">
            Yes, you reading this. Welcome to my little corner of the internet.<br />
            I&apos;m <span className="relative inline-block">
              Jay McCauley
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary"></span>
            </span>, nice to meet you.
          </p>
          <div className="text-4xl space-y-4">
            <p>
              I like to learn <span className="inline-flex gap-3">👨🏼‍💻</span>
            </p>
            <p>
              I like to <span className="inline-flex gap-3">🏌️ 🏃 🚴</span>
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 text-base-content/60">
          Check out more below
          <div className="mt-4 animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  )
} 