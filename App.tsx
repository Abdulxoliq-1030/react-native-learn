import React, { useState } from 'react';
import { Button, View, StyleSheet, Pressable, Text } from 'react-native';
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
      <View style={styles.btnWrap}>
        <Pressable style={[styles.countBtn, { backgroundColor: "green" }]} onPress={() => setCount(count + 1)}>
          <Text style={styles.btnText}>Plus</Text>
        </Pressable>
        <Pressable style={[styles.countBtn, { backgroundColor: "red" }]} onPress={() => setCount(count - 1)}>
          <Text style={styles.btnText}>Minus</Text>
        </Pressable>
      </View>
      <Text style={{ marginTop: 20 }}>Count {count}</Text>
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