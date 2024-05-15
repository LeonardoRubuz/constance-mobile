import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TutorialsListScreen from "../screens/TutorialsListScreen"
import TutorialDetailsScreen from "../screens/TutorialDetailsScreen"

const Stack = createNativeStackNavigator();
function TutorialsNavigation() {
    return ( 
        <Stack.Navigator initialRouteName="Tutorials List">
            <Stack.Screen name="Tutorials List" component={TutorialsListScreen} />
            <Stack.Screen name="Tutorial Steps" component={TutorialDetailsScreen} />
        </Stack.Navigator>
     );
}

export default TutorialsNavigation;