import React, {useState} from "react";
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";

const AddToDo = (props) => {
    const [toDo, setToDo] = useState("");
 
    function handleCancel() {
        setToDo("");
        props.handleCancel();
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
                        <Button title="Add" onPress={handlePress} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={handleCancel}/>
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
      borderBottomColor: "black",
      borderBottomWidth: 1,
      marginHorizontal: 32,
      padding: 5,
      width: "80%"
    },
    modal: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    }
});

export default AddToDo;