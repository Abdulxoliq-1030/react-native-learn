import React from "react";
import { View, StyleSheet, Button } from "react-native"
import Great from "../components/great";





const Home = ({ navigation }: any) => {
    return (
        <View style={[styles.center, { top: 10 }]}>
            <Great name="Abdulxoliq" />
            <Button
                title="Go to Abdulxoliq's profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Abdulxoliq' })
                }
            />
        </View>
    )
}



export default Home;

const styles = StyleSheet.create({
    center: {
        alignItems: "center",

    }
})