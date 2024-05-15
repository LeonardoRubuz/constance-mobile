import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroductionScreen from "../screens/IntroductionScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();
function LoginNavigation() {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name="Introduction" component={IntroductionScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
     );
}

export default LoginNavigation;