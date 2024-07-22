import { BsPhone } from "react-icons/bs";
import { FaFigma, FaLaptopCode, FaLaravel, FaWordpress } from "react-icons/fa6";
import { MdOutlinePalette } from "react-icons/md";
import { RiFlutterFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export default function ServicesSection() {
    return (
        <section id="services" className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
            <h2 className="uppercase text-nero font-bold text-3xl">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex flex-col rounded-md border border-mineshaft hover:border-nero transition-all bg-mineshaft">
                    <div className="flex flex-col p-7 gap-3">
                        <FaLaptopCode className="text-nero text-3xl" />
                        <h3 className="font-bold text-xl text-nero">Web Development</h3>
                        <p className="text-nero">I can transform your idea into a website with captivating animations and sleek design, creating an unforgettable user experience.</p>
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
                        <p className="text-nero">Let me build a powerful mobile app with Flutter to seamlessly address your specific challenges and streamline your processes, providing an intuitive and effective solution.</p>
                    </div>
                    <div className="flex flex-row items-center p-7 gap-3 text-nero bg-codgray rounded-b-md mt-auto">
                        <RiFlutterFill size={"25px"} />
                    </div>
                </div>
                <div className="flex flex-col rounded-md border border-mineshaft hover:border-nero transition-all bg-mineshaft">
                    <div className="flex flex-col p-7 gap-3">
                        <MdOutlinePalette className="text-nero text-3xl" />
                        <h3 className="font-bold text-xl text-nero">UI/UX Design</h3>
                        <p className="text-nero">I can help you build a fully functional UI prototype of your product, turning your ideas into a tangible, testable reality.</p>
                    </div>
                    <div className="flex flex-row items-center p-7 gap-3 text-nero bg-codgray rounded-b-md mt-auto">
                        <FaFigma size={"25px"} />
                    </div>
                </div>
            </div>
        </section>
    )
}