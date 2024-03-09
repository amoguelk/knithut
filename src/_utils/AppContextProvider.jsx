import React, { useEffect, useState } from 'react';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageKeys from '_constants/storageKeys';
// Theme
import { useColorScheme } from 'react-native';
import { KHDarkTheme, KHLightTheme } from '_constants/theme';
// Documentation
import PropTypes from 'prop-types';

export const AppContext = React.createContext(null);

const AppContextProvider = ({ children }) => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(
    scheme === 'dark' ? KHDarkTheme : KHLightTheme
  );

  // Load saved theme from storage
  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(
          storageKeys.SETTINGS.THEME
        );
        if (savedTheme) {
          setTheme(savedTheme === 'dark' ? KHDarkTheme : KHLightTheme);
        }
      } catch (error) {
        console.error('🚩 Error loading theme');
      }
    };
    getTheme();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  // The contents of the app
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
