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

    return (
        <div className="bg-background text-primary-green">
            {/* The current theme is: {theme}
            <br />
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <br />
            <button onClick={() => setTheme('dark')}>Dark Mode</button> */}
            <button
                className='text-light-nero dark:text-dark-nero w-10 h-10 hidden md:flex items-center justify-center rounded-full border border-light-nero dark:border-dark-nero cursor-pointer hover:bg-light-nero dark:hover:bg-dark-nero hover:text-light-codgray dark:hover:text-dark-codgray transition-all'
                onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
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