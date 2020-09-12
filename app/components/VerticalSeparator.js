import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../configs/colors";

export default function VerticalSeparator({ style }) {
  return <View style={[styles.separator, style]} />;
}

const styles = StyleSheet.create({
  separator: {
    width: 1,
    height: "100%",
    backgroundColor: colors.light,
  },
});
