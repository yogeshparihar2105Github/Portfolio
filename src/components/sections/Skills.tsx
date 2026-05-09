import React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend & UI",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "Golang",
      "REST APIs",
      "Postman",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Vector Databases",
      "ChromaDB",
    ],
  },
  {
    title: "AI Product Engineering",
    skills: [
      "AI-assisted Development",
      "RAG Systems",
      "Prompt Engineering",
      "LLM Integrations",
      "Rapid Prototyping",
      "Fullstack Systems",
    ],
  },
  {
    title: "3D & Interactive Experiences",
    skills: [
      "Unity3D",
      "Three.js",
      "AR/VR Experiences",
      "Interactive UI",
    ],
  },
  {
    title: "AI & Creative Tools",
    skills: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Veo 3",
      "Cursor",
      "Figma",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Antigravity",
      "Codex",
    ],
  },
]

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Expertise"
      subtitle="The tools and technologies I use to build scalable products and immersive experiences."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-border transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-secondary/50 px-2.5 py-1 text-xs font-medium text-secondary-foreground border border-border/50 hover:bg-secondary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
