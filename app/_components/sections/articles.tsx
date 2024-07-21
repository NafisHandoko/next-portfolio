import Link from "next/link";

export default function ArticlesSection() {
    return (
        <section id="articles" className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
            <h2 className="uppercase text-nero font-bold text-3xl">Articles</h2>
            <div className="flex flex-col">
                <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-md py-5 hover:p-5">
                    <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                    <span className="text-silver text-sm">May 12, 2024</span>
                </Link>
                <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-md py-5 hover:p-5">
                    <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                    <span className="text-silver text-sm">May 12, 2024</span>
                </Link>
                <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-md py-5 hover:p-5">
                    <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                    <span className="text-silver text-sm">May 12, 2024</span>
                </Link>
                <Link href={'/articles/1'} className="flex flex-col gap-3 border border-transparent hover:border-mineshaft transition-all rounded-md py-5 hover:p-5">
                    <h3 className="font-semibold text-xl text-nero">Best way to structure your project in Nextjs using Atomic Design Methodology</h3>
                    <span className="text-silver text-sm">May 12, 2024</span>
                </Link>
            </div>
            <Link href="/articles" className="text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-md px-8 py-4 self-center">Show more</Link>
        </section>
    )
}