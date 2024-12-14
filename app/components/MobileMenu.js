'use client';

import ThemeToggle from './ThemeToggle'

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-base-100" />
      <div className="relative h-full">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="text-xl font-bold">
              Jay McCauley
            </a>
            <button
              className="btn btn-ghost btn-circle"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            <a href="#about" className="text-xl hover:text-primary transition-colors" onClick={onClose}>About</a>
            <a href="#skills" className="text-xl hover:text-primary transition-colors" onClick={onClose}>Skills</a>
            <a href="#projects" className="text-xl hover:text-primary transition-colors" onClick={onClose}>Projects</a>
            <a href="#contact" className="text-xl hover:text-primary transition-colors" onClick={onClose}>Contact</a>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
} 