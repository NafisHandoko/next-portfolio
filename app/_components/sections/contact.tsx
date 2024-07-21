export default function ContactSection() {
    return (
        <section id="contact" className="container mx-auto flex flex-col items-center text-center px-10 md:px-40 py-36 gap-10">
            <h2 className="text-4xl font-bold text-nero">Keep In Touch</h2>
            <p className="text-silver w-full md:w-1/2">
                Whether you have an idea for a project or just want to chat, feel free to chat me!
            </p>
            <a href="https://wa.me/6281332079137" target="_blank" className="text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-md px-8 py-4 self-center">Let&apos;s Talk!</a>
        </section>
    )
}