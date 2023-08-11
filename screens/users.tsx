import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native"

const Users = ({ navigation, route }: any) => {
    const [count, setCount] = useState(5)
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
    };


    useEffect(() => { getUsers() }, [])

    console.log(users);
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>This is {route.params.users.name}</Text>
            <Text>Phone Number {route.params.users.phone}</Text>
            <View style={{ marginTop: 20, flexDirection: "row", gap: 10 }}>
                <Pressable style={{ backgroundColor: "green", borderRadius: 6, padding: 8 }} onPress={() => setCount(count + 1)}>
                    <Text style={{ color: "#fff", fontSize: 24 }}>Plus</Text>
                </Pressable>
                <Pressable style={{ backgroundColor: "red", borderRadius: 6, padding: 8, pointerEvents: count <= 0 ? "none" : "auto" }} onPress={() => setCount(count - 1)}>
                    <Text style={{ color: "#fff", fontSize: 24 }}>Minus</Text>
                </Pressable>
            </View>
            <Text style={{ marginTop: 15 }}>{count}</Text>
            {users.map(item => (
                // @ts-ignore
                <Text key={item.id}>{item?.name}</Text>
            ))}

        </View>
    )
}



export default Users