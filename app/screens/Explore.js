import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Card from "../components/Card";
import colors from "../configs/colors";

const messages = [
  {
    id: 1,
    title: "Lion",
    description: "Jean",
    imageItem: require("../assets/Jeans.jpeg"),
    imageIcon: require("../assets/lion.jpeg"),
  },
  {
    id: 2,
    title: "Le Thi Minh Trang",
    description: "Shirt",
    imageItem: require("../assets/shirt.jpeg"),
    imageIcon: require("../assets/myImage.jpg"),
  },
  {
    id: 3,
    title: "Amazon",
    description: "Books",
    imageItem: require("../assets/books.jpeg"),
    imageIcon: require("../assets/amazonicon.png"),
  },
  {
    id: 4,
    title: "Academy",
    description: "Fishing Rod",
    imageItem: require("../assets/fishingrod.jpeg"),
    imageIcon: require("../assets/academyicon.png"),
  },
];
export default function Explore({ text }) {
  return (
    // <View style={{ paddingBottom: 10 }}>
    <FlatList
      style={styles.container}
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          subtitle={item.description}
          imageItem={item.imageItem}
          imageIcon={item.imageIcon}
        />
      )}
    ></FlatList>
    //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 12,
    //paddingBottom: 200,
    paddingHorizontal: 10,
    //paddingVertical: 100,
    //backgroundColor: colors.grey,
  },
});
