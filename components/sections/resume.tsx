"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";

export default function Resume() {
  return (
    <section id="resume" className="section-container border-t border-border">
      <SectionHeading
        eyebrow="07 — Resume"
        title="One-page summary of the above"
        description="A condensed view of my experience, skills, and education — updated whenever a new project ships."
      />

      <Card className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-center">
        <div className="relative h-72 rounded-xl glass overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="text-center">
            <FileText className="h-10 w-10 text-primary mx-auto mb-3" />
            <p className="text-sm font-mono text-muted-foreground">resume.pdf</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">{siteConfig.name}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A single PDF covering my experience, technical skill set, education, and
            selected projects — formatted for both human reviewers and applicant
            tracking systems.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={() => (window.location.href = siteConfig.resumeUrl)}>
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full h-12 px-8 text-base font-medium bg-card text-foreground border border-border hover:border-primary/50 transition-all duration-200"
            >
              Preview in browser
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}
