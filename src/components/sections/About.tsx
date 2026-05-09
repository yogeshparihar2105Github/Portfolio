import React from "react"
import { Section } from "@/components/layout/Section"
import { Code2, MonitorPlay, Sparkles } from "lucide-react"

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A quick look into my background and what drives me."
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am an <strong className="text-foreground font-semibold">AI Product Engineer</strong> with 4+ years of experience building scalable, high-performance web applications. My foundation is deeply rooted in <strong className="text-foreground font-semibold">React.js, Next.js</strong> and modern <strong className="text-foreground font-semibold">JavaScript</strong> ecosystem.
          </p>
          <p>
            Beyond frontend architecture, I work with <strong className="text-foreground font-semibold">Golang</strong> for backend systems, enabling me to have a full-stack product mindset. I focus on building complete features, optimizing performance, and ensuring reusable UI systems.
          </p>
          <p>
            What sets me apart is my creative range. I have experience building <strong className="text-foreground font-semibold">Unity3D games</strong> and AR/VR interactive experiences. Whether it's a serious production-grade platform or an immersive 3D world, I bring engineering depth and visual polish to the table.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MonitorPlay className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-foreground font-semibold text-lg mb-2">Product Engineering</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I think beyond the code. I build features that solve real user problems with a focus on polished UX and scalable architecture.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-foreground font-semibold text-lg mb-2">Creative Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From WebGL to Unity3D, I love bridging the gap between standard web interfaces and immersive, interactive experiences.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-foreground font-semibold text-lg mb-2">Technical Excellence</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Strong fundamentals in Data Structures & Algorithms, clean code principles, and performance optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
