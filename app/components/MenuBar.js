import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import MenuButton from "./MenuButton";

import colors from "../configs/colors";

const listMenuButton = [
  { icon: "tag", name: "Browse" },
  { icon: "cash", name: "Coupons" },
  { icon: "fire", name: "Deals" },
  { icon: "table-search", name: "Search" },
  { icon: "cart-outline", name: "Shopping List" },
];
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <MenuButton
      style={[styles.menuButton, style]}
      color={style.color}
      icon={item.icon}
      name={item.name}
    >
      {item.name}
    </MenuButton>
  </TouchableOpacity>
);

export default function MenuBar() {
  const [selectedButton, setSelectedButton] = useState(listMenuButton[0].icon);
  const renderItem = ({ item }) => {
    const color = item.icon === selectedButton ? colors.secondary : colors.gray;
    // console.log(item.name);
    return (
      <Item
        item={item}
        onPress={() => setSelectedButton(item.icon)}
        style={{ color }}
      />
    );
  };
  return (
    <View style={styles.menuButtonContainer}>
      <FlatList
        data={listMenuButton}
        keyExtractor={(menuButton) => menuButton.icon}
        renderItem={renderItem}
        // renderItem={({ item }) => (
        //   <MenuButton
        //     icon={item.icon}
        //     name={item.name}
        //     containerStyle={styles.menuButton}
        //   ></MenuButton>
        // )}
        horizontal
        //numColumns={1}
        //columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={styles.list}
        scrollEnabled={false}
      ></FlatList>
      {/* <MenuButton icon="tag" name="Browse"></MenuButton>
      <MenuButton icon="cash" name="Coupons"></MenuButton>
      <MenuButton icon="fire" name="Deals"></MenuButton>
      <MenuButton icon="table-search" name="Search"></MenuButton>
      <MenuButton icon="cart-outline" name="Shopping List"></MenuButton> */}
    </View>
  );
}

const styles = StyleSheet.create({
  menuButtonContainer: {
    position: "absolute",
    bottom: 0,
    //width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
    // backgroundColor: "yellow",
    justifyContent: "space-evenly",
    // alignItems: "stretch",
    // alignContent: "stretch",
    //aspectRatio: 1,
    //height: 60,
    // width: "100%",
  },
  menuButton: {
    //paddingHorizontal: 15,
    fontSize: 30,
    color: colors.gray,
  },
});
{
  /* <FlatList
        data={listMenuButton}
        keyExtractor={(menuButton) => menuButton.icon}
        renderItem={({ item }) => (
          <MenuButton
            icon={item.icon}
            name={item.name}
            containerStyle={{ alignItems: "flex-start", paddingLeft: 10 }}
          ></MenuButton>
        )}
        horizontal
        style={styles.list}
      ></FlatList> */
}
