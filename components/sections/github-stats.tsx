"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { githubStats } from "@/lib/data";
import { Card } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

// This section embeds live, real-time badges from github-readme-stats
// (github-readme-stats.vercel.app) — an open-source service that reads
// directly from the GitHub API. No numbers here are hardcoded or invented.
export default function GithubStats() {
  const { username, pinnedRepos } = githubStats;

  return (
    <section id="github" className="section-container border-t border-border">
      <SectionHeading
        eyebrow="06 — GitHub"
        title="Open-source activity"
        description={`Live data pulled directly from github.com/${username}.`}
      />

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=8B5CF6&icon_color=3B82F6&text_color=94A3B8`}
              alt={`${username}'s GitHub stats`}
              className="w-full max-w-md"
              loading="lazy"
            />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <Card className="flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&background=00000000&ring=3B82F6&fire=8B5CF6&currStreakLabel=8B5CF6`}
              alt={`${username}'s GitHub streak stats`}
              className="w-full max-w-md"
              loading="lazy"
            />
          </Card>
        </motion.div>
      </div>

      <Card className="mb-10 overflow-x-auto">
        <p className="text-sm font-semibold mb-4">Contribution activity — past year</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://ghchart.rshah.org/3B82F6/${username}`}
          alt={`${username}'s GitHub contribution graph`}
          className="w-full min-w-[600px]"
          loading="lazy"
        />
      </Card>

      <p className="text-sm font-semibold mb-4">Pinned repositories</p>
      <div className="grid sm:grid-cols-2 gap-5">
        {pinnedRepos.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group"
          >
            <Card className="h-full">
              <div className="flex items-center justify-between mb-3">
                <p className="font-mono text-sm font-medium group-hover:text-primary transition-colors">
                  {repo.name}
                </p>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{repo.description}</p>
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
