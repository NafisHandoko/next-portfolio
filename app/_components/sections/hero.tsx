"use client"
import { ReactTyped } from "react-typed";
import Button from "../base/button";

export default function HeroSection() {
    return (
        <header id="header" className="bg-mineshaft text-nero">
            <div className="min-h-screen container mx-auto w-full flex flex-col items-center justify-center gap-y-7 text-center px-10 md:px-0">
                <h1 className="font-bold text-4xl">
                    Hi i am&nbsp;
                    <ReactTyped
                        strings={['Nafis Handoko', 'a Software Engineer', 'a Web Developer', 'a Mobile Developer', 'a UI/UX Designer']}
                        typeSpeed={60}
                        backSpeed={40}
                        // attr="placeholder"
                        loop
                    />
                </h1>
                <Button type="a" text="Download my resume" href="#" />
            </div>
        </header>
    )
}