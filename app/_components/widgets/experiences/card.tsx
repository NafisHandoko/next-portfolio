import { fadeInTransition, staggeredContainer } from "@/app/_utils/transitions";
import Badge from "../../base/badge";
import { MotionDiv } from "../../wrapper/framer";
import { ExperienceType } from "@/app/_types/experience";

export default function ExperiencesCard({ experience }: { experience: ExperienceType }) {
    return (
        <MotionDiv
            variants={staggeredContainer(0.1, 0.1)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="show"
            initial="hidden"
            className="flex flex-col md:flex-row gap-3 md:gap-10"
        >
            <MotionDiv variants={fadeInTransition("right", "tween", 0.3, 0.6)} className="w-full md:w-1/2">
                <span className="font-semibold text-light-jumbo dark:text-dark-jumbo">{experience.periode}</span>
            </MotionDiv>
            <MotionDiv variants={fadeInTransition("left", "tween", 0.3, 0.6)} className="w-full md:w-1/2 flex flex-col gap-3">
                <span className="text-xl font-semibold text-light-nero dark:text-dark-nero">{experience.position} - <a href={experience.companyURL} target="_blank" className="border border-transparent hover:border-b-dark-nero transition-all glow transition-all">{experience.companyName}</a></span>
                <span className="font-semibold text-light-jumbo dark:text-dark-jumbo">{experience.type}</span>
                <p className="text-light-silver dark:text-dark-silver">{experience.description}</p>
                <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                    {experience.techStack && experience.techStack.map((techStack, index) => <Badge key={index} text={techStack} />)}
                </div>
            </MotionDiv>
        </MotionDiv>
    )
}