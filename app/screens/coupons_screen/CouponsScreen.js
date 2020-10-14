import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState } from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import AppText from "../../components/AppText";
// import BrowseTopMenu from "./BrowseTopMenu";
import DealsScreen from "../deal_screen/DealsScreen";
import Lastest from "../browse_screen/Lastest";
import colors from "../../configs/colors";
import MenuButton from "../../components/MenuButton";
import VerticalSeparator from "../../components/VerticalSeparator";


// const Tab = createBottomTabNavigator();
// const TabTop = createMaterialTopTabNavigator();


// function BrowseTopMenu() {
//   const listTextMenus = [
//     { name: "Explore" },
//     { name: "Lastest" },
//     { name: "A-Z" },
//     { name: "Groceries" },
//     { name: "Home & Garden" },
//     { name: "Pharmacy" },
//     { name: "General Merchant" },
//   ];

//   const Item = ({ item, onPress, style }) => (
//     <TouchableOpacity onPress={onPress} style={[styles.item]}>
//       <AppText style={[styles.textMenus, style]}>{item.name}</AppText>
//     </TouchableOpacity>
//   );

//   const [selectedName, setSelectedId] = useState(listTextMenus[0].name);
//   //const renderItem = ({ item } = {});

//   const renderItem = ({ item }) => {
//     const color = item.name === selectedName ? colors.secondary : colors.gray;
//     // console.log(item.name);
//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.name)}
//         style={{ color }}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.topIconContainer}>
//         <MenuButton
//           icon="account"
//           containerStyle={{
//             flex: 1,
//             alignItems: "flex-start",
//             paddingLeft: 10,
//           }}
//         ></MenuButton>
//         <Image
//           style={styles.image}
//           source={require("../../assets/flipplogo2.png")}
//         ></Image>
//         <MenuButton
//           icon="settings"
//           containerStyle={{
//             flex: 1,
//             width: 10,
//             alignItems: "flex-end",
//             paddingRight: 10,
//           }}
//         ></MenuButton>
//         {/* <MaterialCommunityIcons name="account"></MaterialCommunityIcons>
//         <MaterialCommunityIcons></MaterialCommunityIcons> */}
//       </View>
//       <View style={styles.bottomIconContainer}>
//         <MenuButton
//           icon="heart"
//           containerStyle={{
//             alignItems: "flex-start",
//             paddingLeft: 20,
//             paddingRight: 10,
//           }}
//           size={20}
//         ></MenuButton>
//         <VerticalSeparator style={styles.verticalLine}></VerticalSeparator>
//         <View style={styles.textButtonMenus}>
//           <FlatList
//             data={listTextMenus}
//             keyExtractor={(textMenus) => textMenus.name}
//             // renderItem={({ item }) => (
//             //   <AppText style={styles.textMenus}>{item.name}</AppText>
//             // )}
//             renderItem={renderItem}
//             extraData={selectedName}
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//           ></FlatList>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // width: "100%",
//     // paddingLeft,
//   },
//   topIconContainer: {
//     width: "100%",
//     flexDirection: "row",
//   },
//   bottomIconContainer: {
//     width: "100%",
//     flexDirection: "row",
//     //justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: 70,
//     height: 40,
//   },
//   textButtonMenus: {
//     flex: 1,
//     // paddingLeft: 20,
//     //
//   },
//   textMenus: {
//     padding: 10,
//     fontSize: 13,
//     fontWeight: "bold",
//     color: colors.gray,
//   },

//   verticalLine: {
//     height: "50%",
//   },
// });


// function MyTabBar({ state, descriptors, navigation, position }) {
//   return (
//     <View>
//       <BrowseTopMenu></BrowseTopMenu>
//       <Text>hello good morning</Text>
//     </View>
//   );
// }
export default function CouponsScreen({ state, descriptors, navigation, position }) {
  return (
    // <TabTop.Navigator tabBar={props => <MyTabBar{...props}/>}>
    //   <TabTop.Screen name="Lastest" component={Lastest}></TabTop.Screen>
    //   <TabTop.Screen name="Deals" component={DealsScreen}></TabTop.Screen>
    
    // </TabTop.Navigator>
    <View><Text>Coupons</Text></View>
  );
}


