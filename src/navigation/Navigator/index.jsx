// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import MenuScreen from "@app/screens/MenuScreen";
import PatternsScreen from "@app/screens/PatternsScreen";
import WipScreen from "@app/screens/WipScreen";
import ListScreen from "@app/screens/ListScreen";
import SettingsScreen from "@app/screens/SettingsScreen";
// Context
import { useContext } from "react";
import { AppContext } from "AppContextProvider";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { theme } = useContext(AppContext);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.text,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name='menu'
          component={MenuScreen}
          options={{
            title: "Knit Hut",
            headerTitleStyle: { fontWeight: "bold", fontSize: 30 },
          }}
        />
        <Stack.Screen
          name='patterns'
          component={PatternsScreen}
          options={{ title: "Saved Patterns" }}
        />
        <Stack.Screen
          name='wips'
          component={WipScreen}
          options={{ title: "Works in Progress" }}
        />
        <Stack.Screen
          name='list'
          component={ListScreen}
          options={{ title: "Shopping List" }}
        />
        <Stack.Screen
          name='settings'
          component={SettingsScreen}
          options={{ title: "Settings" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
