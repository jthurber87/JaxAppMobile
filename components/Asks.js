import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Asks ({asks, setAsks}) {

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
        return(
            <TouchableOpacity 
                key={index}
                style={styles.button} 
                onPress={() => alert(`${ask.request} pressed!`)}
                onLongPress={() => createTwoButtonAlert(ask, setAsks)
                    
                    
                }
                >
                <Text style={styles.text}>{ask.request}</Text>
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
    text: {
        margin: 5,
        fontSize: 20,
        color: "white"
    },
    button: {
        width: 150,
        height: 50, 
        backgroundColor: "blue",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5
    }
})