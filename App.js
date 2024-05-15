import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginNavigation from "./naviations/LoginNavigation";
import AppNavigation from "./naviations/AppNavigation";


export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigation />
      <AppNavigation />
    </NavigationContainer>
  );
}

