import { KeyboardAvoidingView, Text, TouchableOpacity, StyleSheet, Alert, View } from 'react-native';

export default function Asks({ asks, setAsks }) {

    const createTwoButtonAlert = (ask, deleteAsk) =>
        Alert.alert(
            "Delete",
            `Are you sure you want to delete ${ask.request.toLowerCase()}?`,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed")
                },
                {
                    text: "Delete",
                    onPress: () => {
                        const newArray = asks.filter(eachAsk => eachAsk.request !== ask.request)
                        deleteAsk(newArray)
                    }
                }
            ]
        );

    const askList = asks.map((ask, index) => {
        return (
            <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => alert(`${ask.request} pressed!`)}
                onLongPress={() => createTwoButtonAlert(ask, setAsks)}
            >
                <Text style={styles.text}>{ask.request}</Text>
            </TouchableOpacity>
        )
    })

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.askList}>
                {askList}
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    text: {
        margin: 5,
        fontSize: 20,
        color: "white",
        fontFamily: "AvenirNext-Regular"
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: "blue",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 5
    },
    askList: {
        width: "100%",
        display: "flex",
        justifyContent: 'center',
        flexWrap: "wrap",
        flexDirection: 'row'
    }
})