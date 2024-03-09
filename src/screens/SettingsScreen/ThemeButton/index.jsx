import React, { useContext } from 'react';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageKeys from '_constants/storageKeys';
// Theme
import { AppContext } from '_utils/AppContextProvider';
import { KHDarkTheme, KHLightTheme } from '_constants/theme';
// Components
import Button from 'components/buttons/Button';
// Translation
import {useTranslation} from 'react-i18next';

const ThemeButton = () => {
  const { theme, setTheme } = useContext(AppContext);
  const { t } = useTranslation();

  const toggleTheme = () => {
    if (theme.dark) setTheme(KHLightTheme);
    else setTheme(KHDarkTheme);
    AsyncStorage.setItem(
      storageKeys.SETTINGS.THEME,
      theme.dark ? 'light' : 'dark'
    );
  };

  return (
    <Button
      onPress={toggleTheme}
      label={t('current_theme', { theme: theme.dark ? t('dark') : t('light') })}
    />
  );
};

export default ThemeButton;
