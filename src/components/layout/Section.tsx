import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 scroll-mt-20", className)}
      {...props}
    >
      <div className={cn("container mx-auto px-6 max-w-5xl", containerClassName)}>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-lg max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
