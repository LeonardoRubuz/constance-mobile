import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import SmallButton from './components/Buttons/SmallButton';
import LargeButton from './components/Buttons/LargeButton';

export default function App() {
  return (
    <> 
      <View style={styles.container}>
        <Header />
        <View>
          <SmallButton label="small button" theme="dark" />
          <LargeButton label="large button" theme="dark" />
        </View>
        <Footer />
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
