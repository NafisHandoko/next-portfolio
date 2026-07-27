"use client";
import { projectsData } from "@/app/_data/projects";
import Button from "../base/button";
import { MotionDiv, MotionH2, MotionSection } from "../wrapper/framer";
import {
  fadeInTransition,
  staggeredContainer,
  textVariantTransition,
} from "@/app/_utils/transitions";
import { FaFigma, FaGithub, FaDribbble } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";

export default function ProjectsSection() {
  return (
    <MotionSection
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true, amount: 0.25 }}
      whileInView="show"
      initial="hidden"
      id="projects"
      className="py-24 bg-dark-surface"
    >
      <div className="container-tight">
        <MotionDiv variants={textVariantTransition(0)} className="text-center mb-16">
          <span className="badge mb-4 inline-block">Projects</span>
          <MotionH2 className="text-3xl sm:text-4xl font-bold text-dark-text mt-4">
            Side Projects
          </MotionH2>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {projectsData.slice(0, 4).map((project, i) => (
            <MotionDiv
              key={i}
              variants={fadeInTransition("up", "tween", i * 0.1, 0.6)}
              className="card-hover group rounded-2xl p-6 bg-dark-elevated border border-dark-border/30 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-dark-text group-hover:text-accent-purple transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-2">
                  {project.demoURL && (
                    <a
                      href={project.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-muted hover:text-accent-purple transition-colors"
                      title="Live demo"
                    >
                      <HiExternalLink size="16px" />
                    </a>
                  )}
                  {project.repoURL && (
                    <a
                      href={project.repoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-muted hover:text-accent-purple transition-colors"
                      title="Source code"
                    >
                      <FaGithub size="15px" />
                    </a>
                  )}
                  {project.figmaURL && (
                    <a
                      href={project.figmaURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-muted hover:text-accent-purple transition-colors"
                      title="Figma design"
                    >
                      <FaFigma size="15px" />
                    </a>
                  )}
                  {project.dribbbleURL && (
                    <a
                      href={project.dribbbleURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-muted hover:text-accent-purple transition-colors"
                      title="Dribbble shot"
                    >
                      <FaDribbble size="15px" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-dark-text-secondary text-sm leading-relaxed flex-1 line-clamp-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack?.slice(0, 6).map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-dark-base text-dark-muted border border-dark-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          variants={fadeInTransition("up", "tween", 0, 0.7)}
          className="text-center"
          whileInView="show"
          initial="hidden"
        >
          <Button type="Link" href="/projects" text="View All Projects" />
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
