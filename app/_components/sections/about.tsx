import Image from "next/image";
import { MotionDiv, MotionH2, MotionP, MotionSection } from "../wrapper/framer";
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
            className="container mx-auto flex flex-col gap-7 md:gap-0 md:flex-row px-10 md:px-40 py-24"
        >
            <MotionDiv
                variants={fadeInTransition("right", "tween", 0.1, 1.1)}
                className="w-full md:w-1/2 flex flex-col gap-10"
            >
                <MotionH2 variants={textVariantTransition(0.3)} className="uppercase text-light-nero dark:text-dark-nero font-bold text-3xl">About Me - Tes</MotionH2>
                <MotionP variants={textVariantTransition(0.4)} className="text-light-silver dark:text-dark-silver">
                    Hello there!
                    <br />
                    I&apos;m Nafis Arinda Rizky Putra Handoko
                    <br />
                    Software Engineer from Indonesia 🇮🇩
                    <br />
                    <br />
                    I am a Software Engineer with experience building and maintaining production systems, particularly in the healthcare and ERP domain. Currently, I work on developing and customizing healthcare solutions using <TextLink url="https://fhir.org/">HL7 FHIR</TextLink>, <TextLink url="https://www.odoo.com/">Python (Odoo)</TextLink>, <TextLink url="https://lit.dev/">Typescript (Lit/Polymer)</TextLink>, and <TextLink url="https://spring.io/">Kotlin (Spring)</TextLink>, including building features, system integrations, and improving application reliability.
                    <br />
                    <br />
                    Previously, I gained experience developing web applications through internships and personal projects using <TextLink url="https://react.dev/">React</TextLink>, <TextLink url="https://nextjs.org/">Next.js</TextLink>, <TextLink url="https://www.typescriptlang.org/">TypeScript</TextLink>, and <TextLink url="https://tailwindcss.com/">Tailwind CSS</TextLink>. I enjoy building clean, maintainable, and scalable products while continuously improving my engineering skills.
                    <br />
                    <br />
                    I am passionate about solving real-world problems through technology, learning new tools, and creating software that provides meaningful impact for users.
                </MotionP>
            </MotionDiv>
            <MotionDiv
                variants={fadeInTransition("left", "tween", 0.1, 1.1)}
                className="w-full md:w-1/2 flex items-center justify-center md:justify-end"
            >
                <Image
                    src="/assets/images/about-me.png"
                    alt="about me picture"
                    width={325.9}
                    height={469}
                />
            </MotionDiv>
        </MotionSection>
    )
}
