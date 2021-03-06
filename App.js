import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Registration from "./screens/Registration";
import HomeScreen from "./screens/HomeScreen";
export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Register"
      >
        <stack.Screen name="Register" component={Registration} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="HomeScreen" component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
