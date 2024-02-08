import React from 'react';
import { View } from 'react-native';
import Button from 'components/buttons/Button';
import createConfirmAlert from 'components/alerts/ConfirmAlert';
import ThemeButton from './ThemeButton';

const SettingsScreen = () => (
  <View>
    <ThemeButton />
    <Button
      label='My Ko-Fi'
      onPress={() =>
        createConfirmAlert({ title: 'Money', message: 'Give me money please' })
      }
    />
  </View>
);

export default SettingsScreen;
