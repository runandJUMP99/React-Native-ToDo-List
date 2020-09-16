import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View,} from 'react-native';

export default function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function handleChange(enteredText) {
    setToDo(enteredText);
  }

  function handleSubmit() {
    setToDoList(prevList => [...prevList, toDo]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.input}>
        <TextInput onChangeText={handleChange} placeholder="Add To Do" value={toDo} />
      </View>
      <View style={styles.buttons}>
        <Button title="Add" onPress={handleSubmit} />
        <Button title="Cancel" />
      </View>
      <View>
        {toDoList.map(toDoItem => {
          return (
            <View style={styles.listItems}>
              <Text title={toDoItem} />
            </View>
          );
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    width: "50%"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5
  },
  listItems: {
    backgroundColor: "#eee",
    borderColor: "#ccc",
    marginVertical: "8"
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
