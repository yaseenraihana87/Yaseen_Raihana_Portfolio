import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Certifications from "@/components/sections/certifications";
import GithubStats from "@/components/sections/github-stats";
import Resume from "@/components/sections/resume";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <GithubStats />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
