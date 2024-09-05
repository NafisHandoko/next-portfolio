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
                <MotionH2 variants={textVariantTransition(0.3)} className="uppercase text-light-nero dark:text-dark-nero font-bold text-3xl">About Me</MotionH2>
                <MotionP variants={textVariantTransition(0.4)} className="text-light-silver dark:text-dark-silver">
                    Hello there!
                    <br />
                    I&apos;m Nafis Arinda Rizky Putra Handoko
                    <br />
                    23 y.o., Indonesia 🇮🇩
                    <br />
                    <br />
                    I am a Junior Software Engineer with expertise in <TextLink url="https://react.dev/">React</TextLink>, <TextLink url="https://nextjs.org/">Next.js</TextLink>, <TextLink url="https://www.typescriptlang.org/">TypeScript</TextLink>, and <TextLink url="https://tailwindcss.com/">Tailwind CSS</TextLink>. Recently, I have also been actively using <TextLink url="https://supabase.com/">Supabase</TextLink> which allows me to build scalable web-based products in a serverless environment.
                    <br />
                    <br />
                    I also have several internship experience at some Indonesian companies (software house and startups), including <TextLink url="https://gits.id/">Gits.id</TextLink>, <TextLink url="https://eduwork.id/">Eduwork.id</TextLink>, and <TextLink url="https://bisa.ai/">Bisa.ai</TextLink>.
                    <br />
                    <br />
                    Honored as one of Gits.id&apos;s &quot;Best Mentees&quot; for dedication to professional growth. I&apos;m really passionate about technology and dedicated to build clean-code web-based products with readability, maintainability, and scalability principles.
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