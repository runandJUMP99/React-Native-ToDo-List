import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const ToDoList = (props) => {
    return (
        <View style={styles.list}>
            {props.toDoList.map((toDoItem, index) => {
                return (
                    <TouchableOpacity key={index}  onPress={() => props.handleDelete(index)}>
                        <View style={styles.listItems}>
                            <Text>{toDoItem}</Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        width: "100%"
    },
    listItems: {
        alignSelf: "center",
        backgroundColor: "#eee",
        borderColor: "black",
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        width: "70%"
    }
});

export default ToDoList;