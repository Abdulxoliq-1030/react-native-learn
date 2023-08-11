import React from "react";
import { Text, View, StyleSheet } from "react-native"


type greatProps = {
    name: string;
}




const Great = ({ name }: greatProps) => {
    return (
        <View style={[styles.center, { top: 10 }]}>
            <Text>Hello {name}!</Text>
        </View>
    )
}



export default Great;

const styles = StyleSheet.create({
    center: {
        alignItems: "center",

    }
})