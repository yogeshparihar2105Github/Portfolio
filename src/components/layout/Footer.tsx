import React from "react"

export function Footer() {
  return (
    <footer className="border-t border-border py-8 md:py-12 mt-20">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yogesh Parihar. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Built with React, Vite, Tailwind & Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:yogeshparihar2105@gmail.com"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/yogesh-parihar-56a30816b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yogeshparihar2105Github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://yogesh00parihar.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            itch.io
          </a>
        </div>
      </div>
    </footer>
  )
}
