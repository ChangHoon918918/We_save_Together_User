/** 로그인 화면 */

/** library */
import { useState } from "react";
import { Image, Text, View, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/** Icon library */
import { Entypo } from '@expo/vector-icons';
/** react native icon이 작동을 안한다. 이걸로 두시간 증발.. 해결이 필요할듯하다.  임시로 위의 expo 아이콘 사용중 */
/** import FontAwesomeIcon from "react-native-vector-icons/FontAwesome" */

/** styles */
import styles from "./styles";

/** Image resource */
const CodeforDCU_Tree = require('../../assets/resource/loading.png')

export default function SignInScreen({ navigation }) {

    /** password show control */
    const [showPswd, setShowPswd] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.CodeforDCU_Tree}
                source={CodeforDCU_Tree}
            />
            <View style={styles.ID_view}>
                <View style={styles.ID}>
                    <Text style={styles.text_ID}>ID</Text>
                </View>
                <TextInput
                    style={styles.Input_ID}
                    placeholder={"  " + "ID Here"}
                />
            </View>
            <View style={styles.Pw_view}>
                <View style={styles.Pw}>
                    <Text style={styles.text_Pw}>Pw</Text>
                </View>
                <TextInput
                    style={styles.Input_Pw}
                    placeholder={"  " + "Password Here"}
                    secureTextEntry={showPswd}
                />
                {
                    (showPswd == true) ?
                        <Pressable onPress={() => setShowPswd(false)}>
                            <Entypo name="eye-with-line" size={24} color="black" style={styles.Pw_show_Icon} />
                        </Pressable> :
                        <Pressable onPress={() => setShowPswd(true)}>
                            <Entypo name="eye" size={24} color="black" style={styles.Pw_show_Icon} />
                        </Pressable>
                }
            </View>
            <View style={styles.signContainer}>
                <Pressable onPress={() => { navigation.reset({ routes: [{ name: 'Home_Screen' }] }) }} style={styles.signIn_pressable}>
                    <Text style={styles.signIn}>Sign In</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.push('WaitAlter_Screen') }} style={styles.signUp_pressable}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}