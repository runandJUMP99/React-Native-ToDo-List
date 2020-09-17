import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, View,} from 'react-native';

import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [toDoList, setToDoList] = useState([]);

  function handleDelete(toDoId) {
    setTimeout(() => {
      setToDoList(toDoList.filter((toDo, index) => toDoId !== index));
    }, 15);
  }

  function handleModal() {
    setShowModal(prevValue => !prevValue);
  }

  function handleSubmit(toDo) {
    if (toDo.length === 0) {
      return;
    }
    
    setToDoList(prevList => [...prevList, toDo]);
    setShowModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add To Do" onPress={handleModal} color="#2d4059"/>
      <AddToDo handleModal={handleModal} handleSubmit={handleSubmit} showModal={showModal}/>
      <ToDoList handleDelete={handleDelete} toDoList={toDoList} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ea5455',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  }
});
