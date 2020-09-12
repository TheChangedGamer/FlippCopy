import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constant from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={style}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: Constant.statusBarHeight,
    flex: 1,
  },
});
