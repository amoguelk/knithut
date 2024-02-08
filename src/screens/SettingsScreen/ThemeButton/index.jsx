import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '_utils/AppContextProvider';
import { KHDarkTheme, KHLightTheme } from '_constants/theme';
import Button from 'components/buttons/Button';

const ThemeButton = () => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    if (theme.dark) setTheme(KHLightTheme);
    else setTheme(KHDarkTheme);
    AsyncStorage.setItem('scheme', theme.dark ? 'light' : 'dark');
  };

  return (
    <Button
      onPress={toggleTheme}
      label={`Current theme: ${theme.dark ? 'Dark' : 'Light'}`}
    />
  );
};

export default ThemeButton;
