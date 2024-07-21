import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";

export default function ProjectsSection() {
    return (
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
    )
}