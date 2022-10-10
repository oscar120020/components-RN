import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(-100)).current;

  const fadeIn = (duration = 500) => {
    Animated.timing(opacity, {
       toValue: 1,
       duration,
       useNativeDriver: true,
    }).start();
  };

  const fadeOut = (duration = 500) => {
    Animated.timing(opacity, {
       toValue: 0,
       duration,
       useNativeDriver: true,
    }).start();
  };

  const startMovingPosition = (initPosition: number, duration = 1000) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const resetMovingPosition = (initPosition: number, duration = 500) => {
    Animated.timing(position, {
      toValue: initPosition,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition,
    resetMovingPosition,
  };
};

