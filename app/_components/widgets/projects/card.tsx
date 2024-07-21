import { FaGithub } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import Badge from "../../base/badge";

export default function ProjectsCard({ project }: any) {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 border-y border-transparent hover:border-mineshaft transition-all py-7">
            <div className="w-full md:w-1/2 flex flex-col gap-3">
                <span className="text-xl font-semibold text-nero">{project.name}</span>
                <p className="text-silver">
                    {project.description}
                </p>
                <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                    {project.techStack && project.techStack.map((techStack: any, index: any) => <Badge key={index} text={techStack} />)}
                </div>
                <div className="flex flex-row items-center gap-3 text-nero mt-auto">
                    <GoLinkExternal size={"20px"} />
                    <FaGithub size={"20px"} />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div style={{ backgroundImage: `url(${project.image})` }} className={`bg-center bg-no-repeat bg-cover w-full md:w-5/6 h-56 md:h-64 rounded-md saturate-0 hover:saturate-100 transition-all`}></div>
            </div>
        </div>
    )
}