import React from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const ToDoList = (props) => {
    return (
        <ScrollView style={styles.list}>
            {props.toDoList.map((toDoItem, index) => {
                return (
                    <TouchableOpacity key={index}  onPress={() => props.handleDelete(index)}>
                        <View style={styles.listItems}>
                            <Text style={styles.text}>{toDoItem}</Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    list: {
        width: "100%"
    },
    listItems: {
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 5,
        fontWeight: "bold",
        marginVertical: 10,
        padding: 10,
        shadowColor: "black",
        shadowOffset: {
            height: 5,
            width: 0
        },
        shadowOpacity: 0.5,
        width: "70%"
    },
    text: {
        color: "#ea5455",
        fontWeight: "bold"
    }
});

export default ToDoList;