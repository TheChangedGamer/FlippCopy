import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../configs/colors";

export default function HorizontalSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
