import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PricingNavigation from "./PricingNavigation";
import TutorialsNavigation from "./TutorialsNavigation";
import OrdersNavigation from "./OrdersNavigation";

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return ( 
        <Tab.Navigator initialRouteName="Orders">
            <Tab.Screen name="Orders" component={OrdersNavigation} />
            <Tab.Screen name="Pricings" component={PricingNavigation} />
            <Tab.Screen name="Tutorials List" component={TutorialsNavigation} />
        </Tab.Navigator>
     );
}

export default TabNavigation;