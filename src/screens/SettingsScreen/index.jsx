import React from 'react';
// Components
import { View } from 'react-native';
import ThemeButton from './ThemeButton';
import KoFiButton from './KoFiButton';
import LanguageButton from './LanguageButton';

const SettingsScreen = () => (
  <View>
    <ThemeButton />
    <KoFiButton />
    <LanguageButton />
  </View>
);

export default SettingsScreen;
