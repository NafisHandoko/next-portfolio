"use client";
import HeroSection from "./_components/sections/hero";
import HeaderSection from "./_components/sections/header";
import AboutSection from "./_components/sections/about";
import ExperiencesSection from "./_components/sections/experiences";
import ServicesSection from "./_components/sections/services";
import ProjectsSection from "./_components/sections/projects";
import ContactSection from "./_components/sections/contact";
import FooterSection from "./_components/sections/footer";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <AboutSection />
        <div className="container-tight">
          <div className="section-divider" />
        </div>
        <ExperiencesSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
