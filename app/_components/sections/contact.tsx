"use client";
import { staggeredContainer, textVariantTransition, fadeInTransition } from "@/app/_utils/transitions";
import Button from "../base/button";
import { MotionDiv, MotionH2, MotionSection } from "../wrapper/framer";
import { FaGithub, FaLinkedin, FaInstagram, FaRegEnvelope } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <MotionSection
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true, amount: 0.25 }}
      whileInView="show"
      initial="hidden"
      id="contact"
      className="py-24 bg-dark-surface"
    >
      <div className="container-tight text-center">
        <MotionDiv variants={textVariantTransition(0)} className="mb-16">
          <span className="badge mb-4 inline-block">Contact</span>
          <MotionH2 className="text-3xl sm:text-4xl font-bold text-dark-text mt-4">
            Let&apos;s work together
          </MotionH2>
        </MotionDiv>

        <MotionDiv
          variants={fadeInTransition("up", "tween", 0.2, 0.6)}
          className="max-w-xl mx-auto"
        >
          <div className="rounded-2xl p-8 sm:p-12 bg-dark-elevated border border-dark-border/30 flex flex-col items-center gap-8">
            <p className="text-dark-text-secondary text-lg leading-relaxed">
              Have a project in mind or just want to say hi? I&apos;m always open to new
              opportunities and collaborations.
            </p>
            <Button type="a" href="https://wa.me/6281332079137" text="Let's Talk!" />
            <div className="flex items-center gap-6 text-dark-muted">
              <a href="https://github.com/nafishandoko" target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors">
                <FaGithub size="20px" />
              </a>
              <a href="https://www.linkedin.com/in/nafishandoko" target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors">
                <FaLinkedin size="20px" />
              </a>
              <a href="https://instagram.com/nafishandoko" target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors">
                <FaInstagram size="20px" />
              </a>
              <a href="mailto:naffisioner@gmail.com" className="hover:text-accent-purple transition-colors">
                <FaRegEnvelope size="20px" />
              </a>
            </div>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
