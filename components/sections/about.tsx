"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading
        eyebrow="01 — About"
        title="Engineer by trade, researcher at heart"
        description={about.intro}
      />

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-3">Career Objective</h3>
          <p className="text-muted-foreground leading-relaxed">{about.objective}</p>

          <h3 className="text-lg font-semibold mb-3 mt-8">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {about.interests.map((interest) => (
              <Badge key={interest}>{interest}</Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-6">Journey</h3>
          <ol className="relative border-l border-border pl-6 space-y-8">
            {about.timeline.map((item, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                <p className="text-xs font-mono text-primary">{item.year}</p>
                <p className="font-medium mt-1">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.org}</p>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
