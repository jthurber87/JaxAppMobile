import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Asks (props) {

    let askList = props.asks.map(ask => {
        return(
            <TouchableOpacity onPress={() => alert("Pressed!")}>
                <Text style={styles.ask}>{ask.request}</Text>
            </TouchableOpacity>
        )
    })

    return (
        <>
            <Text>Asks:</Text>
            {askList}
        </>
    )
}

const styles = StyleSheet.create({
    ask: {
        margin: 5,
        fontSize: 25
    }
})