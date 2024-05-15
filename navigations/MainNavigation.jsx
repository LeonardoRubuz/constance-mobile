import { NavigationContainer } from "@react-navigation/native";
import LoginNavigation from "./LoginNavigation";
import AppNavigation from "./AppNavigation";

function MainNavigation() {
    return ( 
        <NavigationContainer>
            <LoginNavigation />
            <AppNavigation />
        </NavigationContainer>        
     );
}

export default MainNavigation;