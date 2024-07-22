import Link from "next/link";

export default function Button({ type, text, href = '', className = '' }: { type: 'Link' | 'a' | 'tab', text: string, href?: string, className?: string }) {
    return type == "Link" ? <Link href={href} className={`text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-md px-8 py-4 ${className}`}>{text}</Link> :
        type == "a" ? <a href={href} target="_blank" className={`text-nero border border-nero hover:bg-nero hover:text-codgray transition-all rounded-md px-8 py-4 ${className}`}>{text}</a> :
            type == "tab" ? <button className={`${className}`}>{text}</button> : <></>
}