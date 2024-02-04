// Navigation
import Navigator from "@app/navigation/Navigator";
// Context
import AppContextProvider from "AppContextProvider";

const App = () => {
  return (
    <AppContextProvider>
      <Navigator />
    </AppContextProvider>
  );
};
export default App;
