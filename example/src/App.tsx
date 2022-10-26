import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { ThemeProvider } from 'react-native-mobile-mini-app';
import { DefaultTheme } from 'react-native-paper';

export default function App() {
  return (
    <ThemeProvider theme={{ ...DefaultTheme }}>
      <View style={styles.container}>
        <Text>Result</Text>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
