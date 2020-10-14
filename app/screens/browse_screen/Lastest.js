import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function LastestScreen({navigation}) {
  return (
    <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => console.log("help")}
          onPress={() => navigation.navigate("Deals")}
        >
          Loginin
        </Button>
        
      </View>
  );
}

const styles = StyleSheet.create({});
