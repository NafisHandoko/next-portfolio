import { projectsData } from "@/app/_data/projects";
import ProjectsCard from "../widgets/projects/card";
import Button from "../base/button";
import { MotionDiv, MotionH2, MotionSection } from "../wrapper/framer";
import { fadeInTransition, staggeredContainer, textVariantTransition } from "@/app/_utils/transitions";

export default function ProjectsSection() {
    return (
        <MotionSection
            variants={staggeredContainer(0.1, 0.1)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="show"
            initial="hidden"
            id="projects"
            className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10"
        >
            <MotionH2 variants={textVariantTransition(0)} className="uppercase text-nero font-bold text-3xl">Featured Projects</MotionH2>
            <div className="flex flex-col">
                {projectsData && projectsData.slice(0, 3).map((project, index) => <ProjectsCard project={project} key={index} />)}
            </div>
            <MotionDiv variants={fadeInTransition("up", "tween", 1.6, 0.7)} className="self-center">
                <Button type="Link" href="/projects" text="Show more" />
            </MotionDiv>
        </MotionSection>
    )
}