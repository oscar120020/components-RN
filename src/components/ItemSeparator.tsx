/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

export const ItemSeparator = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: '#00000075',
        marginVertical: 5,
      }}
    />
  );
};
