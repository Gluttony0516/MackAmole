import React from "react";
import { View, StyleSheet } from "react-native";


const Square = () => {
return (
    <View style={StyleSheet.square}></View>
    )
     

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    game: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,

}
});