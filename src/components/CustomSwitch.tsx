import React from 'react';
import { Platform, Switch } from 'react-native';

interface Props {
    isEnabled: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isEnabled, onChange }: Props) => {

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#5856d6'}}
      thumbColor={Platform.OS === 'android' ? '#6360fc' : ''}
      onValueChange={() => onChange(!isEnabled)}
      value={isEnabled}
    />
  );
};
