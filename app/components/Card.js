import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import colors from "../configs/colors";
import { AntDesign } from "@expo/vector-icons";
export default function Card({ title, subtitle, imageItem, imageIcon }) {
  // testing
  // console.log(subtitle);
  // if (subtitle) {
  // }
  console.log("sent the image uri", imageIcon);
  var imageIconUri;

  if (imageIcon != null || imageIcon == "") {
    imageIconUri = imageIcon;
  } else {
    imageIconUri =
      "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png";
  }
  // imageIconUri = {
  //   uri: imageIcon,
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconBar}>
        <Image style={styles.smallIconImage} source={{ uri: imageIconUri }} />
        <View style={styles.userItem}>
          <Text style={styles.title}>{title}</Text>
          {/* <Text style={styles.subtitle}>{subtitle}</Text> */}
          {/* <Text style={styles.subtitle}>{subtitle.items}</Text> */}
        </View>
        <View style={styles.reactionContainer}>
          <AntDesign
            style={styles.reaction}
            name="hearto"
            size={20}
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
  iconBar: {
    //backgroundColor: "orange",
    flexDirection: "row",

    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 15,
  },
  imageItem: {
    width: "100%",
    height: 175,
  },
  smallIconImage: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 35,
  },
  reaction: {},
  reactionContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",

    right: 15,
  },
  userItem: {
    //padding: 5,
    paddingLeft: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: colors.secondary,
  },
});
