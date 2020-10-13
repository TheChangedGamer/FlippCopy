import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HorizontalSeparator from "./app/components/HorizontalSeparator";
import MenuBar from "./app/components/MenuBar";
import MenuButton from "./app/components/MenuButton";
import BrowseScreen from "./app/screens/BrowseScreen";
import BrowseTopMenu from "./app/screens/BrowseTopMenu";
import Screen from "./app/screens/Screen";
import Explore from "./app/screens/Explore";

import colors from "./app/configs/colors";
import NavigationBar from "./app/navigation/NavigationBar";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <Screen style={styles.container}>
      <NavigationContainer>
        <NavigationBar></NavigationBar>
      </NavigationContainer>
    </Screen>
  );
}
/* 
 <BrowseTopMenu></BrowseTopMenu>
      <HorizontalSeparator></HorizontalSeparator>
      <View
        style={{
          //height: "80%",
          paddingHorizontal: 10,
          marginBottom: 120,
          backgroundColor: colors.light,
        }}
      >
        <Explore />
      </View>
      <MenuBar></MenuBar> */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    //backgroundColor: "#000",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
