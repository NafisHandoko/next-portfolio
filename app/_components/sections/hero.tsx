"use client"
import { ReactTyped } from "react-typed";
import Button from "../base/button";
import { MotionDiv, MotionH1, MotionHeader } from "../base/framer";
import { fadeInTransition, staggeredContainer, textVariantTransition } from "@/app/_utils/motion";
import { useScramble } from "use-scramble";

export default function HeroSection() {
    const { ref, replay } = useScramble({
        text: 'Nafis Handoko',
        speed: 0.7,
        tick: 1,
        step: 1,
        scramble: 10,
        seed: 0,
        overdrive: false,
        range: [65, 90]
    });

    return (
        <MotionHeader
            variants={staggeredContainer(0.1, 0.1)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="show"
            initial="hidden"
            id="header"
            className="bg-mineshaft text-nero"
        >
            <div className="min-h-screen container mx-auto w-full flex flex-col items-center justify-center gap-y-10 text-center px-10 md:px-0">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-silver">Hi! i am</span>
                    <h1 className="font-bold text-4xl uppercase tracking-widest" ref={ref} onMouseOver={replay}>Nafis Handoko</h1>
                    <p className="text-silver">
                        A self-taught&nbsp;
                        <ReactTyped
                            strings={['Software Engineer', 'Web Developer', 'Mobile Developer', 'UI/UX Designer']}
                            typeSpeed={60}
                            backSpeed={40}
                            // attr="placeholder"
                            loop
                        />
                    </p>
                </div>
                <MotionDiv
                    variants={fadeInTransition("up", "tween", 0.3, 0.7)}
                >
                    <Button type="a" text="Download my resume" href="#" />
                </MotionDiv>
            </div>
        </MotionHeader>
    )
}