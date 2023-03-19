import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Loading from './Loading';
import Login from './Login';
import LoginInput from './LoginInput'
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen options={{ headerShown: false }} name="Loading" component={Loading}/>
        <Stack.Screen options={{ headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false}} name="LoginInput" component={LoginInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}