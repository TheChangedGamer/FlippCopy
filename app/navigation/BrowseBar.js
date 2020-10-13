import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import BrowseScreen from "../screens/BrowseScreen";
import Explore from "../screens/Explore";
import LastestScreen from "../screens/LastestScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BrowseBar = () => (
  <Stack.Navigator>
    <Stack.Screen name="Explore" component={Explore}></Stack.Screen>
    <Stack.Screen name="Lastest" component={LastestScreen}></Stack.Screen>
  </Stack.Navigator>
);

export default BrowseBar;
