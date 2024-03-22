import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Header from './views/Header';

export default function App() {
  return (
    <> 
      <View style={styles.container}>
        <Header />
      </View>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color : "#fff",
    // top : 25
  },
});
