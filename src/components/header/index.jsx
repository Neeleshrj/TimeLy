import React from 'react';
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";

export default function Header({text}){
    return(
        <Text h1 h1Style={styles.header}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    header: {
        color: '#000',
        fontWeight: 'normal'
    },
})