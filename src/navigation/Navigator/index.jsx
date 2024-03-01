import React, { useContext } from 'react';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import MenuScreen from 'screens/MenuScreen';
import PatternsScreen from 'screens/PatternsScreen';
import WipScreen from 'screens/WipScreen';
import ListScreen from 'screens/ListScreen';
import SettingsScreen from 'screens/SettingsScreen';
// Context
import { AppContext } from '_utils/AppContextProvider';
// Translation
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { theme } = useContext(AppContext);
  const { t } = useTranslation();
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.text,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          animation: 'slide_from_bottom',
        }}
      >
        <Stack.Screen
          name='menu'
          component={MenuScreen}
          options={{
            title: 'Knit Hut',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 30 },
          }}
        />
        <Stack.Screen
          name='patterns'
          component={PatternsScreen}
          options={{ title: t('patterns_long') }}
        />
        <Stack.Screen
          name='wips'
          component={WipScreen}
          options={{ title: t('wips_long') }}
        />
        <Stack.Screen
          name='list'
          component={ListScreen}
          options={{ title: t('shopping_list') }}
        />
        <Stack.Screen
          name='settings'
          component={SettingsScreen}
          options={{ title: t('settings') }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
