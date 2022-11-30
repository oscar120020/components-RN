/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {setLightTheme, setDarkTheme, theme} = useContext(ThemeContext);

  const handleChangeTheme = () => {
    if (theme.currentTheme === 'light'){
        setDarkTheme();
    } else {
        setLightTheme();
    }
  };

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#5856d6',
          width: 130,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginTop: 10,
        }}
        activeOpacity={0.7}
        onPress={handleChangeTheme}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};
