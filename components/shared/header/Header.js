import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  const [showInput, setShowInput] = useState(true);
  const inputHandler = () => {
    setShowInput(!showInput);
  };
  return (
    <View style={styles.header}>
      <View style={styles.container_xl}>
        <View style={styles.logo}>
          <FontAwesome5 name="mastodon" size={26} color="#FBB875" />
          <Text style={styles.name}>TodoApp</Text>
        </View>
        <AntDesign
          name="pluscircleo"
          size={24}
          color="#AEB1BB"
          onPress={inputHandler}
        />
      </View>
      {showInput && (
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            placeholder="What are you doing today 😎?"
            placeholderTextColor={"#AEB1BB"}
          />
        </View>
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
});

export default Header;
