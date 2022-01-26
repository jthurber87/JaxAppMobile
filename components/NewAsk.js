import { Text, TextInput } from 'react-native';
import React, {useEffect} from 'react'

export default function NewAsk (props) {

    const [text, setText] = React.useState()

    useEffect(() => {
      console.log(text);
    }, [text]);
    

    return (
        <>
            <TextInput 
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
        </> 
    )
}