import { experiencesData } from "@/app/_data/experiences"
import ExperiencesCard from "../widgets/experiences/card"

export default function ExperiencesSection() {
    return (
        <section id="experiences" className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
            <h2 className="uppercase text-nero font-bold text-3xl">Work Experiences</h2>
            <div className="flex flex-col gap-16">
                {experiencesData && experiencesData.map((experience: any, index: any) => <ExperiencesCard experience={experience} index={index} />)}
            </div>
        </section>
    )
}