import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BrowseScreen from "../screens/BrowseScreen";
import CouponsScreen from "../screens/CouponsScreen";
import DealsScreen from "../screens/DealsScreen";
import SearchScreen from "../screens/SearchScreen";
import ShoppingListScreen from "../screens/ShoppingListScreen";
import colors from "../configs/colors";
import { color } from "react-native-reanimated";

import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const NavigationBar = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.white,
      activeTintColor: colors.secondary,
      inactiveBackgroundColor: colors.white,
      inactiveTintColor: colors.light,
      size: 60,
      iconStyle: 30,
    }}
  >
    <Tab.Screen
      name="Browse"
      component={BrowseScreen}
      options={{
        tabBarIcon: ({ size = 70, color }) => (
          <MaterialCommunityIcons name="home" size={28} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Coupons"
      component={CouponsScreen}
      options={{
        tabBarIcon: ({ size = 70, color }) => (
          <MaterialCommunityIcons name="cash" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Deals"
      component={DealsScreen}
      options={{
        tabBarIcon: ({ size = 70, color }) => (
          <MaterialCommunityIcons name="fire" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ size = 70, color }) => (
          <MaterialCommunityIcons name="table-search" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ShoppingList"
      component={ShoppingListScreen}
      options={{
        tabBarIcon: ({ size = 70, color }) => (
          <MaterialCommunityIcons name="cart-outline" size={30} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
// const Stack = createStackNavigator();

// const NavigationBar = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Browse" component={BrowseScreen} />
//     <Stack.Screen name="Coupons" component={CouponsScreen} />
//   </Stack.Navigator>
// );

export default NavigationBar;
