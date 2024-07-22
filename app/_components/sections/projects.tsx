import { projectsData } from "@/app/_data/projects";
import Link from "next/link";
import ProjectsCard from "../widgets/projects/card";

export default function ProjectsSection() {
    return (
        <section id="projects" className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
            <h2 className="uppercase text-nero font-bold text-3xl">Projects</h2>
            <div className="flex flex-col">
                {projectsData && projectsData.slice(0, 3).map((project: any, index: any) => <ProjectsCard project={project} key={index} index={index} />)}
            </div>
            <Link href="/projects" className="text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-md px-8 py-4 self-center">Show more</Link>
        </section>
    )
}