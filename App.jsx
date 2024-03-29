import React from 'react';
// Navigation
import Navigator from './src/navigation/Navigator';
// Context
import AppContextProvider from './src/_utils/AppContextProvider';
// Translation
import "./i18n.config"

const App = () => (
  <AppContextProvider>
    <Navigator />
  </AppContextProvider>
);
export default App;
