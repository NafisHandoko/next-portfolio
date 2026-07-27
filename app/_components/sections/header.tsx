"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsListNested } from "react-icons/bs";
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa6";
import { GoArrowUp } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { MotionA, MotionDiv } from "../wrapper/framer";
import { fadeInTransition } from "@/app/_utils/transitions";
import ThemeSwitcher from "../base/theme-switcher";

const NAV_LINKS = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experiences", label: "Experiences" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function HeaderSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      {/* Back to top */}
      <MotionA
        variants={fadeInTransition("up", "tween", 0.2, 0.4)}
        initial="hidden"
        animate="show"
        href="#hero"
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-dark-elevated border border-dark-border text-dark-text shadow-lg hover:shadow-accent-purple/20 hover:border-accent-purple/50 transition-all duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <GoArrowUp />
      </MotionA>

      {/* Desktop social sidebar */}
      <div className="hidden lg:flex flex-col items-center justify-between py-10 fixed top-[30%] right-[3%] text-dark-text-secondary h-[40vh] z-20">
        {[
          { icon: FaGithub, href: "https://github.com/nafishandoko" },
          { icon: FaLinkedin, href: "https://www.linkedin.com/in/nafishandoko" },
          { icon: FaInstagram, href: "https://instagram.com/nafishandoko" },
          { icon: FaRegEnvelope, href: "mailto:naffisioner@gmail.com" },
          { icon: FaDribbble, href: "https://dribbble.com/nafishandoko" },
        ].map(({ icon: Icon, href }, i) => (
          <MotionA
            key={href}
            initial="hidden"
            animate="show"
            variants={fadeInTransition("left", "tween", 0.6 - i * 0.1, 0.2)}
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className="hover:text-accent-purple hover:scale-110 transition-all duration-200"
            aria-label={href}
          >
            <Icon size="18px" />
          </MotionA>
        ))}
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-dark-base/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-dark-text p-2"
          aria-label="Close menu"
        >
          <IoCloseOutline size="32px" />
        </button>
        <nav className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-dark-text hover:text-accent-purple transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-5 mt-4 text-dark-text-secondary">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/nafishandoko">
            <FaGithub size="20px" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nafishandoko">
            <FaLinkedin size="20px" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/nafishandoko">
            <FaInstagram size="20px" />
          </a>
        </div>
        <ThemeSwitcher variant="inverse" />
      </div>

      {/* Main navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-dark-border/20"
            : "bg-transparent"
        }`}
      >
        <div className="container-tight flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link
            href="/#hero"
            className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            NH
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm text-dark-text-secondary hover:text-dark-text hover:bg-dark-elevated rounded-lg transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Theme switcher desktop */}
            <div className="hidden lg:block">
              <ThemeSwitcher />
            </div>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-dark-text p-2"
              aria-label="Open menu"
            >
              <BsListNested size="24px" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
