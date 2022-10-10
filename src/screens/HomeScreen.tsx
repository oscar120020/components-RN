/* eslint-disable react-native/no-inline-styles */
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { ItemSeparator } from '../components/ItemSeparator';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { colors } = useTheme();

  const renderMenuHeader = () => {
    return (
      <View style={{marginBottom: 10}} >
        <Text style={{...styles.title, color: colors.text}} >Opciones de Menú</Text>
      </View>
    );
  };

  return (
    <View style={{
      flex: 1,
      paddingTop: top + 15,
      ...styles.globalMargin,
    }}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        ListHeaderComponent={renderMenuHeader}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
