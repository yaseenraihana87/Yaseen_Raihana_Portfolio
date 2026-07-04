"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { skillCategories } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/ui/section-heading";

function CategoryIcon({ name }: { name: string }) {
  const Icon = (Icons as unknown as Record<string, React.ElementType>)[name] ?? Icons.Code2;
  return <Icon className="h-5 w-5 text-primary" />;
}

export default function Skills() {
  return (
    <section id="skills" className="section-container border-t border-border">
      <SectionHeading
        eyebrow="02 — Skills"
        title="Tools I build with"
        description="Languages, frameworks, and concepts I use across machine learning and full-stack projects."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          >
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CategoryIcon name={category.icon} />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
