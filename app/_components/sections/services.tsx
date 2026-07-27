"use client";
import { BsPhone } from "react-icons/bs";
import { FaFigma, FaLaptopCode } from "react-icons/fa6";
import { MdOutlinePalette } from "react-icons/md";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiFlutter,
  SiNodedotjs,
} from "react-icons/si";
import { MotionDiv, MotionH2, MotionSection } from "../wrapper/framer";
import {
  fadeInTransition,
  staggeredContainer,
  textVariantTransition,
} from "@/app/_utils/transitions";

const services = [
  {
    icon: FaLaptopCode,
    title: "Web Development",
    desc: "Full-stack web apps with modern frameworks, clean architecture, and seamless user experiences.",
    tools: [SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs],
  },
  {
    icon: BsPhone,
    title: "Mobile Development",
    desc: "Cross-platform mobile apps using Flutter, delivering native-quality experiences across iOS and Android.",
    tools: [SiFlutter],
  },
  {
    icon: MdOutlinePalette,
    title: "UI/UX Design",
    desc: "Design-driven development with Figma prototypes, design systems, and pixel-perfect implementation.",
    tools: [FaFigma, SiTailwindcss],
  },
];

export default function ServicesSection() {
  return (
    <MotionSection
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true, amount: 0.25 }}
      whileInView="show"
      initial="hidden"
      id="services"
      className="py-24 bg-dark-surface"
    >
      <div className="container-tight">
        <MotionDiv variants={textVariantTransition(0)} className="text-center mb-16">
          <span className="badge mb-4 inline-block">Services</span>
          <MotionH2 className="text-3xl sm:text-4xl font-bold text-dark-text mt-4">
            What I can do for you
          </MotionH2>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <MotionDiv
              key={svc.title}
              variants={fadeInTransition("up", "tween", i * 0.15, 0.6)}
              className="card-hover group rounded-2xl p-8 bg-dark-elevated border border-dark-border/30 flex flex-col gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors">
                <svc.icon className="text-accent-purple text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-text mb-2">{svc.title}</h3>
                <p className="text-dark-text-secondary text-sm leading-relaxed">{svc.desc}</p>
              </div>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-dark-border/30">
                {svc.tools.map((Icon, j) => (
                  <Icon key={j} className="text-dark-muted hover:text-accent-purple transition-colors text-lg" />
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
