"use client"

import { useEffect, useState } from "react"

export default function TOC({ headings }: { headings: RegExpMatchArray }) {
    const toc = headings.map((heading) => {
        if (heading && typeof heading === 'string') {
            const matchResult = heading.match(/#/g);
            if (matchResult) {
                const level = matchResult.length - 2;
                const title = heading.replace(/#{2,4} /, '');
                return { title, level };
            }
        }
        return null;
    }).filter(item => item !== null);

    const [activeId, setActiveId] = useState<string>()
    
    useEffect(() => {
        const handleScroll = () => {
            let currentId
            for (const heading of toc) {
                const element = document.getElementById(heading.title)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top < window.innerHeight / 2) {
                        currentId = heading.title
                    } else {
                        break
                    }
                }
            }
            setActiveId(currentId)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [toc])

    return (
        <div className="flex flex-col gap-4">
            <span className="text-nero font-bold text-xl">Table of Contents</span>
            <div className="flex flex-col gap-3 text-sm">
                {toc && toc.map((heading, i) =>
                    <span className={`${heading.title == activeId ? 'text-nero font-semibold' : 'text-jumbo'} ml-${heading.level * 7}`} key={i}>{heading.title}</span>
                )}
            </div>
        </div>
    )
}