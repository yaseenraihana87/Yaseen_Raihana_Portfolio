"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FileText, CircleDot } from "lucide-react";
import { projects, projectCategories, type ProjectStatus } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "text-green-400",
  "In Progress": "text-amber-400"
};

export default function Projects() {
  const [active, setActive] = React.useState<(typeof projectCategories)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-container border-t border-border">
      <SectionHeading
        eyebrow="03 — Projects"
        title="Selected work"
        description="Case studies spanning computer vision, deep learning, and full-stack development — from problem framing to what was actually built."
      />

      <div className="flex flex-wrap gap-2 mb-12">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium border transition-all duration-200",
              active === cat
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full flex flex-col">
                

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-primary">{project.category}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/70 mb-1.5">
                    Problem
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/70 mb-2">
                    Key features
                  </p>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <p className="text-sm mb-6 leading-relaxed">
                  <span className="font-semibold text-foreground">Results — </span>
                  <span className="text-muted-foreground">{project.results}</span>
                </p>

                {(project.githubUrl || project.liveUrl || project.caseStudyUrl) && (
                  <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full h-9 px-4 text-sm font-medium bg-card text-foreground border border-border hover:border-primary/50 transition-all duration-200"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full h-9 px-4 text-sm font-medium bg-card text-foreground border border-border hover:border-primary/50 transition-all duration-200"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.caseStudyUrl && (
                      <a
                        href={project.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full h-9 px-4 text-sm font-medium hover:bg-muted text-foreground transition-all duration-200"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        Case Study
                      </a>
                    )}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
