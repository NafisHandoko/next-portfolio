export default function ExperiencesCard({ experience }: any) {
    return (
        <div className="flex flex-col md:flex-row gap-3 md:gap-10">
            <div className="w-full md:w-1/2">
                <span className="font-semibold text-jumbo">{experience.periode}</span>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3">
                <span className="text-xl font-semibold text-nero">{experience.position} - <a href={experience.companyURL} target="_blank" className="border border-transparent hover:border-b-white transition-all glow transition-all">{experience.companyName}</a></span>
                <span className="font-semibold text-jumbo">{experience.type}</span>
                <p className="text-silver">{experience.description}</p>
                <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                    {experience.techStack && experience.techStack.map((techStack: any, index: any) => <span key={index} className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">{techStack}</span>)}
                </div>
            </div>
        </div>
    )
}