'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeSwitcher = ({ variant = 'default' }: { variant?: 'default' | 'inverse' }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const defaultStyle = 'text-light-nero dark:text-dark-nero border-light-nero dark:border-dark-nero hover:bg-light-nero dark:hover:bg-dark-nero hover:text-light-codgray dark:hover:text-dark-codgray'
    const inverseStyle = 'text-dark-nero dark:text-light-nero border-dark-nero dark:border-light-nero hover:bg-dark-nero dark:hover:bg-light-nero hover:text-dark-codgray dark:hover:text-light-codgray'
    const selectedVariantStyle = variant == 'default' ? defaultStyle : inverseStyle

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
        <button
            className={`w-10 h-10 flex items-center justify-center rounded-full border cursor-pointer transition-all ${selectedVariantStyle}`}
            onClick={animateSwitchTheme}
        >
            {

                theme == 'dark' && <IoSunny />
            }
            {
                theme == 'light' && <IoMoon />
            }
        </button>
    );
};

export default ThemeSwitcher;