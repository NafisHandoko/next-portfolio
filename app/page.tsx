"use client"

import Image from "next/image";
import Link from "next/link";
import { BsPhone } from "react-icons/bs";
import { FaGithub, FaLaptopCode, FaLaravel, FaWordpress } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import { MdOutlinePalette } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { ReactTyped } from "react-typed";

export default function Home() {
    return (
        <>
            <header className="bg-mineshaft text-nero">
                <div className="min-h-screen container mx-auto w-full flex flex-col items-center justify-center gap-y-2 text-center px-10 md:px-0">
                    <h1 className="font-bold text-4xl">
                        Hi i am&nbsp;
                        <ReactTyped
                            strings={['Nafis Handoko', 'a Web Developer', 'a Mobile Developer', 'a UI Designer']}
                            typeSpeed={60}
                            backSpeed={40}
                            // attr="placeholder"
                            loop
                        />
                    </h1>
                </div>
            </header>
            <section className="container mx-auto flex flex-row px-10 md:px-40 py-24">
                <div className="w-1/2 flex flex-col gap-10">
                    <h2 className="uppercase text-nero font-bold text-3xl">About Me</h2>
                    <p className="text-silver">
                        I'm a Computer Science student specializing in Information
                        Technology at the University of Jember.
                        <br />
                        <br />
                        I'm passionate about technology, particularly software development and UI design. I have experience with JavaScript, Laravel, Flask, and Flutter. I completed a five-month internship as a Web Programmer at PT Bisa Artifisial Indonesia, where I used ReactJS and Tailwind CSS to create websites.
                        <br />
                        <br />
                        I also interned for five months as a Software Engineer at PT GITS Indonesia, where I worked on Unit Testing for MyPertamina project using Jest and Vue Test Utils. I also handled frontend development for the POC Prodia-LIS project using Syncfusion React Spreadsheet library and collaborated on the frontend of the Carteapp project based on Figma UI Design.
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-end">
                    <Image
                        src="/assets/images/about-me.png"
                        alt="about me picture"
                        width={325.9}
                        height={469}
                    />
                </div>
            </section>
            <section className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
                <h2 className="uppercase text-nero font-bold text-3xl">Work Experiences</h2>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-row gap-10">
                        <div className="w-1/2">
                            <span className="font-semibold text-jumbo">February 2024</span>
                        </div>
                        <div className="w-1/2 flex flex-col gap-3">
                            <span className="text-xl font-semibold text-nero">Wordpress Developer - University of Jember</span>
                            <span className="font-semibold text-jumbo">Freelance</span>
                            <p className="text-silver">
                                Collaborated with the Chief Technology Officer (CTO) to spearhead the development of the second iteration of the Eduwork student dashboard, employing technologies such as React, Typescript, Redux, and Tailwind CSS.
                            </p>
                            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10">
                        <div className="w-1/2">
                            <span className="font-semibold text-jumbo">February 2024</span>
                        </div>
                        <div className="w-1/2 flex flex-col gap-3">
                            <span className="text-xl font-semibold text-nero">Wordpress Developer - University of Jember</span>
                            <span className="font-semibold text-jumbo">Freelance</span>
                            <p className="text-silver">
                                Collaborated with the Chief Technology Officer (CTO) to spearhead the development of the second iteration of the Eduwork student dashboard, employing technologies such as React, Typescript, Redux, and Tailwind CSS.
                            </p>
                            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10">
                        <div className="w-1/2">
                            <span className="font-semibold text-jumbo">February 2024</span>
                        </div>
                        <div className="w-1/2 flex flex-col gap-3">
                            <span className="text-xl font-semibold text-nero">Wordpress Developer - University of Jember</span>
                            <span className="font-semibold text-jumbo">Freelance</span>
                            <p className="text-silver">
                                Collaborated with the Chief Technology Officer (CTO) to spearhead the development of the second iteration of the Eduwork student dashboard, employing technologies such as React, Typescript, Redux, and Tailwind CSS.
                            </p>
                            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10">
                        <div className="w-1/2">
                            <span className="font-semibold text-jumbo">February 2024</span>
                        </div>
                        <div className="w-1/2 flex flex-col gap-3">
                            <span className="text-xl font-semibold text-nero">Wordpress Developer - University of Jember</span>
                            <span className="font-semibold text-jumbo">Freelance</span>
                            <p className="text-silver">
                                Collaborated with the Chief Technology Officer (CTO) to spearhead the development of the second iteration of the Eduwork student dashboard, employing technologies such as React, Typescript, Redux, and Tailwind CSS.
                            </p>
                            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
                <h2 className="uppercase text-nero font-bold text-3xl">Services</h2>
                <div className="flex flex-row space-between gap-5">
                    <div className="flex flex-col rounded-xl border border-mineshaft bg-mineshaft">
                        <div className="flex flex-col p-7 gap-3">
                            <FaLaptopCode className="text-nero text-3xl" />
                            <h3 className="font-bold text-xl text-nero">Web Development</h3>
                            <p className="text-nero">I can help you build a good looking website with stunning animation</p>
                        </div>
                        <div className="flex flex-row items-center p-7 gap-3 text-nero bg-codgray rounded-b-xl">
                            <SiNextdotjs size={"25px"} />
                            <RiTailwindCssFill size={"25px"} />
                            <FaLaravel size={"25px"} />
                            <FaWordpress size={"25px"} />
                        </div>
                    </div>
                    <div className="flex flex-col rounded-xl border border-mineshaft bg-mineshaft">
                        <div className="flex flex-col p-7 gap-3">
                            <BsPhone className="text-nero text-3xl" />
                            <h3 className="font-bold text-xl text-nero">Web Development</h3>
                            <p className="text-nero">I can help you build a good looking website with stunning animation</p>
                        </div>
                        <div className="flex flex-row items-center p-7 gap-3 text-nero bg-codgray rounded-b-xl">
                            <SiNextdotjs size={"25px"} />
                            <RiTailwindCssFill size={"25px"} />
                            <FaLaravel size={"25px"} />
                            <FaWordpress size={"25px"} />
                        </div>
                    </div>
                    <div className="flex flex-col rounded-xl border border-mineshaft bg-mineshaft">
                        <div className="flex flex-col p-7 gap-3">
                            <MdOutlinePalette className="text-nero text-3xl" />
                            <h3 className="font-bold text-xl text-nero">Web Development</h3>
                            <p className="text-nero">I can help you build a good looking website with stunning animation</p>
                        </div>
                        <div className="flex flex-row items-center p-7 gap-3 text-nero bg-codgray rounded-b-xl">
                            <SiNextdotjs size={"25px"} />
                            <RiTailwindCssFill size={"25px"} />
                            <FaLaravel size={"25px"} />
                            <FaWordpress size={"25px"} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
                <h2 className="uppercase text-nero font-bold text-3xl">Projects</h2>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-10 border-y border-transparent hover:border-mineshaft transition-all py-7">
                        <div className="w-1/2 flex flex-col gap-3">
                            <span className="text-xl font-semibold text-nero">Gotravel</span>
                            <p className="text-silver">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                            </div>
                            <div className="flex flex-row items-center gap-3 text-nero mt-auto">
                                <GoLinkExternal size={"20px"} />
                                <FaGithub size={"20px"} />
                            </div>
                        </div>
                        <div className="w-1/2 w-full flex justify-end">
                            <div className="bg-[url('/assets/images/portfolio/gotravel.png')] bg-center bg-no-repeat bg-cover w-5/6 h-64 rounded-xl saturate-0 hover:saturate-100 transition-all"></div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 border-y border-transparent hover:border-mineshaft transition-all py-7">
                        <div className="w-1/2 flex flex-col gap-3">
                            <span className="text-xl font-semibold text-nero">Gotravel</span>
                            <p className="text-silver">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                            </div>
                            <div className="flex flex-row items-center gap-3 text-nero mt-auto">
                                <GoLinkExternal size={"20px"} />
                                <FaGithub size={"20px"} />
                            </div>
                        </div>
                        <div className="w-1/2 w-full flex justify-end">
                            <div className="bg-[url('/assets/images/portfolio/gotravel.png')] bg-center bg-no-repeat bg-cover w-5/6 h-64 rounded-xl saturate-0 hover:saturate-100 transition-all"></div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 border-y border-transparent hover:border-mineshaft transition-all py-7">
                        <div className="w-1/2 flex flex-col gap-3">
                            <span className="text-xl font-semibold text-nero">Gotravel</span>
                            <p className="text-silver">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Next.js</span>
                            </div>
                            <div className="flex flex-row items-center gap-3 text-nero mt-auto">
                                <GoLinkExternal size={"20px"} />
                                <FaGithub size={"20px"} />
                            </div>
                        </div>
                        <div className="w-1/2 w-full flex justify-end">
                            <div className="bg-[url('/assets/images/portfolio/gotravel.png')] bg-center bg-no-repeat bg-cover w-5/6 h-64 rounded-xl saturate-0 hover:saturate-100 transition-all"></div>
                        </div>
                    </div>
                </div>
                <Link href="/projects" className="text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-xl px-8 py-4 self-center">Show more</Link>
            </section>
            <section className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
                <h2 className="uppercase text-nero font-bold text-3xl">Articles</h2>
                <div className="flex flex-col">
                    <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-xl py-5 hover:p-5">
                        <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                        <span className="text-silver text-sm">May 12, 2024</span>
                    </Link>
                    <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-xl py-5 hover:p-5">
                        <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                        <span className="text-silver text-sm">May 12, 2024</span>
                    </Link>
                    <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-xl py-5 hover:p-5">
                        <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                        <span className="text-silver text-sm">May 12, 2024</span>
                    </Link>
                    <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-xl py-5 hover:p-5">
                        <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                        <span className="text-silver text-sm">May 12, 2024</span>
                    </Link>
                </div>
                <Link href="/articles" className="text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-xl px-8 py-4 self-center">Show more</Link>
            </section>
            <section className="container mx-auto flex flex-col items-center text-center px-10 md:px-40 py-36 gap-10">
                <h2 className="text-4xl font-bold text-nero">Keep In Touch</h2>
                <p className="text-silver w-1/2">
                    Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
                </p>
                <a href="https://wa.me/6281332079137" target="_blank" className="text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-xl px-8 py-4 self-center">Let&apos;s Talk!</a>
            </section>
            <footer className="container mx-auto flex flex-col items-center text-center py-7">
                <p className="text-nero">Made with ❤️ by Nafis Handoko</p>
            </footer>
        </>
    );
}
