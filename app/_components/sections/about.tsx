"use client";
import Image from "next/image";
import { MotionDiv, MotionH2, MotionSection } from "../wrapper/framer";
import { fadeInTransition, staggeredContainer, textVariantTransition } from "@/app/_utils/transitions";
import TextLink from "../base/text-link";

export default function AboutSection() {
  return (
    <MotionSection
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true, amount: 0.25 }}
      initial="hidden"
      whileInView="show"
      id="about"
      className="py-24"
    >
      <div className="container-tight">
        <MotionDiv variants={textVariantTransition(0)} className="text-center mb-16">
          <span className="badge mb-4 inline-block">About Me</span>
          <MotionH2 className="text-3xl sm:text-4xl font-bold text-dark-text mt-4">
            Get to know me
          </MotionH2>
        </MotionDiv>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <MotionDiv
            variants={fadeInTransition("right", "tween", 0.1, 0.8)}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 rounded-2xl blur-xl" />
              <Image
                src="/assets/images/about-me.png"
                alt="Nafis Handoko"
                width={326}
                height={469}
                className="relative rounded-2xl border border-dark-border/50"
              />
            </div>
          </MotionDiv>

          <MotionDiv
            variants={fadeInTransition("left", "tween", 0.1, 0.8)}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <div className="text-dark-text-secondary leading-relaxed space-y-4">
              <p>
                Hello there! I&apos;m <span className="text-dark-text font-semibold">Nafis Arinda Rizky Putra Handoko</span>,
                a Software Engineer from Indonesia 🇮🇩
              </p>
              <p>
                I specialize in building and maintaining production systems in the healthcare and ERP
                domain. Currently working with{" "}
                <TextLink url="https://fhir.org/">HL7 FHIR</TextLink>,{" "}
                <TextLink url="https://www.odoo.com/">Python (Odoo)</TextLink>,{" "}
                <TextLink url="https://lit.dev/">TypeScript (Lit/Polymer)</TextLink>, and{" "}
                <TextLink url="https://spring.io/">Kotlin (Spring)</TextLink>.
              </p>
              <p>
                Previously, I built web applications using{" "}
                <TextLink url="https://react.dev/">React</TextLink>,{" "}
                <TextLink url="https://nextjs.org/">Next.js</TextLink>, and{" "}
                <TextLink url="https://tailwindcss.com/">Tailwind CSS</TextLink>. I&apos;m passionate
                about clean architecture, great UX, and solving real problems through technology.
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Python", "Kotlin", "FHIR"].map(
                (tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                )
              )}
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
