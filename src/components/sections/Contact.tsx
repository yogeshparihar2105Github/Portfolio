import React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <Section
      id="contact"
      className="pb-0 border-t border-border mt-12 bg-card/30"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let's build something <span className="text-muted-foreground">great</span> together.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base group" onClick={() => window.location.href = 'mailto:yogeshparihar@example.com'}>
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base group" onClick={() => window.open('https://linkedin.com', '_blank')}>
              Connect on LinkedIn
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
