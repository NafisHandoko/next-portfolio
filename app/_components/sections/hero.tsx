"use client";
import { ReactTyped } from "react-typed";
import Button from "../base/button";
import { MotionDiv } from "../wrapper/framer";
import { fadeInTransition, staggeredContainer } from "@/app/_utils/transitions";
import { useScramble } from "use-scramble";
import { HiArrowDown } from "react-icons/hi2";

export default function HeroSection() {
  const { ref, replay } = useScramble({
    text: "Nafis Handoko",
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 8,
    seed: 2,
    overdrive: false,
    range: [65, 90],
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-base"
    >
      {/* Geometric background ornaments */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-purple/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-cyan/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[128px] animate-pulse-slow" />

      {/* Geometric shapes */}
      <div className="absolute top-[15%] right-[10%] w-24 h-24 border border-accent-purple/20 rounded-2xl rotate-12 hidden lg:block" />
      <div className="absolute top-[20%] left-[5%] w-16 h-16 border border-accent-cyan/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-[20%] left-[15%] w-20 h-20 border border-accent-blue/20 rotate-45 hidden lg:block" />
      <div className="absolute top-[10%] left-[40%] w-2 h-2 bg-accent-purple/40 rounded-full hidden lg:block" />
      <div className="absolute bottom-[25%] right-[20%] w-3 h-3 bg-accent-cyan/30 rounded-full hidden lg:block" />

      {/* Content */}
      <MotionDiv
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        className="container-tight relative z-10 flex flex-col items-center justify-center text-center gap-y-8 py-20"
      >
        {/* Badge */}
        <MotionDiv
          variants={fadeInTransition("down", "tween", 0, 0.4)}
          className="badge text-sm"
        >
          ✨ Available for freelance projects
        </MotionDiv>

        {/* Main text */}
        <div className="flex flex-col items-center gap-4">
          <MotionDiv
            variants={fadeInTransition("up", "tween", 0.1, 0.5)}
            className="text-dark-text-secondary text-lg sm:text-xl font-light tracking-wide"
          >
            Hi! I am
          </MotionDiv>
          <MotionDiv variants={fadeInTransition("up", "tween", 0.2, 0.5)}>
            <h1
              ref={ref}
              onMouseOver={replay}
              className="font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight gradient-text cursor-pointer select-none"
            >
              Nafis Handoko
            </h1>
          </MotionDiv>
          <MotionDiv
            variants={fadeInTransition("up", "tween", 0.3, 0.5)}
            className="text-dark-text-secondary text-lg sm:text-xl font-light tracking-wide h-8"
          >
            <ReactTyped
              strings={[
                "Software Engineer",
                "Web Developer",
                "Mobile Developer",
                "UI/UX Designer",
                "Open Source Contributor",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </MotionDiv>
        </div>

        {/* CTA Buttons */}
        <MotionDiv
          variants={fadeInTransition("up", "tween", 0.4, 0.6)}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            type="a"
            text="View My Resume"
            href="https://s.id/nafis-cv-v2"
          />
          <a
            href="#about"
            className="px-8 py-3 rounded-full border border-dark-border text-dark-text-secondary hover:text-dark-text hover:border-accent-purple/50 transition-all duration-300 font-medium"
          >
            Explore More
          </a>
        </MotionDiv>

        {/* Stats */}
        <MotionDiv
          variants={fadeInTransition("up", "tween", 0.5, 0.7)}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-8 pt-8 border-t border-dark-border/30"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">2+</div>
            <div className="text-dark-text-secondary text-sm mt-1">Years Exp.</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">20+</div>
            <div className="text-dark-text-secondary text-sm mt-1">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">5+</div>
            <div className="text-dark-text-secondary text-sm mt-1">Tech Stacks</div>
          </div>
        </MotionDiv>

        {/* Scroll indicator */}
        <MotionDiv
          variants={fadeInTransition("up", "tween", 0.6, 0.8)}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <HiArrowDown className="animate-bounce text-lg" />
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
