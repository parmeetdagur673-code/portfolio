import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import ProjectsExperience from "@/components/projects/ProjectsExperience";
import Reviews from "@/components/reviews/Reviews";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Skills />
      <ProjectsExperience />
      <Reviews />
      <Contact />
    </main>
  );
}
