import Image from "next/image";
import { MotionDiv, MotionH2, MotionP, MotionSection } from "../wrapper/framer";
import { fadeInTransition, staggeredContainer, textVariantTransition } from "@/app/_utils/transitions";

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
                <MotionH2 variants={textVariantTransition(0.3)} className="uppercase text-nero font-bold text-3xl">About Me</MotionH2>
                <MotionP variants={textVariantTransition(0.4)} className="text-silver">
                    {/* I&apos;m a Computer Science student specializing in Information
                    Technology at the University of Jember.
                    <br />
                    <br />
                    I&apos;m passionate about technology, particularly software development and UI design. I have experience with JavaScript, Laravel, Flask, and Flutter. I completed a five-month internship as a Web Programmer at PT Bisa Artifisial Indonesia, where I used ReactJS and Tailwind CSS to create websites.
                    <br />
                    <br />
                    I also interned for five months as a Software Engineer at PT GITS Indonesia, where I worked on Unit Testing for MyPertamina project using Jest and Vue Test Utils. I also handled frontend development for the POC Prodia-LIS project using Syncfusion React Spreadsheet library and collaborated on the frontend of the Carteapp project based on Figma UI Design. */}
                    Hello there!
                    <br />
                    I&apos;m Nafis Arinda Rizky Putra Handoko
                    <br />
                    23 y.o., Indonesia 🇮🇩
                    <br />
                    <br />
                    I am a results-driven Software Engineer with expertise in React, Typescript, and Tailwind CSS. Have several internship experience at prominent Indonesian companies, including Eduwork, Gits.id, and Bisa AI. Proficient in Scrum methodology, API development, and UI/UX Design.
                    <br />
                    <br />
                    Honored as one of Gits.id&apos;s &quot;Best Mentees&quot; for dedication to professional growth. Thrives in collaborative environments and is passionate about leveraging technology to create impactful solutions.
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