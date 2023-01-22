import { StyleSheet, SafeAreaView } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";

import HomeScreen from "./src/screens/HomeScreen";

import RootNavigator from "./src/navigators/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
