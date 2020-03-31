import React from "react";
import {} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./screens/Home";
import City from "./screens/City";
import Profile from './screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const stackNavigation = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="City" component={City} />
      </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={stackNavigation}  />
        <Tab.Screen name="Profile" component={Profile}  />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
