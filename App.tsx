import React, { useState } from 'react';
import { Button, View, StyleSheet, Pressable, Text, Image, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Great from './components/great';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Profile from './screens/profile';
import Users from './screens/users';



const Stack = createNativeStackNavigator();

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="Profile"

            component={Profile}
            options={{ title: "Assalomu alaykum" }}

          />
          <Stack.Screen
            name="Users"
            component={Users}
            options={{ title: "How are you doing?" }}
          />
        </Stack.Navigator>
      </NavigationContainer></>

  );
};
export default App;





const styles = StyleSheet.create({
  btnWrap: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  },

  countBtn: {
    marginTop: 30,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  btnText: {
    color: "#fff"
  }
})