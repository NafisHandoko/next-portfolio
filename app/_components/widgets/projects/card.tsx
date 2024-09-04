import { FaDribbble, FaFigma, FaGithub } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import Badge from "../../base/badge";
import { MotionDiv } from "../../wrapper/framer";
import { fadeInTransition, staggeredContainer } from "@/app/_utils/transitions";
import { ProjectType } from "@/app/_types/project";

export default function ProjectsCard({ project }: { project: ProjectType }) {
    return (
        <MotionDiv
            variants={staggeredContainer(0.1, 0.1)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="show"
            initial="hidden"
            className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 border-y border-transparent hover:border-light-mineshaft dark:hover:border-dark-mineshaft transition-all py-7 group"
        >
            <MotionDiv variants={fadeInTransition("right", "tween", 0.3, 0.6)} className="w-full md:w-1/2 flex flex-col gap-3">
                <span className="text-xl font-semibold text-light-nero dark:text-dark-nero">{project.name}</span>
                <p className="text-light-silver dark:text-dark-silver">
                    {project.description}
                </p>
                <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                    {project.techStack && project.techStack.map((techStack, index) => <Badge key={index} text={techStack} />)}
                </div>
                <div className="flex flex-row items-center gap-3 text-light-nero dark:text-dark-nero mt-auto">
                    {project.demoURL != '' && <a href={project.demoURL} target="_blank" rel="noopener noreferrer"><GoLinkExternal size={"20px"} /></a>}
                    {project.repoURL != '' && <a href={project.repoURL} target="_blank" rel="noopener noreferrer"><FaGithub size={"20px"} /></a>}
                    {project.dribbbleURL != '' && <a href={project.dribbbleURL} target="_blank" rel="noopener noreferrer"><FaDribbble size={"20px"} /></a>}
                    {project.figmaURL != '' && <a href={project.figmaURL} target="_blank" rel="noopener noreferrer"><FaFigma size={"20px"} /></a>}
                </div>
            </MotionDiv>
            <MotionDiv variants={fadeInTransition("left", "tween", 0.3, 1)} className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div style={{ backgroundImage: `url(${project.image})` }} className={`bg-center bg-no-repeat bg-cover w-full md:w-5/6 h-56 md:h-64 rounded-md saturate-0 group-hover:saturate-100 transition-all`}></div>
            </MotionDiv>
        </MotionDiv>
    )
}