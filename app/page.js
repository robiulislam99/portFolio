import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PipelineRail from "@/components/PipelineRail";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { profile, education, experience } from "@/lib/content";
import { siteUrl } from "@/lib/site";

// Structured data so search engines can show a rich result for this person.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: `${siteUrl}/`,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  worksFor: { "@type": "Organization", name: experience[0].org },
  alumniOf: { "@type": "CollegeOrUniversity", name: education[0].school },
  sameAs: [profile.github.href, profile.linkedin.href],
  knowsAbout: ["Data engineering", "ETL", "PySpark", "Apache Iceberg", "Python", "Go", "Next.js"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <PipelineRail />
      <main id="main" tabIndex={-1} className="outline-none">
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
