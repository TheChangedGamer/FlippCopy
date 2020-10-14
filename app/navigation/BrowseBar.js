import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BrowseScreen from "../screens/browse_screen/BrowseScreen";
// import Explore from "../screens/browse_screen/Explore";
import Lastest from "../screens/browse_screen/Lastest";
import DealsScreen from "../screens/deal_screen/DealsScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Animated from "react-native-reanimated";
import Explore from "../screens/browse_screen/Explore";

import colors from "../configs/colors"
import AToZ from "../screens/browse_screen/AToZ";
import Groceries from "../screens/browse_screen/Groceries";
import Pharmacy from "../screens/browse_screen/Pharmacy";

import routes from "./routes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
      <Text>hello</Text>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // modify inputRange for custom behavior
        const inputRange = state.routes.map((_, i) => i);
        // const opacity = Animated.interpolate(position, {
        //   inputRange,
        //   outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        // });

        return (
          <TouchableOpacity
            // accessibilityRole="button"
            // accessibilityState={isFocused ? { selected: true } : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            
            onPress={onPress}
            
            // onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text>{label}</Text>
            {/* <Animated.Text style={{ opacity }}>{label}</Animated.Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const TextBar=({navigation}) => (
  <Stack.Navigator
  headerMode="none"
  tabBarOptions={{
    showLabel : false,
    style:{
      width:0,
      height:0
    },
    tabStyle:{
      width:0,
      height:0
    }

  }}
  >
    <Stack.Screen name="Explore" component={Explore}></Stack.Screen>
  </Stack.Navigator>
  );
function BrowseBar({ state, descriptors, navigation, position }) {
  return (
    <TabTop.Navigator 
    activeTintColor = {colors.primary}
  tabBarIcon={{tintColor:colors.secondary}}
 
  // tabBarLabel= {{tintColor :colors.secondary}}
  tabBarOptions= {{
    activeTintColor: colors.secondary,
    inactiveTintColor: colors.gray,
    scrollEnabled: true,
    labelStyle: {
      fontSize: 14,
      // backgroundColor: colors
    }, 
  }}
    >
      <TabTop.Screen name={routes.EXPLORE} component={Explore}></TabTop.Screen>
      <TabTop.Screen name={routes.LASTEST} component={Lastest}></TabTop.Screen>
      <TabTop.Screen name={routes.AToZ} component={AToZ}></TabTop.Screen>
      <TabTop.Screen name={routes.GROCERIES} component={Groceries}></TabTop.Screen>
      <TabTop.Screen name={routes.PHARMACY} component={Pharmacy}></TabTop.Screen>
      <TabTop.Screen name="TextBar" component={TextBar}></TabTop.Screen>

    </TabTop.Navigator>
  );
}

// const BrowseBar = () => (
//   <Stack.Navigator
  
//   >
//     {/* <Stack.Screen name="Explore" component={Explore}></Stack.Screen>  */}
//     <Stack.Screen name="Lastest" component={LastestScreen}></Stack.Screen> 
//     <Stack.Screen name="Deals" component={DealsScreen}></Stack.Screen> 

//   </Stack.Navigator>
// );

// const BrowseBar = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Lastest" component={LastestScreen}></Tab.Screen>
//   </Tab.Navigator>
// )

export default BrowseBar;
