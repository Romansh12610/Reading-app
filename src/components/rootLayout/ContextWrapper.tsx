'use client';
import React, { createContext, useContext } from 'react';
import GlobalContextInterface from '@/interfaces/contextWrapper';
// hooks
import useTheme from '@/hooks/useTheme';
// components
import Header from '@/components/rootLayout/Header';


// types
interface GlobalContextProps {
    children: React.ReactNode;
}

const GlobalContext = createContext<GlobalContextInterface | null>(null);

const ContextWrapper = (props: GlobalContextProps) => {
    const [theme, systemTheme, setTheme] = useTheme();

    return (
        <GlobalContext.Provider value={{
            theme,
            systemTheme,
            setTheme,
        }}>
            <body data-dark={theme === 'dark' ? true : false}>
                <Header />
                {props.children}
            </body>
        </GlobalContext.Provider>
    )
};

export default ContextWrapper;

export const useGlobalContext = () => {
    return useContext(GlobalContext) as GlobalContextInterface;
};