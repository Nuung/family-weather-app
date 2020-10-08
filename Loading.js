import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text> Get The Weather </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30, // react 에서만 쓰는 CSS 속성 
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2C2C2C",
        fontSize: 30 // px를 붙이면 string 값이기 때문에 "" 를 붙여야 함
    }
});