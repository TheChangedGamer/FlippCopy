import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MenuButton from "../../components/MenuButton";
import VerticalSeparator from "../../components/VerticalSeparator";
import AppText from "../../components/AppText";
import colors from "../../configs/colors";

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

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <AppText style={[styles.textMenus, style]}>{item.name}</AppText>
    </TouchableOpacity>
  );

  const [selectedName, setSelectedId] = useState(listTextMenus[0].name);
  //const renderItem = ({ item } = {});

  const renderItem = ({ item }) => {
    const color = item.name === selectedName ? colors.secondary : colors.gray;
    // console.log(item.name);
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.name)}
        style={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topIconContainer}>
        <MenuButton
          icon="account"
          containerStyle={{
            flex: 1,
            alignItems: "flex-start",
            paddingLeft: 10,
          }}
        ></MenuButton>
        <Image
          style={styles.image}
          source={require("../../assets/flipplogo2.png")}
        ></Image>
        <MenuButton
          icon="settings"
          containerStyle={{
            flex: 1,
            width: 10,
            alignItems: "flex-end",
            paddingRight: 10,
          }}
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
          }}
          size={20}
        ></MenuButton>
        <VerticalSeparator style={styles.verticalLine}></VerticalSeparator>
        <View style={styles.textButtonMenus}>
          <FlatList
            data={listTextMenus}
            keyExtractor={(textMenus) => textMenus.name}
            // renderItem={({ item }) => (
            //   <AppText style={styles.textMenus}>{item.name}</AppText>
            // )}
            renderItem={renderItem}
            extraData={selectedName}
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
    width: 70,
    height: 40,
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
    color: colors.gray,
  },

  verticalLine: {
    height: "50%",
  },
});
