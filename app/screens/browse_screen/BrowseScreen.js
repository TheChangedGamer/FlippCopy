import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HorizontalSeparator from "../../components/HorizontalSeparator";
import MenuButton from "../../components/MenuButton";

import colors from "../../configs/colors";
import BrowseTopMenu from "./BrowseTopMenu";
// import Explore from "./Explore";
import BrowseBar from "../../navigation/BrowseBar";


export default function BrowseScreen() {
  return (

      //<NavigationContainer 
     // independent={true}
     // initialRouteName="Deals">
     
        <BrowseBar></BrowseBar>
//</NavigationContainer>

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
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
