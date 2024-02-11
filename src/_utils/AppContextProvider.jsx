import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

  // Load saved scheme from storage
  useEffect(() => {
    const getScheme = async () => {
      try {
        const savedScheme = await AsyncStorage.getItem('scheme');
        if (savedScheme) {
          setTheme(savedScheme === 'dark' ? KHDarkTheme : KHLightTheme);
        }
      } catch (error) {
        console.error('🚩 Error loading scheme');
      }
    };
    getScheme();
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
