import React from "react";
import {} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/Home';
import City from './screens/City';
import Header from './components/Header'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen options={{header: () => null}} name="City" component={City} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
