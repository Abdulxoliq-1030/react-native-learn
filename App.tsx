import React, { useState } from 'react';
import { Button, View, StyleSheet, Pressable, Text, Image, ImageBackground } from 'react-native';
import Great from './components/great';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Great name='Abdulxoliq' />
      {/* <View style={styles.btnWrap}>
        <Pressable style={[styles.countBtn, { backgroundColor: "green" }]} onPress={() => setCount(count + 1)}>
          <Text style={styles.btnText}>Plus</Text>
        </Pressable>
        <Pressable style={[styles.countBtn, { backgroundColor: "red" }]} onPress={() => setCount(count - 1)}>
          <Text style={styles.btnText}>Minus</Text>
        </Pressable>
      </View>
      <Text style={{ marginTop: 20 }}>Count {count}</Text> */}

      {/* Local Image */}
      {/* <Image style={{ marginTop: 20, height: 200, width: "30%" }} source={require("./assets/images/image.jpg")} /> */}

      {/* Import from browser  */}
      {/* <Image style={{ marginTop: 20, height: 200, width: "30%", resizeMode: 'contain', }} source={{ uri: "https://media.istockphoto.com/id/1034587098/photo/tashkent-tv-tower-aerial-shot-during-sunset-in-uzbekistan.jpg?s=612x612&w=0&k=20&c=vos2bfAhLB8HuKgh91KnMkllxkZC6RYoXNt-F8Tz6Os=", cache: 'only-if-cached', }} /> */}

      <ImageBackground source={{ uri: "https://media.istockphoto.com/id/1034587098/photo/tashkent-tv-tower-aerial-shot-during-sunset-in-uzbekistan.jpg?s=612x612&w=0&k=20&c=vos2bfAhLB8HuKgh91KnMkllxkZC6RYoXNt-F8Tz6Os=" }} style={{ width: '100%', height: '100%', marginTop: "100%", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Inside</Text>
      </ImageBackground>

    </View>
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