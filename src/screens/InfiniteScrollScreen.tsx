/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5,6]);


  const renderItem = (item: number) => {
    const uri = `https://picsum.photos/id/${item}/1024/1024`;
    return (
      <FadeInImage uri={uri} styles={{height: 400, width: '100%'}} />
    );
  };

  const loadMore = () => {
    const newArray = Array.apply(null, Array(7)).map((n, i) => numbers[numbers.length - 1] + i + 1);
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1000);
  };


  return (
    <View>
        <FlatList
          data={numbers}
          renderItem={({item}) => renderItem(item)}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => (
            <View style={{
              height: 100,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <ActivityIndicator size={30} color="#5856d6" />
            </View>
          )}
        />
    </View>
  );
};

// const styles = StyleSheet.create({
//   image:{
//     width: '100%',
//     height: 400,
//   },
// });
