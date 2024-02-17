import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/shared/header/Header";
import TaskView from "./components/shared/home/TaskView";

export default function App() {
  const [people, setPeople] = useState([
    {
      name: "David",
      id: "1"
    },
    {
      name: "David",
      id: "2"
    },
    {
      name: "David",
      id: "3"
    },
    {
      name: "David",
      id: "4"
    },
    {
      name: "David",
      id: "5"
    },
    {
      name: "David",
      id: "6"
    }
  ]);
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#19191A"
        barStyle={'default'}
        hidden={false}
      />
      <Header/>
      <TaskView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19191A",
    fontFamily: "sans-serif",
    width: "100%"
  },
});
