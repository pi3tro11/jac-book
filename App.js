import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogoPage from './src/LogoPage';
import SecondPage from './src/SecondPage';

export default function App() {
  return (
    <View style={styles.container}>
      <LogoPage />
      <SecondPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
