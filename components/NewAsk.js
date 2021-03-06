import { Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {useEffect} from 'react'

export default function NewAsk (props) {

    const [text, setText] = React.useState()

    useEffect(() => {
      console.log(text);
    }, [text]);
    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <TextInput 
                style={styles.input}
                editable
                maxLength={30}
                placeholder="Add an ask..."
                onChangeText={setText}
                value={text}
                onSubmitEditing={() => {
                    props.setAsks([...props.asks, {"request":text, "priority": "immediately"}]); 
                    setText("")
                }}
            />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 150,
        height:  50,
        textAlign: 'center',
        borderRadius: 5,
        color: "blue",
        marginTop: 20
    }
})