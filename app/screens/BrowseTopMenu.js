import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MenuButton from "../components/MenuButton";
import VerticalSeparator from "../components/VerticalSeparator";
import AppText from "../components/AppText";

export default function BrowseTopMenu() {
  const listTextMenus = [
    { name: "Explore" },
    { name: "Lastest" },
    { name: "A-Z" },
    { name: "Groceries" },
    { name: "Home & Garden" },
    { name: "Pharmacy" },
    { name: "General Merchant" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topIconContainer}>
        <MenuButton
          icon="account"
          containerStyle={{ alignItems: "flex-start", paddingLeft: 10 }}
        ></MenuButton>
        <Image
          style={styles.image}
          source={require("../assets/flipplogo2.png")}
        ></Image>
        <MenuButton
          icon="settings"
          containerStyle={{ alignItems: "flex-end", paddingRight: 10 }}
        ></MenuButton>
        {/* <MaterialCommunityIcons name="account"></MaterialCommunityIcons>
        <MaterialCommunityIcons></MaterialCommunityIcons> */}
      </View>
      <View style={styles.bottomIconContainer}>
        <MenuButton
          icon="heart"
          containerStyle={{
            alignItems: "flex-start",
            paddingLeft: 20,
            paddingRight: 10,
            flex: 0,
          }}
          size={20}
        ></MenuButton>
        <VerticalSeparator style={styles.verticalLine}></VerticalSeparator>
        <View style={styles.textButtonMenus}>
          <FlatList
            data={listTextMenus}
            keyExtractor={(textMenus) => textMenus.name}
            renderItem={({ item }) => (
              <AppText style={styles.textMenus}>{item.name}</AppText>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          ></FlatList>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // paddingLeft,
  },
  topIconContainer: {
    width: "100%",
    flexDirection: "row",
  },
  bottomIconContainer: {
    width: "100%",
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 60,
  },
  textButtonMenus: {
    flex: 1,
    // paddingLeft: 20,
    //
  },
  textMenus: {
    padding: 10,
    fontSize: 13,
    fontWeight: "bold",
  },

  verticalLine: {
    height: "50%",
  },
});
