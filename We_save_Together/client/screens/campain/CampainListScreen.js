//캠페인 검색창 및 목록이 표시되는 화면입니다.

import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CampainListScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Text>캠페인 검색창 및 리스트 화면입니다.</Text>
            <Pressable
                onPress={() => navigation.navigate('LoadingScreen')}>
                <Text>go to Loading screen</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.goBack()}>
                <Text>뒤로가기 버튼</Text>
            </Pressable>
        </SafeAreaView>
    )
}