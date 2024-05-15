import { NavigationContainer } from '@react-navigation/native';
import LoginNavigation from "./navigations/LoginNavigation";
import AppNavigation from "./navigations/AppNavigation";
import { StatusBar } from 'react-native';

const isLogged = false;
export default function App() {
  return (
    <NavigationContainer>
      {isLogged ? <AppNavigation /> : <LoginNavigation />}
      <StatusBar />
    </NavigationContainer>
  );
}
