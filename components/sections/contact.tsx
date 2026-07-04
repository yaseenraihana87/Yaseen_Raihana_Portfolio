"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Code2, Trophy, Send, Loader2, CheckCircle2 } from "lucide-react";
import { siteConfig, contactInfo } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const contactLinks = [
    { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: siteConfig.location, href: undefined },
    { icon: Github, label: "GitHub", href: siteConfig.social.github },
    { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
    { icon: Code2, label: "LeetCode", href: siteConfig.social.leetcode },
    { icon: Trophy, label: "HackerRank", href: siteConfig.social.hackerrank }
  ];

  return (
    <section id="contact" className="section-container border-t border-border">
      <SectionHeading eyebrow="08 — Contact" title={contactInfo.heading} description={contactInfo.subheading} />

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const content = (
              <>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{link.label}</span>
              </>
            );
            return link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/30 border border-transparent transition-colors"
              >
                {content}
              </a>
            ) : (
              <div key={link.label} className="flex items-center gap-4 glass rounded-2xl p-4">
                {content}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-11 rounded-lg bg-muted border border-border px-4 text-sm focus:border-primary/50 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-11 rounded-lg bg-muted border border-border px-4 text-sm focus:border-primary/50 outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg bg-muted border border-border px-4 py-3 text-sm focus:border-primary/50 outline-none transition-colors resize-none"
                  placeholder="Tell me about the role, project, or idea..."
                />
              </div>

              <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send message
                  </>
                )}
              </Button>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong — please email me directly at {siteConfig.email}.
                </p>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
