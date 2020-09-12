import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";
import AppText from "./AppText";
export default function MenuButton({
  icon,
  style,
  name,
  color,
  containerStyle,
  size = 25,
}) {
  console.log({ icon }, { name }, { color });
  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialCommunityIcons
        name={icon}
        size={size}
        style={[styles.icon, style, colors[color]]}
        //color={colors[colors]}
      ></MaterialCommunityIcons>
      {name && <AppText style={styles.text}>{name}</AppText>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //width: "100%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "red",
    padding: 5,
    paddingHorizontal: 25,
    //flex: 1,
  },
  icon: {
    color: colors.gray,
  },
  text: {
    fontSize: 10,
    color: colors.gray,
  },
});
