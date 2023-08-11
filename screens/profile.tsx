import React from "react";
import { Text, View, StyleSheet, Button } from "react-native"


const Profile = ({ navigation, route }: any) => {
    return (
        <View style={[styles.center, { top: 10 }]}>
            <Text>This is {route.params.name}</Text>
            <Button
                title="Go to Users page"
                onPress={() =>
                    navigation.navigate('Users', { users: { name: "Abdulxoliq", phone: "+998916771030" } })
                }
            />
        </View>
    )
}



export default Profile;

const styles = StyleSheet.create({
    center: {
        alignItems: "center",

    }
})