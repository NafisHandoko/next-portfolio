"use client";
import { experiencesData } from "@/app/_data/experiences";
import ExperiencesCard from "../widgets/experiences/card";
import { MotionDiv, MotionH2, MotionSection } from "../wrapper/framer";
import { staggeredContainer, textVariantTransition } from "@/app/_utils/transitions";

export default function ExperiencesSection() {
  return (
    <MotionSection
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true, amount: 0.25 }}
      whileInView="show"
      initial="hidden"
      id="experiences"
      className="py-24"
    >
      <div className="container-tight">
        <MotionDiv variants={textVariantTransition(0)} className="text-center mb-16">
          <span className="badge mb-4 inline-block">Experiences</span>
          <MotionH2 className="text-3xl sm:text-4xl font-bold text-dark-text mt-4">
            Work Experiences
          </MotionH2>
        </MotionDiv>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-px bg-dark-border/50 lg:-translate-x-px" />

          <div className="flex flex-col">
            {experiencesData.map((experience, index) => (
              <ExperiencesCard experience={experience} key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
