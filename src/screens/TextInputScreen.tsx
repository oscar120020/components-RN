/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import {useForm} from '../hooks/useForm';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  isSubscribe: boolean;
}

export const TextInputScreen = () => {
  const { form, handleChange } = useForm<FormValues>({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });

  const {theme: {colors}} = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={customStyles.container}>
      <ScrollView>
        <View style={customStyles.container}>
          <TextInput
            style={{...customStyles.input, borderColor: colors.border}}
            placeholder="Name"
            value={form.name}
            onChangeText={handleChange('name')}
            autoCapitalize="words"
            placeholderTextColor="#8a8a8a"
          />
          <TextInput
            style={{
              ...customStyles.input,
              borderColor: colors.border,
            }}
            placeholder="email"
            keyboardType="email-address"
            value={form.email}
            onChangeText={handleChange('email')}
            placeholderTextColor="#8a8a8a"
          />
          <View style={customStyles.sub} >
            <Text style={{fontSize: 16, color: colors.text}} >Subscribirse</Text>
            <CustomSwitch isEnabled={form.isSubscribe} onChange={(value) => handleChange<boolean>('isSubscribe')(value)} />
          </View>

          <Text style={{...customStyles.showInfo, color: colors.text}}>{JSON.stringify(form, null, 5)}</Text>

          <Text style={{...customStyles.showInfo, color: colors.text}}>{JSON.stringify(form, null, 5)}</Text>

          <TextInput
            style={{...customStyles.input, borderColor: colors.border}}
            placeholder="writte a number"
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={handleChange('phone')}
            placeholderTextColor="#8a8a8a"
          />
        </View>
        <View style={{height: 150}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.4)',
    color: 'black',
  },
  showInfo: {
    margin: 15,
    fontSize: 20,
    color: 'black',
  },
  sub:{
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
