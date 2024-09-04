"use client"

import { useWindowOnEvent } from "@/app/_hooks/useWindowOnEvent";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsListNested } from "react-icons/bs";
import { FaDribbble, FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa6";
import { GoArrowUp } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { MotionA, MotionDiv, MotionLi } from "../wrapper/framer";
import { fadeInTransition } from "@/app/_utils/transitions";
import ThemeSwitcher from "../base/theme-switcher";

export default function HeaderSection() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

    useWindowOnEvent("scroll", (): void => {
        window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    });

    useEffect(() => {
        window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    }, [])

    return (
        <>
            <MotionA
                variants={fadeInTransition("up", "tween", 0.2, 0.4)}
                initial="hidden"
                animate="show"
                href="#header"
                className="fixed bottom-[5%] right-[5%] text-light-nero dark:text-dark-nero w-10 h-10 hidden md:flex items-center justify-center rounded-full border border-light-nero dark:border-dark-nero cursor-pointer hover:bg-light-nero dark:hover:bg-dark-nero hover:text-light-codgray dark:hover:text-dark-codgray transition-all"
            >
                <GoArrowUp />
            </MotionA>
            <MotionDiv
                variants={fadeInTransition("up", "tween", 0.2, 0.4)}
                initial="hidden"
                animate="show"
                className="fixed bottom-[5%] left-[5%] hidden md:flex"
            >
                <ThemeSwitcher />
            </MotionDiv>
            <MotionDiv initial="hidden" animate="show" variants={fadeInTransition("right", "tween", 0.2, 0.5)} className="fixed top-[30%] left-[6%] hidden md:flex flex-col items-center gap-1">
                <div className="h-[35vh] border-r border-light-nero dark:border-dark-nero"></div>
                <div className="rounded-full p-1 bg-light-nero dark:bg-dark-nero"></div>
                <div className="h-[2vh] border-r border-light-nero dark:border-dark-nero"></div>
                <div className="rounded-full p-1 bg-light-nero dark:bg-dark-nero"></div>
                <div className="h-[5vh] border-r border-light-nero dark:border-dark-nero"></div>
            </MotionDiv>
            <div className="hidden md:flex flex-col items-center justify-between py-10 fixed top-[30%] right-[6%] text-light-nero dark:text-dark-nero h-[50vh]">
                <MotionA initial="hidden" animate="show" variants={fadeInTransition("left", "tween", 0.6, 0.2)} className="glow transition-all" target="_blank" href="https://github.com/nafishandoko"><FaGithub size={"17px"} /></MotionA>
                <MotionA initial="hidden" animate="show" variants={fadeInTransition("left", "tween", 0.5, 0.2)} className="glow transition-all" target="_blank" href="https://www.linkedin.com/in/nafishandoko"><FaLinkedin size={"17px"} /></MotionA>
                <MotionA initial="hidden" animate="show" variants={fadeInTransition("left", "tween", 0.4, 0.2)} className="glow transition-all" target="_blank" href="https://instagram.com/nafishandoko"><FaInstagram size={"17px"} /></MotionA>
                <MotionA initial="hidden" animate="show" variants={fadeInTransition("left", "tween", 0.3, 0.2)} className="glow transition-all" target="_blank" href="mailto:naffisioner@gmail.com"><FaRegEnvelope size={"17px"} /></MotionA>
                <MotionA initial="hidden" animate="show" variants={fadeInTransition("left", "tween", 0.2, 0.2)} className="glow transition-all" target="_blank" href="https://dribbble.com/nafishandoko"><FaDribbble size={"17px"} /></MotionA>
            </div>
            <nav
                className={`${showMobileNav ? 'left-[0] md:left-[100%]' : 'left-[100%]'} bg-light-nero dark:bg-dark-nero text-light-mineshaft dark:text-dark-mineshaft text-center fixed z-20 top-0 transition-all w-full h-screen flex flex-col gap-10 items-center justify-center`}>
                <button onClick={() => setShowMobileNav(false)} className='text-3xl block md:hidden py-5 absolute top-4 right-6'><IoCloseOutline size={'40px'} /></button >
                <ul className='container mx-auto flex flex-col items-center justify-between gap-7'>
                    <li className='text-xl font-medium'><Link href="/">Home</Link></li>
                    <li className='text-xl font-medium'><Link href="/#about">About</Link></li>
                    <li className='text-xl font-medium'><Link href="/#experiences">Experiences</Link></li>
                    <li className='text-xl font-medium'><Link href="/#services">Services</Link></li>
                    <li className='text-xl font-medium'><Link href="/#projects">Projects</Link></li>
                    <li className='text-xl font-medium'><Link href="/#articles">Articles</Link></li>
                    <li className='text-xl font-medium'><Link href="/#contact">Contact</Link></li>
                    {/* <li className='text-xl font-medium'>
                        <Link href="/articles">Articles</Link>
                    </li> */}
                </ul>
                <ThemeSwitcher variant="inverse" />
            </nav>
            <nav
                className={`fixed z-10 left-0 right-0 w-full px-7 md:px-28 transition-all ${isScrolled ? 'glass py-6' : 'bg-transparent py-10'}`}>
                <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-center">
                    <button onClick={() => setShowMobileNav(true)} className='text-3xl block md:hidden self-end text-light-nero dark:text-dark-nero'><BsListNested /></button>
                    <ul className='hidden md:flex flex-row gap-x-7 items-center text-light-nero dark:text-dark-nero font-semibold'>
                        <MotionLi initial="hidden" animate="show" variants={fadeInTransition("down", "tween", 0.2, 0.2)} className="border border-transparent hover:border-b-dark-nero transition-all">
                            <Link className="glow transition-all" href="/">Home</Link>
                        </MotionLi>
                        <MotionLi initial="hidden" animate="show" variants={fadeInTransition("down", "tween", 0.3, 0.2)} className="border border-transparent hover:border-b-dark-nero transition-all">
                            <Link className="glow transition-all" href="/#about">About</Link>
                        </MotionLi>
                        <MotionLi initial="hidden" animate="show" variants={fadeInTransition("down", "tween", 0.4, 0.2)} className="border border-transparent hover:border-b-dark-nero transition-all">
                            <Link className="glow transition-all" href="/#experiences">Experiences</Link>
                        </MotionLi>
                        <MotionLi initial="hidden" animate="show" variants={fadeInTransition("down", "tween", 0.5, 0.2)} className="border border-transparent hover:border-b-dark-nero transition-all">
                            <Link className="glow transition-all" href="/#services">Services</Link>
                        </MotionLi>
                        <MotionLi initial="hidden" animate="show" variants={fadeInTransition("down", "tween", 0.6, 0.2)} className="border border-transparent hover:border-b-dark-nero transition-all">
                            <Link className="glow transition-all" href="/#projects">Projects</Link>
                        </MotionLi>
                        <MotionLi initial="hidden" animate="show" variants={fadeInTransition("down", "tween", 0.7, 0.2)} className="border border-transparent hover:border-b-dark-nero transition-all">
                            <Link className="glow transition-all" href="/#articles">Articles</Link>
                        </MotionLi>
                        <MotionLi initial="hidden" animate="show" variants={fadeInTransition("down", "tween", 0.8, 0.2)} className="border border-transparent hover:border-b-dark-nero transition-all">
                            <Link className="glow transition-all" href="/#contact">Contact</Link>
                        </MotionLi>
                        {/* <li className="border border-transparent hover:border-b-dark-nero transition-all">
                            <Link className="glow transition-all" href="/articles">Articles</Link>
                        </li> */}
                    </ul>
                </div>
            </nav >
        </>
    )
}