import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersListScreen from "../screens/OrdersListScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import OrderFormScreen from "../screens/OrderFormScreen";

const Stack = createNativeStackNavigator();
function OrdersNavigation() {
    return ( 
        <Stack.Navigator initialRouteName="All Orders">
            <Stack.Screen name="All Orders" component={OrdersListScreen} />
            <Stack.Screen name="Order Details" component={OrderDetailsScreen} />
            <Stack.Screen name="Add to cart" component={OrderFormScreen} />
        </Stack.Navigator>
     );
}

export default OrdersNavigation;