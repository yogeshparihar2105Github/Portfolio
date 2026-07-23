import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Home } from "@/pages/Home"
import { CopyCleanPrivacy } from "@/pages/CopyCleanPrivacy"
import { ReadingProgressPrivacy } from "@/pages/ReadingProgressPrivacy"
import { PixelPomodoroPrivacy } from "@/pages/PixelPomodoroPrivacy"

import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/copy-clean-privacy" element={<CopyCleanPrivacy />} />
              <Route path="/reading-progress-privacy" element={<ReadingProgressPrivacy />} />
              <Route path="/pixel-pomodoro-privacy" element={<PixelPomodoroPrivacy />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
