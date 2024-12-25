import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../components/LoginScreen";
import HomeScreen from "../components/HomeScreen";
import DetailsScreen from "../components/DetailsScreen";

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
