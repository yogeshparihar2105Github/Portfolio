import React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "MyNetworthPro",
    description:
      "A networth projection tool that calculates future net worth using income, expense, assets, and liabilities. Provides interactive charts and comprehensive financial insights.",
    tech: ["React", "Chart.js", "Golang", "PostgreSQL"],
    placeholderText: "Networth Projection Dashboard",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "MetaStockPicker",
    description:
      "An AR/VR stock market visualization platform with immersive 3D interaction. Allows users to analyze market trends in a virtual environment.",
    tech: ["Unity3D", "Three.js", "React", "Golang"],
    placeholderText: "3D Stock Market Interface",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "WikiBedtimeStories",
    description:
      "A platform for reading and writing bedtime stories in text, audio, and video formats for kids. Features a rich media experience.",
    tech: ["React", "Golang", "Media APIs"],
    placeholderText: "Interactive Storybook Platform",
    color: "from-orange-500/20 to-red-500/20",
  },
]

export function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Selected work that showcases my ability to build complete products from frontend to backend."
    >
      <div className="grid gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative grid md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-3xl p-6 md:p-8 overflow-hidden hover:border-primary/50 transition-colors"
          >
            {/* Visual Treatment Placeholder */}
            <div className={`aspect-video rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center border border-border overflow-hidden relative`}>
              <div className="absolute inset-0 bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Button variant="secondary" className="scale-90 group-hover:scale-100 transition-transform">
                  View Case Study
                </Button>
              </div>
              <span className="text-muted-foreground font-medium text-center px-4">
                {project.placeholderText}
              </span>
            </div>

            {/* Project Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button className="group/btn">
                  Live Demo
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
