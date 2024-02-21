import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ setTodos, clickHandler, showInput, inputHandler }) => {
  const [text, setText] = useState("");
  console.log(text)
  const handleChange = (val) => {
    setText(val);
  };
  const handleSubmit = () => {
    if (text.length < 5) {
      Alert.alert("Invalid Entry!!!", "Please enter at least 5 characters..", [
        { text: "Okay" },
      ]);
    } else {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { content: text, key: Math.random().toString() },
        ];
      });
    }
  };
  return (
    <View style={styles.header}>
      <View style={styles.container_xl}>
        <View style={styles.logo}>
          <FontAwesome5 name="mastodon" size={26} color="#FBB875" />
          <Text style={styles.name}>TodoApp</Text>
        </View>
        {showInput ? (
          <AntDesign
            name="minuscircleo"
            size={24}
            color="#AEB1BB"
            onPress={inputHandler}
          />
        ) : (
          <AntDesign
            name="pluscircleo"
            size={24}
            color="#AEB1BB"
            onPress={inputHandler}
          />
        )}
      </View>
      {showInput && (
        <>
          <View style={styles.input_container}>
            <TextInput
              onChangeText={(val) => handleChange(val)}
              style={styles.input}
              placeholder="What are you doing today 😎?"
              placeholderTextColor={"#AEB1BB"}
            />
          </View>
          <TouchableOpacity
            style={styles.button_container}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.add}>Add</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
  },
  name: {
    color: "#fff",
    fontSize: 22,
  },
  container_xl: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input_container: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  input: {
    borderColor: "#282A32",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
    color: "#fff",
  },
  button_container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#FBB875",
    marginHorizontal: 20,
    marginTop: 10,
    color: "#fff",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Header;
