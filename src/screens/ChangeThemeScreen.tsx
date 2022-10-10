/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}} >
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
        >
            <Text style={{
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
