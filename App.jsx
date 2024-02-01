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
      <Stack.Navigator>
        <Stack.Screen name='menu' component={MenuScreen} />
        <Stack.Screen name='patterns' component={PatternsScreen} />
        <Stack.Screen name='wips' component={WipScreen} />
        <Stack.Screen name='list' component={ListScreen} />
        <Stack.Screen name='settings' component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
