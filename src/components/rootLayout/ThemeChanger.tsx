'use client';
import { useGlobalContext } from "./ContextWrapper";
import styles from '@/styles/modules/rootLayout/themeChanger.module.scss';
import Image from "next/image";
import React, { useState } from 'react';
// framer
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { listVariants, itemVariants } from "@/styles/variants/themeToggler/themeTogglerVariants";
import { SetThemeType, ThemeType } from "@/hooks/useTheme";

// types & helpers
type CustomThemeType = ThemeType | 'system';
type SvgPathType = '/moon.svg' | '/sun.svg' | '/computer.svg';

// main component
const ThemeChanger = () => {
    const { systemTheme, setTheme } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);
    const [svgPath, setSvgPath] = useState<SvgPathType>('/computer.svg');

    return (
        <div className={styles.container}>
            <button 
                className={styles.button} 
                data-open={isOpen}
                onClick={() => setIsOpen(o => !o)}
                aria-controls="open-list"
                aria-expanded={isOpen}
            >
                <span className={styles.buttonText}>тема: </span>
                <Image src={svgPath} alt='' role="presentation" width={35} height={35} />
            </button>
            <LazyMotion features={domAnimation} strict>
                <AnimatePresence>
                    {isOpen && (
                        <PopupThemeList setTheme={setTheme} systemTheme={systemTheme} setSvgPath={setSvgPath} closeList={() => setIsOpen(false)} />
                    )}
                </AnimatePresence>
            </LazyMotion>
        </div>
    )
};

export default ThemeChanger;

// types of list
interface ListProps {
    setTheme: SetThemeType;
    systemTheme: ThemeType;
    setSvgPath: React.Dispatch<React.SetStateAction<SvgPathType>>
    closeList: () => void; 
}

type ButtonCustomEvent = React.MouseEvent<HTMLButtonElement & { name: 'light' | 'dark' | 'system' }> ;

type GetSvgPath = (currentTheme: CustomThemeType) => SvgPathType;

// helper
const getSvgPath: GetSvgPath = (theme: CustomThemeType) => {
    return theme === 'dark' ? '/moon.svg' : theme === 'light' ? '/sun.svg' : '/computer.svg';
};


const PopupThemeList = ({ setTheme, systemTheme, setSvgPath, closeList }: ListProps) => {

    const handleChangeThemeClick = (e: ButtonCustomEvent) => {
        const { name } = e.currentTarget;
        setTheme(name === 'system' ? systemTheme : name);
        // extract new path
        const path = getSvgPath(name);
        setSvgPath(path);
        closeList();
    };

    return (
        <>
            <m.ul className={styles.list}
                variants={listVariants}
                exit='exit'
                initial='initial'
                animate='animate'
                
                id='open-list'
                aria-live="polite"
            >
                <m.li variants={itemVariants} className={styles.li}>
                    <button 
                        onClick={handleChangeThemeClick} data-first 
                        className={styles.buttonOption} name="light"
                    >
                        <Image src='/sun.svg' alt="" role="presentation" width={20}  height={20}/>
                        <span className={styles.optionText}>Светлая</span>
                    </button>
                </m.li>
                <m.li variants={itemVariants} className={styles.li}>
                    <button 
                        onClick={handleChangeThemeClick} 
                        className={styles.buttonOption} name="dark"
                    >
                        <Image src='/moon.svg' alt="" role="presentation" width={20}  height={20}/>
                        <span className={styles.optionText}>Тёмная</span>
                    </button>
                </m.li>
                <m.li variants={itemVariants} className={styles.li}>
                    <button 
                        onClick={handleChangeThemeClick} data-last 
                        className={styles.buttonOption} name="system"
                    >
                        <Image src='/computer.svg' alt="" role="presentation" width={20}  height={20}/>
                        <span className={styles.optionText}>Системная</span>
                    </button>
                </m.li>
            </m.ul>
            <p className="sr-only">Выбор цветовой темы</p>
        </>
    )
}