import React from "react";
import {} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "./screens/Home";
import City from "./screens/City";
import Profile from './screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="Home" component={tabNavigation} />
        <Stack.Screen name="City" component={City} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const tabNavigation = () => {
  return (
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'md-home'
          } else if (route.name === 'Profile') {
            iconName = 'ios-contact'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
          activeTintColor: '#f4511e',
          inactiveTintColor: 'grey'
      }}>
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Profile" component={Profile}  />
      </Tab.Navigator>
  )
}

export default App;
