import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoItem from "./TodoItem";

const TaskView = () => {
  const data = [
    {
      key: "1",
      content: "Cook my meal",
    },
    {
      key: "2",
      content: "Cook my meal",
    },
    {
      key: "3",
      content: "Cook my meal",
    },
    {
      key: "4",
      content: "Cook my meal",
    },
  ];
  const [todos, setTodos] = useState(data);
  const clickHandler = (key) => {
    setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key)
    })
  }
  return (
    <View style={styles.container_xl}>
      <View style={styles.section_header}>
        <Text style={styles.tasks}>Tasks</Text>
        <Text style={styles.view}>View more</Text>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} clickHandler={clickHandler}/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container_xl: {
    paddingHorizontal: 20,
  },
  section_header: {
    marginTop: 50,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tasks: {
    color: "#fff",
    fontSize: 20,
  },
  view: {
    color: "#AEB1BB",
    fontSize: 12,
  },
  box: {
    borderColor: "#282A32",
    borderWidth: 1,
    padding: 15,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
  },
});

export default TaskView;
