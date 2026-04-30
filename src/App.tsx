import React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { GameLab } from "@/components/sections/GameLab"
import { ProblemSolving } from "@/components/sections/ProblemSolving"
import { Contact } from "@/components/sections/Contact"

import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
        <Navbar />
        
        <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GameLab />
        <ProblemSolving />
        <Contact />
      </main>

      <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
