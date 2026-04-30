import React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Brain, CheckCircle2 } from "lucide-react"

export function ProblemSolving() {
  return (
    <Section
      id="problemsolving"
      title="Problem Solving"
      subtitle="Strong analytical skills backed by consistent practice and algorithmic problem solving."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border p-8 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Brain className="w-48 h-48" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl font-extrabold text-primary">300+</span>
              <span className="text-xl font-semibold text-foreground">Problems Solved</span>
            </div>
            <p className="text-muted-foreground mb-6">Active on LeetCode</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Arrays", "Trees", "Dynamic Programming", "Recursion", "Binary Search", "Graphs"].map((topic) => (
                <div key={topic} className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-2 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
