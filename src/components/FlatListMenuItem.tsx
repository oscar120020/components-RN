/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import {MenuItem} from '../interfaces/menuItemInterface';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {

  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const { theme: { colors } } = useContext(ThemeContext);
 
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate(menuItem.component)}
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={25} color={colors.primary} />
        <Text style={{...styles.name, color: colors.text}} >{menuItem.name}</Text>

        <View style={{flex: 1}} />

        <Icon name="chevron-forward-outline" size={25} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name:{
    marginLeft: 5,
    color: 'black',
  },
});
