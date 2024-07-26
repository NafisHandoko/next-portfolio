import { FaGithub } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import Badge from "../../base/badge";
import { ProjectType } from "@/app/_types/project";

export default function ProjectsCard2({ project }: { project: ProjectType }) {
    return (
        <div className="h-full rounded-md border border-mineshaft hover:border-nero group transition-all flex flex-col gap-3 p-2">
            <div style={{ backgroundImage: `url(${project.image})` }} className={`bg-center bg-no-repeat bg-cover w-full h-56 md:h-64 rounded-sm saturate-0 group-hover:saturate-100 transition-all`}></div>
            <div className="p-3 flex flex-col gap-5">
                <h2 className="font-bold text-nero">{project.name}</h2>
                <p className="text-silver text-sm">{project.description}</p>
                <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                    {project.techStack && project.techStack.map((techStack, index) => <Badge key={index} text={techStack} />)}
                </div>
                <div className="flex flex-row items-center gap-3 text-nero mt-auto">
                    {project.demoURL != '' && <a href={project.demoURL} target="_blank" rel="noopener noreferrer"><GoLinkExternal size={"20px"} /></a>}
                    {project.repoURL != '' && <a href={project.repoURL} target="_blank" rel="noopener noreferrer"><FaGithub size={"20px"} /></a>}
                </div>
            </div>
        </div>
    )
}