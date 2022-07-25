import 'react-native-get-random-values';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export function App() {
  return (
    <View style={styles.container}>
      <Text>Minimal Reproducible Example</Text>
    </View>
  );
}
