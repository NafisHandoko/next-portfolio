import Button from "../_components/base/button";
import ProjectsCard2 from "../_components/widgets/projects/card2";
import { projectsData } from "../_data/projects";

export default function ProjectsPage() {
    return (
        <div className="container mx-auto flex flex-col items-center px-10 md:px-40 py-24 pt-36 gap-16">
            <h2 className="uppercase text-nero font-bold text-3xl">Projects</h2>
            <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                <Button type="tab" text="All" />
                <Button type="tab" text="No-Code" />
                <Button type="tab" text="Web" />
                <Button type="tab" text="Mobile" />
                <Button type="tab" text="UI/UX" />
                <Button type="tab" text="AI" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {projectsData && projectsData.map((project: any, index: any) => <ProjectsCard2 project={project} key={index} index={index} />)}
            </div>
        </div>
    )
}