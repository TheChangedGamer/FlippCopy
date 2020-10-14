import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BrowseScreen from "../screens/browse_screen/BrowseScreen";
import CouponsScreen from "../screens/coupons_screen/CouponsScreen";
import DealsScreen from "../screens/deal_screen/DealsScreen";
import SearchScreen from "../screens/search_screen/SearchScreen";
import ShoppingListScreen from "../screens/shopping_list_screen/ShoppingListScreen";
import colors from "../configs/colors";
import { color } from "react-native-reanimated";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "./routes";
const Tab = createBottomTabNavigator();
const TabBrowse = createMaterialTopTabNavigator();

const NavigationBar = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.white,
      activeTintColor: colors.secondary,
      inactiveBackgroundColor: colors.white,
      inactiveTintColor: colors.light,
      
      size: 60,
      // style: { marginTop: -20 },
      tabStyle: { marginBottom: 3, marginTop: 5 },
      iconStyle: 30,
    }}
  >
    <Tab.Screen
      name={routes.BROWSE}
      component={BrowseScreen}
      
      options={{
        tabBarIcon: ({ size = 70, color }) => (
          <MaterialCommunityIcons name="home" size={28} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.COUPONS}
      component={CouponsScreen}
      options={{
        tabBarIcon: ({ size = 70, color }) => (
          <MaterialCommunityIcons name="cash" size={28} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.DEALS}
      component={DealsScreen}
      options={{
        tabBarIcon: ({ size = 70, color }) => (
          <MaterialCommunityIcons name="fire" size={28} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.SEARCH}
      component={SearchScreen}
      options={{
        tabBarIcon: ({ size = 70, color }) => (
          <MaterialCommunityIcons name="table-search" size={28} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.SHOPPING_LIST}
      component={ShoppingListScreen}
      options={{
        tabBarIcon: ({ size = 70, color }) => (
          <MaterialCommunityIcons name="cart-outline" size={28} color={color} />
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
