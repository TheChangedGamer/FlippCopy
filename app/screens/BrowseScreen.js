import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuButton from "../components/MenuButton";

import colors from "../configs/colors";

export default function BrowseScreen() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
