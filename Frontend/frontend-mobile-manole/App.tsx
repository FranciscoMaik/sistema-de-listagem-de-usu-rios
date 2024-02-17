import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from "styled-components/native"

import { theme } from "./styles/theme"

import { Home } from './src/screens/Home';
import { UserProvider } from './src/modules/home/context/UserAuth';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <StatusBar style="auto" />
        <Home />
      </UserProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
