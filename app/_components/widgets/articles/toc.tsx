"use client"

import { useEffect, useState } from "react"

export default function TOC({ articleBody }: any) {
    const headings = articleBody.match(/#{2,4} .+/g)
    const toc = headings.map((heading: any) => {
        const level = heading.match(/#/g).length - 2
        const title = heading.replace(/#{2,4} /, '')
        return { title, level }
    })

    const [activeId, setActiveId] = useState()
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
        <div className="w-1/4 hidden md:flex flex-col gap-4 my-0 sticky top-28">
            <span className="text-nero font-bold text-xl">Table of Contents</span>
            <div className="flex flex-col gap-3 text-sm">
                {toc && toc.map((heading: any, i: any) =>
                    <span className={`${heading.title == activeId ? 'text-nero font-semibold' : 'text-jumbo'} ml-${heading.level * 7}`} key={i}>{heading.title}</span>
                )}
            </div>
        </div>
    )
}