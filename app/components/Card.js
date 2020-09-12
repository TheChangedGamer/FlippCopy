import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import colors from "../configs/colors";
import { AntDesign } from "@expo/vector-icons";
export default function Card({ title, subtitle, imageItem, imageIcon }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageIcon}>
        <Image style={styles.image} source={imageIcon} />
        <View style={styles.userItem}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.reactionContainer}>
          <AntDesign
            style={styles.reaction}
            name="hearto"
            size={24}
            color="black"
          />
        </View>
      </View>
      <Image style={styles.imageItem} source={imageItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: "100%",
    // height: 100,
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
  },
  imageIcon: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  imageItem: {
    width: "100%",
    height: 200,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  reaction: {},
  reactionContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 15,
    right: 30,
  },
  userItem: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.blue,
  },
});
