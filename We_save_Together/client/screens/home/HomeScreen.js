//홈 화면입니다.
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Text>홈 화면입니다.</Text>
            <Pressable
                onPress={() => navigation.openDrawer()}>
                <Text>opne Drawer button</Text>
            </Pressable>
        </SafeAreaView>
    )
}