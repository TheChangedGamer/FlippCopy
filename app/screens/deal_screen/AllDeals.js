import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function AllDeals({navigation}) {
    return (
        <View>
            <Text>AllDeals</Text>
            <Button title = "Press" onPress={() =>navigation.navigate("Coupons")}>Press</Button>
        </View>
    )
}

const styles = StyleSheet.create({})
