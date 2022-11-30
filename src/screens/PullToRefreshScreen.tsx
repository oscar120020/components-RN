// /* eslint-disable react/self-closing-comp */
import React, { useState, useContext } from 'react';
import { Animated, RefreshControl, ScrollView, Text } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState('');
  const { fadeIn, opacity } = useAnimation();
  const {theme: {colors}} = useContext(ThemeContext);

  const onRefreshing = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData('Refresh Done!!');
      setRefreshing(false);
      fadeIn(200);
    }, 2500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefreshing}
          progressViewOffset={10}
          // progressBackgroundColor="#4eac97"
          colors={['black', 'gray', 'red']}
        />
      }
    >
      <Animated.View style={{
        ...styles.globalMargin,
        opacity,
      }} >
          {data && <Text style={{...styles.title, color: colors.text}} >{data}</Text>}
      </Animated.View>
    </ScrollView>
  );
};
