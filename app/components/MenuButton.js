import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppText from "./AppText";
export default function MenuButton({
  icon,
  style,
  name,
  containerStyle,
  size = 25,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialCommunityIcons
        name={icon}
        size={size}
        // color = {colors.black}
        style={styles.icon}
      ></MaterialCommunityIcons>
      {name && <AppText style={styles.text}>{name}</AppText>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
    padding: 5,
  },
  icon: {
    color: colors.gray,
  },
  text: {
    fontSize: 10,
    color: colors.gray,
  },
});
