import { useWindowOnEvent } from "@/app/_hooks/useWindowOnEvent";
import { useState } from "react";
import { BsListNested } from "react-icons/bs";
import { FaDribbble, FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa6";
import { GoArrowUp } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";

export default function HeaderSection() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

    useWindowOnEvent("scroll", (): void => {
        window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    });

    return (
        <>
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
        </>
    )
}