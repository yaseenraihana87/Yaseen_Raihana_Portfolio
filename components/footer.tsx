import { Github, Linkedin, Code2, Trophy, Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container !py-16 grid gap-12 md:grid-cols-3">
        <div>
          <a href="#" className="font-semibold tracking-tight text-lg">
            {siteConfig.name.split(" ")[0]}
            <span className="gradient-text">.</span>
          </a>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
            {siteConfig.role} building full-stack applications and machine
            learning / computer vision projects.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4">Connect</h3>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Code2 className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackerRank"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Trophy className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-container !py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
