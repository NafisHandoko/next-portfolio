"use client"

import { ButtonPropsType } from "@/app/_types/button";
import Link from "next/link";

export default function Button({ type, text, href = '', className = '', onClick = () => { } }: ButtonPropsType) {
    return type == "Link" ? <Link href={href} className={`text-light-nero dark:text-dark-nero border border-light-nero dark:border-dark-nero hover:bg-light-nero dark:hover:bg-dark-nero hover:text-light-codgray dark:hover:text-dark-codgray transition-all rounded-md px-8 py-4 ${className}`}>{text}</Link> :
        type == "a" ? <a href={href} target="_blank" className={`text-light-nero dark:text-dark-nero border border-light-nero dark:border-dark-nero hover:bg-light-nero dark:hover:bg-dark-nero hover:text-light-codgray dark:hover:text-dark-codgray transition-all rounded-md px-8 py-4 ${className}`}>{text}</a> :
            type == "tab" ? <button onClick={onClick} className={`text-light-nero dark:text-dark-nero text-sm border border-light-nero dark:border-dark-nero hover:bg-light-nero dark:hover:bg-dark-nero hover:text-light-codgray dark:hover:text-dark-codgray transition-all rounded-md px-5 py-2 ${className}`}>{text}</button> : <></>
}