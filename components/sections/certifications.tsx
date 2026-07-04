"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";
import { Card } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

function CertIcon({ name }: { name: string }) {
  const Icon = (Icons as unknown as Record<string, React.ElementType>)[name] ?? Icons.BadgeCheck;
  return <Icon className="h-6 w-6 text-primary" />;
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-container border-t border-border">
      <SectionHeading
        eyebrow="05 — Certifications"
        title="Credentials that back the work"
        description="Structured learning that complements hands-on experience, from cloud fundamentals to data analytics."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => {
          const CardInner = (
            <Card className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CertIcon name={cert.logo} />
                </div>
                {cert.credentialUrl && (
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                )}
              </div>
              <h3 className="font-semibold leading-snug">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{cert.issuer}</p>
              {cert.date && (
                <p className="text-xs font-mono text-muted-foreground/70 mt-auto pt-4">
                  Issued {cert.date}
                </p>
              )}
            </Card>
          );

          return cert.credentialUrl ? (
            <motion.a
              key={cert.title}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group"
            >
              {CardInner}
            </motion.a>
          ) : (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              {CardInner}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
