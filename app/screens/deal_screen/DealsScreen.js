import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../configs/colors";
import AllDeals from "./AllDeals";
import Eletronics from "./Eletronics";
import Groceries from "./Groceries";
import HomeAndGarden from "./HomeAndGarden";
import ToysAndGame from "./ToysAndGame";

const Stack = createStackNavigator();
const TabTop = createMaterialTopTabNavigator();

const Deals = ({ navigation }) => (
  <TabTop.Navigator
    initialRouteName="All Deals"
    // optimizationsEnabled={false}
    activeTintColor={colors.primary}
    tabBarIcon={{ tintColor: colors.secondary }}
    // tabBarLabel= {{tintColor :colors.secondary}}
    tabBarOptions={{
      activeTintColor: colors.secondary,
      inactiveTintColor: colors.gray,
      scrollEnabled: true,
      labelStyle: {
        fontSize: 14,
        // backgroundColor: colors
      },
      upperCaseLabel: false,
      tabStyle: {
        marginVertical: -10,
        paddingVertical: 0,
        // paddingBottom:15,
        // marginTop: -10,
        // marginBottom: -10,
        // height: 30,

        // flex:0.5
        //  width: 130,
        // backgroundColor: "lightyellow",
        //color: colors.secondary
      },

      style: {
        //  backgroundColor: "lightyellow",
        borderColor: colors.secondary,
        colors: colors.secondary,
      },
    }}
    // swipeEnabled
  >
    <TabTop.Screen name="All Deals" component={AllDeals}></TabTop.Screen>
    <TabTop.Screen name="Electronics" component={Eletronics}></TabTop.Screen>
    <TabTop.Screen
      name="home and Garden"
      component={HomeAndGarden}
    ></TabTop.Screen>
    <TabTop.Screen
      name="AllDeals4"
      title
      component={ToysAndGame}
    ></TabTop.Screen>
  </TabTop.Navigator>
);

export default function DealsScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        screenOptions={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
        }}
        name="Hot Deals"
        component={Deals}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
