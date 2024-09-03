import { FaDribbble, FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa6";

export default function FooterSection() {
    return (
        <footer className="container mx-auto flex flex-col gap-5 items-center text-center py-7 mt-auto">
            <div className="flex flex-row md:hidden gap-5 text-light-nero dark:text-dark-nero">
                <a className="glow transition-all" target="_blank" href="https://github.com/nafishandoko"><FaGithub size={"25px"} /></a>
                <a className="glow transition-all" target="_blank" href="https://www.linkedin.com/in/nafishandoko"><FaLinkedin size={"25px"} /></a>
                <a className="glow transition-all" target="_blank" href="https://instagram.com/nafishandoko"><FaInstagram size={"25px"} /></a>
                <a className="glow transition-all" target="_blank" href="mailto:naffisioner@gmail.com"><FaRegEnvelope size={"25px"} /></a>
                <a className="glow transition-all" target="_blank" href="https://dribbble.com/nafishandoko"><FaDribbble size={"25px"} /></a>
            </div>
            <p className="text-light-nero dark:text-dark-nero">Made with ❤️ by Nafis Handoko</p>
        </footer>
    )
}