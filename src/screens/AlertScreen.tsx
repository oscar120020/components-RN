import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {
  const createThreeButtonAlert = () =>
    Alert.alert('Aceptar consentimientos', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ], { cancelable: true }
  );

  const createPrompt = () => {
    prompt(
      'Enter Password',
      'Enter your password to login',
      (value: string) => console.log({value}),
      {
        type: 'secure-text',
        cancelable: false,
      },
    );
  };

  return (
    <View style={styles.container}>
      <Button title="First alert" onPress={createThreeButtonAlert} />
      <Button title="Show Prompt" onPress={createPrompt} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
