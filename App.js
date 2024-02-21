import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./components/shared/header/Header";
import TaskView from "./components/shared/home/TaskView";

export default function App() {
  const data = [];
  const [todos, setTodos] = useState(data);
  console.log(todos);
  const clickHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const [showInput, setShowInput] = useState(false);
  const inputHandler = () => {
    setShowInput(!showInput);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#19191A"
          barStyle={"default"}
          hidden={false}
        />
        <Header
          showInput={showInput}
          clickHandler={clickHandler}
          setTodos={setTodos}
          inputHandler={inputHandler}
        />
        <TaskView
          clickHandler={clickHandler}
          todos={todos}
          inputHandler={inputHandler}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19191A",
    fontFamily: "sans-serif",
    width: "100%",
  },
});
