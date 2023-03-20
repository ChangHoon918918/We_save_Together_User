import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WaitAlterScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text1}>Comming Soon...</Text>
            <Pressable onPress={() => { navigation.goBack() }}>
                <Text style={styles.text2}>{'<'} Press Hear to Back {'>'}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text1: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 20,
        marginTop: 50,
    },
})