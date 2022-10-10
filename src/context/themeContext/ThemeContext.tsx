import { createContext } from 'react';
import { ThemeState } from './ThemeProvider';

interface ContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ContextProps);