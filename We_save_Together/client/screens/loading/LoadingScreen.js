/** 
 * 앱 실행시 나타나는 로딩화면입니다.
 * 최초에는 시간이 흐르면 넘어가게 해두고 나중에는 로딩이 완료되어 서버로부터 시그널을 받으면 넘어가게 구현합니다.
 */ 

/** library */
import { useEffect } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/** styles */
import styles from "./styles";

/** Image resource */
const paperAirplane = require('../../assets/resource/paper.gif')
const CodeforDCU_Tree = require('../../assets/resource/loading.png')


export default function LoadingScreen ({ navigation }) {
    useEffect(() => {
        /** 3초가 지나면 SignIn_Screen으로 navigation 한다. 이때 스택은 초기화한다. */
        setTimeout(() => { navigation.reset({routes: [{name: 'Social_SignIn_Screen'}]}) }, 3000);
    })

    return (
        <SafeAreaView style={styles.container}>
                <Image
                    style={styles.paperAirplane}
                    source={paperAirplane} 
                    />
                <Image
                    style={styles.CodeforDCU_Tree}
                    source={CodeforDCU_Tree} 
                    />
        </SafeAreaView>
    )
}