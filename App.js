import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';

export default function App() {
  return (
    <> 
      <View style={styles.container}>
        <Header />
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color : "#fff",
  },
});
