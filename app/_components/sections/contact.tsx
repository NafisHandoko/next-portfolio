import { staggeredContainer, textVariantTransition } from "@/app/_utils/transitions";
import Button from "../base/button";
import { MotionDiv, MotionH2, MotionP, MotionSection } from "../wrapper/framer";

export default function ContactSection() {
    return (
        <MotionSection
            variants={staggeredContainer(0.1, 0.1)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="show"
            initial="hidden"
            id="contact"
            className="container mx-auto flex flex-col items-center text-center px-10 md:px-40 py-36 gap-10"
        >
            <MotionH2 variants={textVariantTransition(0)} className="text-4xl font-bold text-light-nero dark:text-dark-nero">Keep In Touch</MotionH2>
            <MotionP variants={textVariantTransition(0.2)} className="text-light-silver dark:text-dark-silver w-full md:w-1/2">
                Whether you have an idea for a project or just want to chat, feel free to chat me!
            </MotionP>
            <MotionDiv variants={textVariantTransition(0.4)}>
                <Button type="a" href="https://wa.me/6281332079137" text="Let&apos;s Talk!" />
            </MotionDiv>
        </MotionSection>
    )
}