import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";

type Props = {
  message: string;
};
type State = {
  password: any;
  username: any;
};
class Login extends React.Component<Props, State> {
  state: State = {
    password: "",
    username: "",
  };

  setInputUser = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    this.setState({ username: e.nativeEvent.text });
  };
  setInputPassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    this.setState({ password: e.nativeEvent.text });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {this.state.username !== "" && (
            <Text>user : {this.state.username}</Text>
          )}
          {this.state.password !== "" && (
            <Text>password : {this.state.password}</Text>
          )}
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChange={this.setInputUser}
            placeholder="ชื่อผู้ใช้..."
          />
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChange={this.setInputPassword}
            placeholder="รหัสผ่าน..."
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push({
              pathname: "/",
            });
          }}
        >
          <Text style={styles.textLogin}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    margin: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
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

export default Login;
