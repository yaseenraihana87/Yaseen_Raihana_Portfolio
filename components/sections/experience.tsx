"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Trophy } from "lucide-react";
import { experience } from "@/lib/data";
import { Card } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

export default function Experience() {
  return (
    <section id="experience" className="section-container border-t border-border">
      <SectionHeading
        eyebrow="04 — Experience"
        title="Where I've built"
        description="A hands-on internship that shaped how I think about the end-to-end machine learning workflow."
      />

      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border hidden sm:block" />

        <div className="space-y-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative sm:pl-12"
            >
              <span className="absolute left-0 top-1.5 h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hidden sm:flex items-center justify-center text-white text-xs font-semibold">
                {i + 1}
              </span>

              <Card>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm text-primary font-medium mt-0.5">{item.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-muted-foreground">{item.period}</p>
                    {item.location && (
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1 justify-end">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/70 mb-2.5">
                      Responsibilities
                    </p>
                    <ul className="space-y-2">
                      {item.responsibilities.map((r) => (
                        <li key={r} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/70 mb-2.5">
                      Achievements
                    </p>
                    <ul className="space-y-2">
                      {item.achievements.map((a) => (
                        <li key={a} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                          <Trophy className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
