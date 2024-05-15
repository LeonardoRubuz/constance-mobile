import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PricingsListScreen from "../screens/PricingsListScreen";
import RateScreen from "../screens/RateScreen"

const Stack = createNativeStackNavigator();
function PricingNavigation() {
    return ( 
        <Stack.Navigator initialRouteName="All Pricings">
            <Stack.Screen name="All Pricings" component={PricingsListScreen}/>
            <Stack.Screen name="Rate" component={RateScreen}/>
        </Stack.Navigator>
     );
}

export default PricingNavigation;