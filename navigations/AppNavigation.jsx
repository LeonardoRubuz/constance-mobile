import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator()
function AppNavigation() {
    return ( 
        <Stack.Navigator initialRouteName="App">
            <Stack.Screen name="App" component={TabNavigation} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
     );
}

export default AppNavigation;