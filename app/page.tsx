"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsListNested, BsPhone } from "react-icons/bs";
import { FaDribbble, FaFigma, FaGithub, FaInstagram, FaLaptopCode, FaLaravel, FaLinkedin, FaRegEnvelope, FaWordpress } from "react-icons/fa6";
import { GoArrowUp, GoLinkExternal } from "react-icons/go";
import { MdOutlinePalette } from "react-icons/md";
import { RiFlutterFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { useWindowOnEvent } from "./_hooks/useWindowOnEvent";
import { IoCloseOutline } from "react-icons/io5";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useWindowOnEvent("scroll", (): void => {
        window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    });

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 3000)
    }, [])

    return (
        <>
            <div className={`bg-codgray w-full h-screen fixed z-20 left-0 transition-all ${isLoaded ? 'bottom-[100%]' : 'bottom-0'}`}>
                <div className="container mx-auto flex items-center justify-center h-full">
                    <h1 className="font-bold text-3xl text-white tracking-[20px] animate-bounce">HELLO!</h1>
                </div>
            </div >
            <a href="#header" className="fixed bottom-[5%] right-[5%] text-nero w-10 h-10 hidden md:flex items-center justify-center rounded-full border border-white cursor-pointer hover:bg-nero hover:text-codgray transition-all">
                <GoArrowUp />
            </a>
            <div className="fixed top-[30%] left-[6%] hidden md:flex flex-col items-center gap-1">
                <div className="h-[35vh] border-r border-white"></div>
                <div className="rounded-full p-1 bg-white"></div>
                <div className="h-[2vh] border-r border-white"></div>
                <div className="rounded-full p-1 bg-white"></div>
                <div className="h-[5vh] border-r border-white"></div>
            </div>
            <div
                className="hidden md:flex flex-col items-center justify-between py-10 fixed top-[30%] right-[6%] text-white h-[50vh]">
                <a className="glow transition-all" target="_blank" href="https://github.com/nafishandoko"><FaGithub size={"17px"} /></a>
                <a className="glow transition-all" target="_blank" href="https://www.linkedin.com/in/nafishandoko"><FaLinkedin size={"17px"} /></a>
                <a className="glow transition-all" target="_blank" href="https://instagram.com/nafishandoko"><FaInstagram size={"17px"} /></a>
                <a className="glow transition-all" target="_blank" href="mailto:naffisioner@gmail.com"><FaRegEnvelope size={"17px"} /></a>
                <a className="glow transition-all" target="_blank" href="https://dribbble.com/nafishandoko"><FaDribbble size={"17px"} /></a>
            </div>
            <nav
                className={`${showMobileNav ? 'left-[50%] md:left-[100%]' : 'left-[100%]'} bg-white text-black-primary text-center fixed z-20 top-0 left-[100%] transition-all w-1/2 h-screen flex items-center justify-center`}>
                <button onClick={() => setShowMobileNav(false)} className='text-3xl block md:hidden py-5 absolute top-4 right-6'><IoCloseOutline size={'40px'} /></button >
                <ul className='container mx-auto flex flex-col items-center justify-between gap-7'>
                    <li className='text-xl font-medium'><a href="#">Home</a></li>
                    <li className='text-xl font-medium'><a href="#about">About</a></li>
                    <li className='text-xl font-medium'><a href="#experiences">Experiences</a></li>
                    <li className='text-xl font-medium'><a href="#services">Services</a></li>
                    <li className='text-xl font-medium'><a href="#projects">Projects</a></li>
                    <li className='text-xl font-medium'><a href="#articles">Articles</a></li>
                    <li className='text-xl font-medium'><a href="#contact">Contact</a></li>
                    {/* <li className='text-xl font-medium'>
                        <Link href="/articles">Articles</Link>
                    </li> */}
                </ul>
            </nav >
            <nav
                className={`fixed z-10 left-0 right-0 w-full px-7 md:px-28 transition-all ${isScrolled ? 'glass py-6' : 'bg-mineshaft py-10'}`}>
                <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-center">
                    <button onClick={() => setShowMobileNav(true)} className='text-3xl block md:hidden self-end text-nero'><BsListNested /></button>
                    <ul className='hidden md:flex flex-row gap-x-7 items-center text-nero font-semibold'>
                        <li className="border border-transparent hover:border-b-white transition-all"><a className="glow transition-all"
                            href="#">Home</a></li>
                        <li className="border border-transparent hover:border-b-white transition-all"><a className="glow transition-all"
                            href="#about">About</a>
                        </li>
                        <li className="border border-transparent hover:border-b-white transition-all"><a className="glow transition-all"
                            href="#experiences">Experiences</a>
                        </li>
                        <li className="border border-transparent hover:border-b-white transition-all"><a className="glow transition-all"
                            href="#services">Services</a>
                        </li>
                        <li className="border border-transparent hover:border-b-white transition-all"><a className="glow transition-all"
                            href="#projects">Projects</a>
                        </li>
                        <li className="border border-transparent hover:border-b-white transition-all"><a className="glow transition-all"
                            href="#articles">Articles</a>
                        </li>
                        <li className="border border-transparent hover:border-b-white transition-all"><a className="glow transition-all"
                            href="#contact">Contact</a>
                        </li>
                        {/* <li className="border border-transparent hover:border-b-white transition-all">
                            <Link className="glow transition-all" href="/articles">Articles</Link>
                        </li> */}
                    </ul>
                </div>
            </nav >
            <header id="header" className="bg-mineshaft text-nero">
                <div className="min-h-screen container mx-auto w-full flex flex-col items-center justify-center gap-y-7 text-center px-10 md:px-0">
                    <h1 className="font-bold text-4xl">
                        Hi i am&nbsp;
                        <ReactTyped
                            strings={['Nafis Handoko', 'a Web Developer', 'a Mobile Developer', 'a UI/UX Designer']}
                            typeSpeed={60}
                            backSpeed={40}
                            // attr="placeholder"
                            loop
                        />
                    </h1>
                    <a
                        href="#"
                        // target="_blank"
                        className="text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-md px-8 py-4 self-center"
                    >
                        Download my resume
                    </a>
                </div>
            </header>
            <section id="about" className="container mx-auto flex flex-col gap-7 md:gap-0 md:flex-row px-10 md:px-40 py-24">
                <div className="w-full md:w-1/2 flex flex-col gap-10">
                    <h2 className="uppercase text-nero font-bold text-3xl">About Me</h2>
                    <p className="text-silver">
                        I&apos;m a Computer Science student specializing in Information
                        Technology at the University of Jember.
                        <br />
                        <br />
                        I&apos;m passionate about technology, particularly software development and UI design. I have experience with JavaScript, Laravel, Flask, and Flutter. I completed a five-month internship as a Web Programmer at PT Bisa Artifisial Indonesia, where I used ReactJS and Tailwind CSS to create websites.
                        <br />
                        <br />
                        I also interned for five months as a Software Engineer at PT GITS Indonesia, where I worked on Unit Testing for MyPertamina project using Jest and Vue Test Utils. I also handled frontend development for the POC Prodia-LIS project using Syncfusion React Spreadsheet library and collaborated on the frontend of the Carteapp project based on Figma UI Design.
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
            <section id="experiences" className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
                <h2 className="uppercase text-nero font-bold text-3xl">Work Experiences</h2>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-10">
                        <div className="w-full md:w-1/2">
                            <span className="font-semibold text-jumbo">February 2024</span>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-3">
                            <span className="text-xl font-semibold text-nero">Wordpress Developer - <a href="http://unej.ac.id" target="_blank" className="border border-transparent hover:border-b-white transition-all glow transition-all">University of Jember</a></span>
                            <span className="font-semibold text-jumbo">Freelance</span>
                            <p className="text-silver">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Wordpress</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Elementor</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-10">
                        <div className="w-full md:w-1/2">
                            <span className="font-semibold text-jumbo">Sep - Dec 2023</span>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-3">
                            <span className="text-xl font-semibold text-nero">Programmer - <a href="http://eduwork.id" target="_blank" className="border border-transparent hover:border-b-white transition-all glow transition-all">Eduwork.id</a></span>
                            <span className="font-semibold text-jumbo">Internship</span>
                            <p className="text-silver">
                                Spearheaded the development of the Eduwork student dashboard with the CTO using React, Typescript, Redux, and Tailwind CSS. Played a key role in delivering the Eduwork Sosmed website with a team, using React JS, React Native, Tailwind CSS, Alpine.js, and Laravel. Authored project documentation for knowledge transfer, participated in daily scrum meetings with the Project Manager and CEO, and mentored new interns, fostering a collaborative environment.
                            </p>
                            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">ReactJS</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Typescript</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Redux</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Tailwind CSS</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">React Native</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Alpine.js</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Laravel</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-10">
                        <div className="w-full md:w-1/2">
                            <span className="font-semibold text-jumbo">Feb - Jun 2023</span>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-3">
                            <span className="text-xl font-semibold text-nero">Software Engineer - <a href="http://gits.id" target="_blank" className="border border-transparent hover:border-b-white transition-all glow transition-all">Gits.id</a></span>
                            <span className="font-semibold text-jumbo">Internship</span>
                            <p className="text-silver">
                                Wrote unit tests using Jest and Vue Test Utils for MyPertamina project and assisted with the frontend of the POC Prodia-LIS project using the Syncfusion React Spreadsheet library. On the Carteapp project, ensured the frontend adhered to the UI design in Figma and participated in validation. Became a guest speaker for the webinar &quot;Unit Test with Jest & Vue Test Utils&quot; sharing insights with 15-30 participants. Recognized as &quot;Best Mentees&quot; upon graduation for my dedication to professional growth.
                            </p>
                            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">ReactJS</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Nuxt 3</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Tailwind CSS</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Typescript</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Jest</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-10">
                        <div className="w-full md:w-1/2">
                            <span className="font-semibold text-jumbo">Aug - Dec 2022</span>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-3">
                            <span className="text-xl font-semibold text-nero">Web Programmer - <a href="http://bisa.ai" target="_blank" className="border border-transparent hover:border-b-white transition-all glow transition-all">Bisa.ai</a></span>
                            <span className="font-semibold text-jumbo">Internship</span>
                            <p className="text-silver">
                                Contributed to the Hade Matpro Project, collaborating with Backend Programmers and UI/UX Designers to develop components using ReactJS and Tailwind CSS. Spoke at webinars &quot;Strategi SEO pada ReactJS&quot; and &quot;From Design to Code with React & Tailwind&quot; for 30-40 participants. Aided API development using Flask and helped design user-friendly interfaces. Pursued courses in UI/UX Design and AI to enhance my skills.
                            </p>
                            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">ReactJS</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Tailwind CSS</span>
                                <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">Flask</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
                <h2 className="uppercase text-nero font-bold text-3xl">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="flex flex-col rounded-md border border-mineshaft hover:border-nero transition-all bg-mineshaft">
                        <div className="flex flex-col p-7 gap-3">
                            <FaLaptopCode className="text-nero text-3xl" />
                            <h3 className="font-bold text-xl text-nero">Web Development</h3>
                            <p className="text-nero">I can help you build a good looking website with stunning animation</p>
                        </div>
                        <div className="flex flex-row items-center p-7 gap-3 text-nero bg-codgray rounded-b-md mt-auto">
                            <SiNextdotjs size={"25px"} />
                            <RiTailwindCssFill size={"25px"} />
                            <FaLaravel size={"25px"} />
                            <FaWordpress size={"25px"} />
                        </div>
                    </div>
                    <div className="flex flex-col rounded-md border border-mineshaft hover:border-nero transition-all bg-mineshaft">
                        <div className="flex flex-col p-7 gap-3">
                            <BsPhone className="text-nero text-3xl" />
                            <h3 className="font-bold text-xl text-nero">Mobile Development</h3>
                            <p className="text-nero">I am able to create mobile app with Flutter that can help you solve your problem</p>
                        </div>
                        <div className="flex flex-row items-center p-7 gap-3 text-nero bg-codgray rounded-b-md mt-auto">
                            <RiFlutterFill size={"25px"} />
                        </div>
                    </div>
                    <div className="flex flex-col rounded-md border border-mineshaft hover:border-nero transition-all bg-mineshaft">
                        <div className="flex flex-col p-7 gap-3">
                            <MdOutlinePalette className="text-nero text-3xl" />
                            <h3 className="font-bold text-xl text-nero">UI/UX Design</h3>
                            <p className="text-nero">I can help you build a complete prototye of your products</p>
                        </div>
                        <div className="flex flex-row items-center p-7 gap-3 text-nero bg-codgray rounded-b-md mt-auto">
                            <FaFigma size={"25px"} />
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
                <h2 className="uppercase text-nero font-bold text-3xl">Projects</h2>
                <div className="flex flex-col">
                    <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 border-y border-transparent hover:border-mineshaft transition-all py-7">
                        <div className="w-full md:w-1/2 flex flex-col gap-3">
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
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="bg-[url('/assets/images/portfolio/gotravel.png')] bg-center bg-no-repeat bg-cover w-full md:w-5/6 h-56 md:h-64 rounded-md saturate-0 hover:saturate-100 transition-all"></div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 border-y border-transparent hover:border-mineshaft transition-all py-7">
                        <div className="w-full md:w-1/2 flex flex-col gap-3">
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
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="bg-[url('/assets/images/portfolio/gotravel.png')] bg-center bg-no-repeat bg-cover w-full md:w-5/6 h-56 md:h-64 rounded-md saturate-0 hover:saturate-100 transition-all"></div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 border-y border-transparent hover:border-mineshaft transition-all py-7">
                        <div className="w-full md:w-1/2 flex flex-col gap-3">
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
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="bg-[url('/assets/images/portfolio/gotravel.png')] bg-center bg-no-repeat bg-cover w-full md:w-5/6 h-56 md:h-64 rounded-md saturate-0 hover:saturate-100 transition-all"></div>
                        </div>
                    </div>
                </div>
                <Link href="/projects" className="text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-md px-8 py-4 self-center">Show more</Link>
            </section>
            <section id="articles" className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
                <h2 className="uppercase text-nero font-bold text-3xl">Articles</h2>
                <div className="flex flex-col">
                    <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-md py-5 hover:p-5">
                        <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                        <span className="text-silver text-sm">May 12, 2024</span>
                    </Link>
                    <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-md py-5 hover:p-5">
                        <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                        <span className="text-silver text-sm">May 12, 2024</span>
                    </Link>
                    <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-md py-5 hover:p-5">
                        <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                        <span className="text-silver text-sm">May 12, 2024</span>
                    </Link>
                    <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-md py-5 hover:p-5">
                        <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                        <span className="text-silver text-sm">May 12, 2024</span>
                    </Link>
                </div>
                <Link href="/articles" className="text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-md px-8 py-4 self-center">Show more</Link>
            </section>
            <section id="contact" className="container mx-auto flex flex-col items-center text-center px-10 md:px-40 py-36 gap-10">
                <h2 className="text-4xl font-bold text-nero">Keep In Touch</h2>
                <p className="text-silver w-full md:w-1/2">
                    Whether you have an idea for a project or just want to chat, feel free to chat me!
                </p>
                <a href="https://wa.me/6281332079137" target="_blank" className="text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-md px-8 py-4 self-center">Let&apos;s Talk!</a>
            </section>
            <footer className="container mx-auto flex flex-col gap-5 items-center text-center py-7">
                <div className="flex flex-row md:hidden gap-5 text-nero">
                    <a className="glow transition-all" target="_blank" href="https://github.com/nafishandoko"><FaGithub size={"25px"} /></a>
                    <a className="glow transition-all" target="_blank" href="https://www.linkedin.com/in/nafishandoko"><FaLinkedin size={"25px"} /></a>
                    <a className="glow transition-all" target="_blank" href="https://instagram.com/nafishandoko"><FaInstagram size={"25px"} /></a>
                    <a className="glow transition-all" target="_blank" href="mailto:naffisioner@gmail.com"><FaRegEnvelope size={"25px"} /></a>
                    <a className="glow transition-all" target="_blank" href="https://dribbble.com/nafishandoko"><FaDribbble size={"25px"} /></a>
                </div>
                <p className="text-nero">Made with ❤️ by Nafis Handoko</p>
            </footer>
        </>
    );
}
