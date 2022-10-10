import {Theme} from '@react-navigation/native';
import React, {useReducer} from 'react';
import {ThemeContext} from './ThemeContext';
import {themeReducer} from './themeReducer';

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'rgba(0,0,0,0.7)',
  dark: false,
  colors: {
    primary: 'red',
    background: 'white',
    card: 'green',
    text: 'black',
    border: 'pink',
    notification: 'orange',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'rgba(0,0,0,0.7)',
  dark: false,
  colors: {
    primary: 'red',
    background: 'blue',
    card: 'green',
    text: 'yellow',
    border: 'pink',
    notification: 'orange',
  },
};

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const ThemeProvider = ({children}: Props) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  const setLightTheme = () => {
    dispatch({
        type: 'changeToLight',
        payload: lightTheme,
    });
  };

  const setDarkTheme = () => {
    dispatch({
        type: 'changeToDark',
        payload: darkTheme,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setLightTheme,
        setDarkTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
