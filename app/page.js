import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PipelineRail from "@/components/PipelineRail";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <PipelineRail />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
