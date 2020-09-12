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
export default function App() {
  return (
    <Screen style={styles.container}>
      <BrowseTopMenu></BrowseTopMenu>
      <HorizontalSeparator></HorizontalSeparator>
      <Explore />
      <MenuBar></MenuBar>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
