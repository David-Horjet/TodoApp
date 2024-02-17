import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const TodoItem = ({ item, clickHandler }) => {
  // console.log(item)
  return (
    <TouchableOpacity onPress={() => clickHandler(item?.key)}>
      <View style={styles.box}>
        <Text style={styles.tasks_content}>{item?.content}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor: "#282A32",
    borderWidth: 1,
    padding: 15,
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
  tasks_content: {
    color: "#AEB1BB",
    fontSize: 16,
  },
});

export default TodoItem;
