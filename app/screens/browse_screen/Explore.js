import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Card from "../../components/Card";
import colors from "../../configs/colors";

import listingsApi from "../../api/listings";
// import BrowseBar from "../navigation/BrowseBar";

const messages = [
  {
    id: 1,
    title: "Lion",
    description: "Jean",
    imageItem: require("../../assets/Jeans.jpeg"),
    imageIcon: require("../../assets/lion.jpeg"),
  },
  {
    id: 2,
    title: "Le Thi Minh Trang",
    description: "Shirt",
    imageItem: require("../../assets/shirt.jpeg"),
    imageIcon: require("../../assets/myImage.jpg"),
  },
  {
    id: 3,
    title: "Amazon",
    description: "Books",
    imageItem: require("../../assets/books.jpeg"),
    imageIcon: require("../../assets/amazonicon.png"),
  },
  {
    id: 4,
    title: "Academy",
    description: "Fishing Rod",
    imageItem: require("../../assets/fishingrod.jpeg"),
    imageIcon: require("../../assets/academyicon.png"),
  },
];
//Need to fix the paddingBottom
export default function Explore({ text }) {
  const [listings, setListing] = useState([]);
  //this effect should execute once when it first render
  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    // console.log(response.data[0].coupons[0].items[0].name);
    console.log(response.data[0].logo);

    setListing(response.data);
  };

  return (
    <View style={{}}>
      <FlatList
        style={styles.container}
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            subtitle={item.coupons[0]}
            imageItem={item.imageItem}
            imageIcon={item.logo}
          ></Card>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",

    paddingTop: 12,
    // paddingBottom: 200,
    //paddingVertical: 100,
    paddingHorizontal: 12,
    //backgroundColor: colors.grey,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,

    elevation: 22,
  },
});
