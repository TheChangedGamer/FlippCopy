import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuButton from "./MenuButton";
export default function MenuBar() {
  return (
    <View style={styles.menuButtonContainer}>
      <MenuButton icon="tag" name="Browse"></MenuButton>
      <MenuButton icon="cash" name="Coupons"></MenuButton>
      <MenuButton icon="fire" name="Deals"></MenuButton>
      <MenuButton icon="table-search" name="Search"></MenuButton>
      <MenuButton icon="cart-outline" name="Shopping List"></MenuButton>
    </View>
  );
}

const styles = StyleSheet.create({
  menuButtonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
  },
});
