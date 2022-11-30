/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: false,
  });

  const {theme: { colors }} = useContext(ThemeContext);

  const handleChange = (value: boolean, name: keyof typeof state) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer} >
        <Text style={{...styles.text, color: colors.text}} >Is Active</Text>
        <CustomSwitch
          isEnabled={state.isActive}
          onChange={value => handleChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchContainer} >
        <Text style={{...styles.text, color: colors.text}} >Is Hungry</Text>
        <CustomSwitch
          isEnabled={state.isHungry}
          onChange={value => handleChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchContainer} >
        <Text style={{...styles.text, color: colors.text}} >Is Happy</Text>
        <CustomSwitch
          isEnabled={state.isHappy}
          onChange={value => handleChange(value, 'isHappy')}
        />
      </View>
      <Text style={{
        ...styles.text,
        marginTop: 10,
        color: colors.text,
      }} >{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
