import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, startMovingPosition, resetMovingPosition, opacity, position} = useAnimation();

  const startAnimation = () => {
    fadeIn();
    startMovingPosition(100);
  };

  const resetAnimation = () => {
    fadeOut();
    resetMovingPosition(100);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          transform: [{translateX: position}],
        }}
      />

      <Button title="Start Animation" onPress={startAnimation} />
      <Button title="Reset Animation" onPress={resetAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});
