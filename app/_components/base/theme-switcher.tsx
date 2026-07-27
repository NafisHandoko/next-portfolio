"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export default function ThemeSwitcher({ variant }: { variant?: "inverse" }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10" />;

  const btnClass = variant === "inverse"
    ? "text-dark-text hover:text-accent-purple"
    : "text-dark-text-secondary hover:text-dark-text";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-2 rounded-lg transition-all duration-300 hover:bg-dark-elevated ${btnClass}`}
      aria-label="Toggle theme"
    >
      {isDark ? <HiSun size="20px" /> : <HiMoon size="20px" />}
    </button>
  );
}
