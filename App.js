import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-web";
import Square from './Components/Square';

export default function App() {
return (
    <View style={StyleSheet.container}>
        <Text>Whack-A-Mole App</Text>
        <View style={style.game}>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </View>
    </View>
);

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
