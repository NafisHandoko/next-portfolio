import Button from "../base/button";

export default function ContactSection() {
    return (
        <section id="contact" className="container mx-auto flex flex-col items-center text-center px-10 md:px-40 py-36 gap-10">
            <h2 className="text-4xl font-bold text-nero">Keep In Touch</h2>
            <p className="text-silver w-full md:w-1/2">
                Whether you have an idea for a project or just want to chat, feel free to chat me!
            </p>
            <Button type="a" href="https://wa.me/6281332079137" text="Let&apos;s Talk!" />
        </section>
    )
}