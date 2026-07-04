"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown, Mail } from "lucide-react";
import { siteConfig, typingWords } from "@/lib/data";
import { Button } from "@/components/ui/button";

function useTypingEffect(words: string[]) {
  const [text, setText] = React.useState("");
  const [wordIndex, setWordIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(typingWords);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <div
        aria-hidden
        className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blue-500/20 blur-[110px] animate-blob -z-10"
      />
      <div
        aria-hidden
        className="absolute top-40 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[110px] animate-blob [animation-delay:4s] -z-10"
      />

      <div className="container mx-auto px-6 md:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to internships &amp; opportunities
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Hi, I&apos;m {siteConfig.name} {" "}
            <span className="block mt-2 gradient-text">
              {typed}
              <span className="inline-block w-[2px] h-[0.9em] bg-primary ml-1 align-middle animate-pulse" />
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            {siteConfig.shortIntro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => (window.location.href = siteConfig.resumeUrl)}>
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-11 w-11 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-11 w-11 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="h-11 w-11 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

       
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}
