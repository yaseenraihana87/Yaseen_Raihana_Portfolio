"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Download,
  ArrowDown,
  Mail,
} from "lucide-react";
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
  const techStack = [
  { label: "Python", slug: "python" },
  { label: "Java", slug: "openjdk" },
  { label: "React", slug: "react" },
  { label: "TensorFlow", slug: "tensorflow" },
  { label: "Spring Boot", slug: "spring" },       // instead of springboot
  { label: "OpenCV", slug: "opencv" },
  { label: "Scikit-learn", slug: "scikitlearn" },
  { label: "MySQL", slug: "mysql" },
];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      {/* Background */}
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
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to internships & opportunities
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Hi, I'm {siteConfig.name}
            <span className="block mt-2 gradient-text">
              {typed}
              <span className="inline-block w-[2px] h-[0.9em] bg-primary ml-1 align-middle animate-pulse" />
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            {siteConfig.shortIntro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() =>
                (window.location.href = siteConfig.resumeUrl)
              }
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex items-center gap-4">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-11 w-11 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-11 w-11 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="h-11 w-11 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        {/* Right Side */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
  className="relative h-[420px] hidden md:block"
>
  {[
    { label: "Python", slug: "python", top: "6%", left: "18%", delay: 0 },
    { label: "Java", slug: "openjdk", top: "2%", left: "58%", delay: 0.4 },
    { label: "React", slug: "react", top: "22%", left: "72%", delay: 0.8 },
    { label: "TensorFlow", slug: "tensorflow", top: "38%", left: "8%", delay: 1.2 },
    { label: "Spring Boot", slug: "springboot", top: "48%", left: "44%", delay: 0.2 },
    { label: "OpenCV", slug: "opencv", top: "62%", left: "70%", delay: 0.6 },
    { label: "Scikit-learn", slug: "scikitlearn", top: "72%", left: "22%", delay: 1.0 },
    { label: "MySQL", slug: "mysql", top: "82%", left: "56%", delay: 1.4 },
  ].map((tech) => (
    <motion.div
      key={tech.label}
      className="absolute flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-sm font-medium text-white shadow-lg"
      style={{ top: tech.top, left: tech.left }}
      animate={{ y: [0, -14, 0] }}
      whileHover={{
        scale: 1.08,
        rotate: 2,
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: tech.delay,
        },
        scale: {
          duration: 0.2,
        },
      }}
    >
      <Image
        src={`https://cdn.simpleicons.org/${tech.slug}`}
        alt={tech.label}
        width={18}
        height={18}
        //className="opacity-90"
        unoptimized
      />

      <span>{tech.label}</span>
    </motion.div>
  ))}

  <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />
</motion.div>
      </div>

      <motion.button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll Down"
      >
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}