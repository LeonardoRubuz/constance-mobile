import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/HomeScreen";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

function MainNavigation() {
    return ( 
        <Stack.Navigator initialRouteName="Home" screenOptions={
            Platform.select({
                android : {
                    headerShown : false
                },
                default : {}
            })
            
        }>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
     );
}

export default MainNavigation;