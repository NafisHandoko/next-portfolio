"use client"
import { ReactTyped } from "react-typed";
import Button from "../base/button";
import { MotionDiv, MotionHeader } from "../wrapper/framer";
import { fadeInTransition, staggeredContainer } from "@/app/_utils/transitions";
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
            className="bg-light-mineshaft dark:bg-dark-mineshaft text-light-nero dark:text-dark-nero"
        >
            <div className="min-h-screen container mx-auto w-full flex flex-col items-center justify-center gap-y-10 text-center px-10 md:px-0">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-light-silver dark:text-dark-silver">Hi! i am</span>
                    <h1 className="font-bold text-4xl uppercase tracking-widest" ref={ref} onMouseOver={replay}>Nafis Handoko</h1>
                    <p className="text-light-silver dark:text-dark-silver">
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
                    <Button type="a" text="Look at my resume" href="https://drive.google.com/file/d/1U7lAVcEILBvs4aQZe2mB6-VWkpCzaxCv/view?usp=sharing" />
                </MotionDiv>
            </div>
        </MotionHeader>
    )
}