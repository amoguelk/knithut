import React from 'react';
// Components
import { View } from 'react-native';
import ThemeButton from './ThemeButton';
import KoFiButton from './KoFiButton';

const SettingsScreen = () => (
  <View>
    <ThemeButton />
    <KoFiButton />
  </View>
);

export default SettingsScreen;
