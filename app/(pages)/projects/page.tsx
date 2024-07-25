"use client"

import { useState } from "react";
import Button from "../../_components/base/button";
import ProjectsCard2 from "../../_components/widgets/projects/card2";
import { projectsData } from "../../_data/projects";
import { MotionDiv, MotionH2 } from "@/app/_components/base/framer";
import { fadeInTransition, textVariantTransition } from "@/app/_utils/motion";

const projectCategories = ['All', 'No-Code', 'Web', 'Mobile', 'UI/UX', 'AI']

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const filteredProjects = selectedCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.techStack.includes(selectedCategory));

    return (
        <div className="container mx-auto flex flex-col items-center px-10 md:px-40 py-24 pt-36 gap-16" id="header">
            <MotionH2
                variants={textVariantTransition(0)}
                animate="show"
                initial="hidden"
                className="uppercase text-nero font-bold text-3xl"
            >
                Projects
            </MotionH2>
            <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                {projectCategories.map((category: any, i: any) =>
                    <MotionDiv
                        variants={fadeInTransition("up", "tween", 0.1 * i, 0.2)}
                        initial="hidden"
                        animate="show"
                    >
                        <Button type="tab" text={category} className={selectedCategory == category ? '!bg-nero !text-codgray' : ''} onClick={() => setSelectedCategory(category)} />
                    </MotionDiv>
                )}
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-7"
            >
                {filteredProjects.map((project, index) =>
                    <MotionDiv
                        key={index}
                        variants={fadeInTransition("up", "tween", 0.2, 0.5)}
                        viewport={{ once: true, amount: 0.25 }}
                        whileInView="show"
                        initial="hidden"
                    >
                        <ProjectsCard2 project={project} />
                    </MotionDiv>
                )}
            </div>
        </div>
    )
}