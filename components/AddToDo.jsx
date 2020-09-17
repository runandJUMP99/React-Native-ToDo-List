import React, {useState} from "react";
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";

const AddToDo = (props) => {
    const [toDo, setToDo] = useState("");
 
    function handleCancel() {
        props.handleModal();
        setToDo("");
    }
    
    function handleChange(enteredText) {
        setToDo(enteredText);
    }

    function handlePress() {
        props.handleSubmit(toDo);
        setToDo("");
    }

    return (
        <Modal animationType="slide" visible={props.showModal}>
            <View style={styles.modal}>
                <TextInput onChangeText={handleChange} placeholder="To Do" value={toDo} style={styles.input}/>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title="Add" onPress={handlePress} color="#decdc3" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={handleCancel} color="#ea5455" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "40%"
    },
    buttons: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginHorizontal: 32,
      marginTop: 16,
      width: "80%"
    },
    input: {
      borderBottomColor: "#e5e5e5",
      borderBottomWidth: 1,
      color: "#e5e5e5",
      marginHorizontal: 32,
      padding: 5,
      width: "80%"
    },
    modal: {
        alignItems: "center",
        backgroundColor: "#2d4059",
        flex: 1,
        justifyContent: "center",
    }
});

export default AddToDo;