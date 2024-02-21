import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TodoItem from "./TodoItem";

const TaskView = ({ clickHandler, todos, inputHandler }) => {
  return (
    <View style={styles.container_xl}>
      <View style={styles.section_header}>
        <Text style={styles.tasks}>Tasks</Text>
        <Text style={styles.view}>View more</Text>
      </View>
      {todos.length < 1 ? (
        <>
          <Text style={styles.add_task}>
            You don't have any active Todo List, Please add one by tapping the
            button below?
          </Text>
          <TouchableOpacity
            style={styles.button_container}
            onPress={() => inputHandler()}
          >
            <Text style={styles.add}>Add Task</Text>
          </TouchableOpacity>
        </>
      ) : (
        <FlatList
          style={styles.list}
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} clickHandler={clickHandler} />
          )}
        />
      )}
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
  list: {
    // flex: 1,
  },
  add_task: {
    color: "#fff",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
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

export default TaskView;
