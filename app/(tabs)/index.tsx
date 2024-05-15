import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity
} from "react-native";

export default function HomeScreen() {
  let { height } = useWindowDimensions();
  let [number, setNumber] = useState(0);

  function handlePress() {
    setNumber(number++)
  }
  return (
    <SafeAreaView
      style={[styles.container, { height }, StyleSheet.absoluteFill]}
    >
      <Text>Random number: {number}</Text>
      <Text>Hight : {height}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Generate a number</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
