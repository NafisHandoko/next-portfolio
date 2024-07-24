"use client"
import { ReactTyped } from "react-typed";
import Button from "../base/button";
import { MotionDiv, MotionH1, MotionHeader } from "../base/framer";
import { fadeInTransition, staggeredContainer, textVariantTransition } from "@/app/_utils/motion";

export default function HeroSection() {
    return (
        <MotionHeader
            variants={staggeredContainer(0.1, 0.1)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="show"
            initial="hidden"
            id="header"
            className="bg-mineshaft text-nero"
        >
            <div className="min-h-screen container mx-auto w-full flex flex-col items-center justify-center gap-y-7 text-center px-10 md:px-0">
                <MotionH1 variants={textVariantTransition(0.2)} className="font-bold text-4xl">
                    Hi i am&nbsp;
                    <ReactTyped
                        strings={['Nafis Handoko', 'a Software Engineer', 'a Web Developer', 'a Mobile Developer', 'a UI/UX Designer']}
                        typeSpeed={60}
                        backSpeed={40}
                        // attr="placeholder"
                        loop
                    />
                </MotionH1>
                <MotionDiv
                    variants={fadeInTransition("up", "tween", 0.3, 0.7)}
                >
                    <Button type="a" text="Download my resume" href="#" />
                </MotionDiv>
            </div>
        </MotionHeader>
    )
}