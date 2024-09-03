'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const switchTheme = () => {
        setTheme(theme == 'dark' ? 'light' : 'dark')
    }

    const animateSwitchTheme = () => {
        if (!document.startViewTransition) {
            switchTheme()
        }
        document.startViewTransition(switchTheme);
    }

    return (
        <div className="bg-background text-primary-green">
            <button
                className='text-light-nero dark:text-dark-nero w-10 h-10 hidden md:flex items-center justify-center rounded-full border border-light-nero dark:border-dark-nero cursor-pointer hover:bg-light-nero dark:hover:bg-dark-nero hover:text-light-codgray dark:hover:text-dark-codgray transition-all'
                onClick={animateSwitchTheme}
            >
                {

                    theme == 'dark' && <IoSunny />
                }
                {
                    theme == 'light' && <IoMoon />
                }
            </button>
        </div>
    );
};

export default ThemeSwitcher;