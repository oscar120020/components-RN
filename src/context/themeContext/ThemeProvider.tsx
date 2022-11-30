/* eslint-disable no-extra-boolean-cast */
import React, {useReducer,useEffect} from 'react';
import {Theme} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import {ThemeContext} from './ThemeContext';
import {themeReducer} from './themeReducer';

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'rgba(0,0,0,1)',
  dark: false,
  colors: {
    primary: '#5856d6',
    background: 'white',
    card: 'green',
    text: 'black',
    border: 'rgba(0,0,0,0.4)',
    notification: 'orange',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dividerColor: 'rgba(0,0,0,0.7)',
  dark: true,
  colors: {
    primary: 'red',
    background: 'black',
    card: 'green',
    text: 'yellow',
    border: 'rgba(255,255,255,0.4)',
    notification: 'orange',
  },
};

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const ThemeProvider = ({children}: Props) => {

  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  useEffect(() => {
    if (!!colorScheme){
      if (colorScheme === 'dark'){
        setDarkTheme();
      } else {
        setLightTheme();
      }
    }
  }, [colorScheme]);


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
