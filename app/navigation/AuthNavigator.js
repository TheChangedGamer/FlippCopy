import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import BrowseScreen from "../screens/BrowseScreen";
import CouponsScreen from "../screens/CouponsScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Browse" component={BrowseScreen} />

    <Stack.Screen name="Coupons" component={CouponsScreen} />
  </Stack.Navigator>
);
export default AuthNavigator;
