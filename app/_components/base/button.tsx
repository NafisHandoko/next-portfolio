"use client";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

interface ButtonProps {
  type: "button" | "a" | "Link";
  text: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({ type, text, href, onClick }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 bg-accent-purple hover:bg-accent-purple/90 text-white shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 hover:-translate-y-0.5";

  if (type === "Link" && href) {
    return (
      <Link href={href} className={baseClasses}>
        {text}
        <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    );
  }
  if (type === "a" && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {text}
        <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
      </a>
    );
  }
  return (
    <button onClick={onClick} className={baseClasses}>
      {text}
    </button>
  );
}
