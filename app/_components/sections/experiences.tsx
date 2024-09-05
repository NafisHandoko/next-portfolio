import { experiencesData } from "@/app/_data/experiences"
import ExperiencesCard from "../widgets/experiences/card"
import { MotionH2, MotionSection } from "../wrapper/framer"
import { staggeredContainer, textVariantTransition } from "@/app/_utils/transitions"

export default function ExperiencesSection() {
    return (
        <MotionSection
            variants={staggeredContainer(0.1, 0.1)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="show"
            initial="hidden"
            id="experiences"
            className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10"
        >
            <MotionH2
                variants={textVariantTransition(0)}
                className="uppercase text-light-nero dark:text-dark-nero font-bold text-3xl"
                whileInView="show"
                initial="hidden"
            >
                Work Experiences
            </MotionH2>
            <div className="flex flex-col gap-16">
                {experiencesData && experiencesData.map((experience, index) => <ExperiencesCard experience={experience} key={index} />)}
            </div>
        </MotionSection>
    )
}