"use client"
import { ReactTyped } from "react-typed";

export default function HeroSection() {
    return (
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
    )
}