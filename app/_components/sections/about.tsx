import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="container mx-auto flex flex-col gap-7 md:gap-0 md:flex-row px-10 md:px-40 py-24">
            <div className="w-full md:w-1/2 flex flex-col gap-10">
                <h2 className="uppercase text-nero font-bold text-3xl">About Me</h2>
                <p className="text-silver">
                    {/* I&apos;m a Computer Science student specializing in Information
                    Technology at the University of Jember.
                    <br />
                    <br />
                    I&apos;m passionate about technology, particularly software development and UI design. I have experience with JavaScript, Laravel, Flask, and Flutter. I completed a five-month internship as a Web Programmer at PT Bisa Artifisial Indonesia, where I used ReactJS and Tailwind CSS to create websites.
                    <br />
                    <br />
                    I also interned for five months as a Software Engineer at PT GITS Indonesia, where I worked on Unit Testing for MyPertamina project using Jest and Vue Test Utils. I also handled frontend development for the POC Prodia-LIS project using Syncfusion React Spreadsheet library and collaborated on the frontend of the Carteapp project based on Figma UI Design. */}
                    Results-driven Software Engineer with expertise in React, Typescript, and Tailwind CSS. Have internship experience in several companies in Indonesia like Eduwork, Gits.id, and Bisa AI. Proven ability in Scrum methodology, API development, and UI/UX design. Recognized as one of the "Best Mentees" in Gits.id for dedication to professional growth. Excels in collaborative environments and passionate about leveraging technology for impactful solutions.
                </p>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
                <Image
                    src="/assets/images/about-me.png"
                    alt="about me picture"
                    width={325.9}
                    height={469}
                />
            </div>
        </section>
    )
}