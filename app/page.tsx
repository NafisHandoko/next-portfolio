// "use client"

import { useEffect, useState } from "react";
import HeroSection from "./_components/sections/hero";
import AboutSection from "./_components/sections/about";
import ExperiencesSection from "./_components/sections/experiences";
import ServicesSection from "./_components/sections/services";
import ProjectsSection from "./_components/sections/projects";
import ArticlesSection from "./_components/sections/articles";
import ContactSection from "./_components/sections/contact";

export default function Home() {
    // const [isLoaded, setIsLoaded] = useState<boolean>(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoaded(true)
    //     }, 2000)
    // }, [])

    return (
        <>
            {/* <div className={`bg-light-codgray dark:bg-dark-codgray w-full h-screen fixed z-20 left-0 transition-all ${isLoaded ? 'bottom-[100%]' : 'bottom-0'}`}>
                <div className="container mx-auto flex items-center justify-center h-full">
                    <h1 className="font-bold text-3xl text-light-nero dark:text-dark-nero tracking-[20px] animate-bounce">HELLO!</h1>
                </div>
            </div> */}
            <HeroSection />
            <AboutSection />
            <ExperiencesSection />
            <ServicesSection />
            <ProjectsSection />
            <ArticlesSection />
            <ContactSection />
        </>
    );
}
