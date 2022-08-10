import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';

import SignInScreen from './src/screens/SignInScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <SignInScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    justifyContent: 'center',
  },
});

