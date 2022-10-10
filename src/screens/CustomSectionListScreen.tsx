/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman','Antman','Antman', 'Thor', 'Spiderman','Antman','Antman', 'Thor', 'Spiderman','Antman','Antman', 'Thor', 'Spiderman','Antman', 'Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Antman', 'Thor', 'Spiderman','Antman','Antman', 'Thor', 'Spiderman','Antman','Antman', 'Thor', 'Spiderman','Antman','Antman', 'Thor', 'Spiderman','Antman', 'Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama'],
  }
];

export const CustomSectionListScreen = () => {
  return (
    <View style={styles.globalMargin} >
        <SectionList
          sections={casas}
          keyExtractor={(item, i) => item + i}
          stickySectionHeadersEnabled
          renderItem={({item}) => <Text style={{marginLeft: 5, ...styles.text}} >{item}</Text>}
          renderSectionHeader={({section}) => (
            <View style={{backgroundColor: 'white'}} >
              <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}} >{section.casa}</Text>
            </View>
          )}
          renderSectionFooter={({section}) => (
            <View style={{backgroundColor: 'white'}} >
              <Text style={{fontSize: 15, color: 'black', fontWeight: '600', marginLeft: 5}} >Total de personajes: {section.data.length}</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={{marginBottom: 50}} >
              <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold', marginTop: 10}} >Total de casas: {casas.length}</Text>
              <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold', marginTop: 10}} >Total de peronajes: {casas.reduce((prev, curr) => prev + curr.data.length, 0)}</Text>
            </View>
          )}
          ListHeaderComponent={() => <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold', marginBottom: 10}} >Section List</Text>}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
        />
    </View>
  );
};
