"use client";
import { fadeInTransition } from "@/app/_utils/transitions";
import { MotionDiv } from "../../wrapper/framer";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { ExperienceType } from "@/app/_types/experience";

export default function ExperiencesCard({
  experience,
  index,
}: {
  experience: ExperienceType;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center mb-12 last:mb-0">
      {/* Timeline dot */}
      <div className="absolute left-5 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-purple border-2 border-dark-base z-10" />

      <div
        className={`ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] ${
          isLeft ? "lg:mr-auto lg:pr-8 lg:text-right" : "lg:ml-auto lg:pl-8"
        }`}
      >
        <MotionDiv
          variants={fadeInTransition(isLeft ? "right" : "left", "tween", 0, 0.6)}
          viewport={{ once: true }}
          whileInView="show"
          initial="hidden"
          className="card-hover group rounded-2xl p-6 bg-dark-elevated border border-dark-border/30"
        >
          <div
            className={`flex items-center gap-2 text-accent-purple text-sm font-medium mb-2 ${
              isLeft ? "lg:flex-row-reverse" : ""
            }`}
          >
            <HiOutlineBriefcase size="14px" />
            <span>{experience.periode}</span>
          </div>
          <h3 className="text-lg font-bold text-dark-text mb-1">{experience.position}</h3>
          <div
            className={`flex items-center gap-1 text-dark-muted text-sm mb-3 ${
              isLeft ? "lg:flex-row-reverse" : ""
            }`}
          >
            <FaMapMarkerAlt size="12px" className="shrink-0" />
            <span>{experience.companyName}</span>
          </div>
          <p className="text-dark-text-secondary text-sm leading-relaxed">
            {experience.description}
          </p>
          {experience.techStack && experience.techStack.length > 0 && (
            <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? "lg:justify-end" : ""}`}>
              {experience.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-dark-base text-dark-muted border border-dark-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </MotionDiv>
      </div>
    </div>
  );
}
