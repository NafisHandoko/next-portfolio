import { BsPhone } from "react-icons/bs";
import { FaFigma, FaLaptopCode, FaLaravel, FaReact, FaWordpress } from "react-icons/fa6";
import { MdOutlinePalette } from "react-icons/md";
import { RiFlutterFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { MotionDiv, MotionH2, MotionSection } from "../wrapper/framer";
import { fadeInTransition, staggeredContainer, textVariantTransition } from "@/app/_utils/transitions";

export default function ServicesSection() {
    return (
        <MotionSection
            variants={staggeredContainer(0.1, 0.1)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="show"
            initial="hidden"
            id="services"
            className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10"
        >
            <MotionH2 variants={textVariantTransition(0.2)} className="uppercase text-light-nero dark:text-dark-nero font-bold text-3xl">Services</MotionH2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <MotionDiv variants={fadeInTransition("up", "tween", 0, 0.7)} className="flex flex-col rounded-md border border-light-mineshaft dark:border-dark-mineshaft hover:border-light-nero dark:hover:border-dark-nero transition-all bg-light-mineshaft dark:bg-dark-mineshaft">
                    <div className="flex flex-col p-7 gap-3">
                        <FaLaptopCode className="text-light-nero dark:text-dark-nero text-3xl" />
                        <h3 className="font-bold text-xl text-light-nero dark:text-dark-nero">Web Development</h3>
                        <p className="text-light-nero dark:text-dark-nero">I can transform your idea into a website with captivating animations and sleek design, creating an unforgettable user experience.</p>
                    </div>
                    <div className="flex flex-row items-center p-7 gap-3 text-light-nero dark:text-dark-nero bg-light-codgray dark:bg-dark-codgray rounded-b-md mt-auto">
                        <SiNextdotjs size={"25px"} />
                        <FaReact size={"25px"} />
                        <RiTailwindCssFill size={"25px"} />
                        <FaLaravel size={"25px"} />
                        <FaWordpress size={"25px"} />
                    </div>
                </MotionDiv>
                <MotionDiv variants={fadeInTransition("up", "tween", 0.2, 0.7)} className="flex flex-col rounded-md border border-light-mineshaft dark:border-dark-mineshaft hover:border-light-nero dark:hover:border-dark-nero transition-all bg-light-mineshaft dark:bg-dark-mineshaft">
                    <div className="flex flex-col p-7 gap-3">
                        <BsPhone className="text-light-nero dark:text-dark-nero text-3xl" />
                        <h3 className="font-bold text-xl text-light-nero dark:text-dark-nero">Mobile Development</h3>
                        <p className="text-light-nero dark:text-dark-nero">Let me build a powerful mobile app with Flutter to seamlessly address your specific challenges and streamline your processes, providing an intuitive and effective solution.</p>
                    </div>
                    <div className="flex flex-row items-center p-7 gap-3 text-light-nero dark:text-dark-nero bg-light-codgray dark:bg-dark-codgray rounded-b-md mt-auto">
                        <RiFlutterFill size={"25px"} />
                    </div>
                </MotionDiv>
                <MotionDiv variants={fadeInTransition("up", "tween", 0.4, 0.7)} className="flex flex-col rounded-md border border-light-mineshaft dark:border-dark-mineshaft hover:border-light-nero dark:hover:border-dark-nero transition-all bg-light-mineshaft dark:bg-dark-mineshaft">
                    <div className="flex flex-col p-7 gap-3">
                        <MdOutlinePalette className="text-light-nero dark:text-dark-nero text-3xl" />
                        <h3 className="font-bold text-xl text-light-nero dark:text-dark-nero">UI/UX Design</h3>
                        <p className="text-light-nero dark:text-dark-nero">I can help you build a fully functional UI prototype of your product, turning your ideas into a tangible, testable reality.</p>
                    </div>
                    <div className="flex flex-row items-center p-7 gap-3 text-light-nero dark:text-dark-nero bg-light-codgray dark:bg-dark-codgray rounded-b-md mt-auto">
                        <FaFigma size={"25px"} />
                    </div>
                </MotionDiv>
            </div>
        </MotionSection>
    )
}