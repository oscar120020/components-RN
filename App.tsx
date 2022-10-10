import 'react-native-gesture-handler';
import React from 'react';
import { StackNavigator } from './src/navigation/StackNavigator';
import { ThemeProvider } from './src/context/themeContext/ThemeProvider';

// const myTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: 'gray',
//     // background: 'gray',
//     // card: 'gray',
//     // text: 'gray',
//     // border: 'gray',
//     // notification: 'gray',
//   },
// };

export const App = () => {
  return (
    <ThemeProvider>
      <StackNavigator/>
    </ThemeProvider>
  );
};
