import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import React from "react";

export default function Setting() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>ตั้งค่า</Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push({
            pathname: "/auth",
          });
        }}
      >
        <Text style={styles.textLogin}>login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },
  text: {
    fontFamily: "Kanit-Regular",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 12,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "black",
  },
  textLogin: {
    color: "white",
    fontFamily: "Kanit-Regular",
  },
});
