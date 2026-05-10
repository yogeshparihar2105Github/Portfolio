import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients/glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 inline-flex items-center rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1 text-sm text-muted-foreground"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text bg-gradient-to-b from-white to-white/60 pb-4"
        >
          AI Product Engineer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          “I turn ideas into AI-powered products — blending full-stack engineering, rapid prototyping, and interactive experiences to build scalable, user-focused solutions.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" onClick={scrollToProjects} className="w-full sm:w-auto group">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto group"
            onClick={() => {
              const a = document.createElement('a')
              a.href = '/Yogesh_Parihar_Resume.pdf'
              a.download = 'Yogesh_Parihar_Resume.pdf'
              a.click()
            }}
          >
            Download Resume
            <Download className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-sm text-muted-foreground font-medium"
        >
          <p>4+ years building production-grade products @ <a href="https://kushmanda.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4">Kushmanda.ai</a></p>
        </motion.div>
      </div>
    </section>
  )
}
