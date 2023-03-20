/** 소셜 로그인 화면 */

/** library */
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/** styles */
import styles from "./styles";

/** Image resource */
const CodeforDCU_Tree = require('../../assets/resource/loading.png')
const kakaoSocial_standard = require('../../assets/resource/kakaoSocial.png')
const naverSocial_standard = require('../../assets/resource/naverSocial.png')

export default function SocialSignInScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.CodeforDCU_Tree}
                source={CodeforDCU_Tree}
            />
            <Text style={styles.signInWith}>Sign In with :</Text>
            <Pressable onPress={() => { navigation.push('WaitAlter_Screen') }}>
                <Image
                    style={styles.kakaoSocial_standard}
                    source={kakaoSocial_standard}
                />
            </Pressable>
            <Pressable onPress={() => { navigation.push('WaitAlter_Screen') }}>
                <Image
                    style={styles.naverSocial_standard}
                    source={naverSocial_standard}
                />
            </Pressable>
            <View style={styles.signContainer}>
                <Pressable onPress={() => { navigation.push('SignIn_Screen') }} style={styles.signIn_pressable}>
                    <Text style={styles.signIn}>Sign In</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.push('WaitAlter_Screen') }} style={styles.signUp_pressable}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}