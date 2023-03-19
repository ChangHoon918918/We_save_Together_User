import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginInput({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.container_vector}
                onPress={() => navigation.pop()}>
                <Image style={{ width: 10, height: 20 }} source={require('./images/vector.png')} />
            </TouchableOpacity>

            <ScrollView style={styles.scrollView}>
                <View style={{ marginTop: '25%', marginLeft: '5%' }}>
                    <Image source={require('./images/title_img.png')} />
                </View>

                <View style={{ marginTop: '15%', marginLeft: '10%' }}>
                    <Image source={require('./images/id_inputx1.png')} />
                    <TextInput style={{ position: 'absolute', marginLeft: '25%', marginTop: '3%' }} placeholder="아이디"/>
                </View>

                <View style={{ marginTop: '2%', marginLeft: '10%' }}>
                    <Image source={require('./images/pw_inputx1.png')} />
                    <TextInput style={{ position: 'absolute', marginLeft: '25%', marginTop: '3%' }} placeholder="패스워드"/>
                </View>

                <View style={{ marginTop: '5%', marginLeft: '10%', flexDirection: 'row', height: '8%', width: '83%'}}>
                    <TouchableOpacity style={styles.container_signIn} >
                        <Text style={{ fontSize: 10, color: "#000000" }}>sign in</Text>
                    </TouchableOpacity>

                    <View style={{marginTop: '30%'}}></View>

                    <TouchableOpacity style={styles.container_signUp} >
                        <Text style={{ fontSize: 10, color: "#000000" }}>sign up</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: '#fff',
        marginTop: 50,
    },
    text: {
        fontSize: 42,
    },

    container_vector: {

        position: 'absolute',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1%', height: '3%',
        left: '5%', top: '7%'
    },

    container_title_tree: {

        position: 'absolute',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%', height: '45%',
        left: '12%', top: '21%'
    },

    container_idInput: {

        position: 'absolute',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        left: '10%', top: '100%'
    },

    container_pwInput: {
        flex: 1,
        position: 'absolute',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        left: '10%', top: '81%'
    },

    textInput: {
        flex: 1,
        position: 'absolute',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container_signIn: {
        alignItems: 'center', 
        flex: 0.5,
        backgroundColor: '#AED0AF', 
        borderColor: "#7F9980", 
        borderWidth: 2, 
        borderRadius: 60, 
        justifyContent: 'center'
    },

    container_signUp: {
        marginLeft: '3%', 
        alignItems: 'center', 
        flex: 0.5, 
        backgroundColor: '#AED0AF', 
        borderColor: "#7F9980", 
        borderWidth: 2, 
        borderRadius: 60, 
        justifyContent: 'center'
    }
});
