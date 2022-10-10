/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ActivityIndicator, Animated, ImageStyle, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  styles: ImageStyle
}

export const FadeInImage = ({uri, styles}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    fadeIn(300);
    setIsLoading(false);
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && <ActivityIndicator size={25} color="#5856d6" style={{position: 'absolute'}} />}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{
            ...styles,
            opacity,
        }}
      />
    </View>
  );
};
