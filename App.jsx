import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "./src/screens/MenuScreen";
import PatternsScreen from "./src/screens/PatternsScreen";
import WipScreen from "./src/screens/WipScreen";
import ListScreen from "./src/screens/ListScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#005E71",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name='menu'
          component={MenuScreen}
          options={{
            title: "KnitHut",
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
export default App;
