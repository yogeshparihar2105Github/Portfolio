import React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Where I've worked and what I've accomplished."
    >
      <div className="relative pl-8 md:pl-0">
        {/* Timeline Line for Mobile */}
        <div className="md:hidden absolute top-0 bottom-0 left-[11px] w-px bg-border" />

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 md:text-right pt-2">
            <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
              Jul 2022 – Present
            </span>
          </div>
          
          <div className="md:col-span-3 relative">
            {/* Timeline Dot */}
            <div className="absolute -left-10 md:-left-[45px] top-3 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
            
            {/* Timeline Line for Desktop */}
            <div className="hidden md:block absolute top-6 bottom-[-100px] -left-[38px] w-px bg-border" />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-foreground mb-1">Product Engineer II</h3>
              <p className="text-primary font-medium mb-4">kushmanda.ai</p>
              
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Led frontend development for 3 production-grade platforms using React.js.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Built reusable React UI systems, improving development speed and design consistency.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Developed immersive AR/VR experiences using Unity3D and Three.js.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Designed and integrated robust REST APIs with Golang.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Improved overall performance, responsiveness, and SEO across all platforms.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Worked closely with product and design teams to deliver polished user experiences.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}
