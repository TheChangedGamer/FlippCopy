import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HorizontalSeparator from "../../components/HorizontalSeparator";
import MenuButton from "../../components/MenuButton";

import colors from "../../configs/colors";
import BrowseTopMenu from "./BrowseTopMenu";
// import Explore from "./Explore";
import BrowseBar from "../../navigation/BrowseBar";


export default function BrowseScreen() {
  return (

      <NavigationContainer 
      independent={true}
      // initialRouteName="Deals"
      >
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

        </View>
        </View>
        <BrowseBar></BrowseBar>
      </NavigationContainer>

  );
}
// export default function BrowseScreen() {
//   return (
//     <View>
//        <BrowseTopMenu></BrowseTopMenu>
//       <HorizontalSeparator></HorizontalSeparator>
//       {/* <Explore></Explore> */}

//       <NavigationContainer 
//       independent={true}
//       initialRouteName="Deals">
//         <BrowseBar></BrowseBar>
//       </NavigationContainer>
  
//     </View>
//   );
// }

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: "row",
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
    container: {
      backgroundColor: colors.white
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
});
