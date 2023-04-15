//내 정보 수정 화면입니다.
import { Pressable, Text, View, TextInput,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React  from "react";


/**스타일 */
import styles from "./style";
//* 아이콘
import { AntDesign } from '@expo/vector-icons'; 

function Separator() {
    return <View style = {styles.separator}/>
  }

export default function UpdateMyInfoScreen({ navigation }) {
    return (       
        <SafeAreaView style={styles.container}>   

            <View style={styles.Box2}>
                <TouchableOpacity 
                    onPress={() => { navigation.pop() }}>
                    <AntDesign name="leftcircleo" size={30} color="black" />
                </TouchableOpacity>
            </View>   

            <AntDesign name="meh" size={150} color="black" />
            


            <View style={styles.Box1}>
                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>Name</Text>
                    </View>
                    <TextInput
                        style={styles.Text_input}
                        placeholder={"  " + "이름"}
                    />
                </View>

                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>ID</Text>
                    </View>
                    <TextInput
                        style={styles.Text_input}
                        placeholder={"  " + "ID"}
                    />
                </View>

                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>주소</Text>
                    </View>
                    <TextInput
                        style={styles.Text_input}
                        placeholder={"  " + "주소"}
                    />
                </View>

                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>Email</Text>
                    </View>
                    <TextInput
                        style={styles.Text_input}
                        placeholder={"  " + "Email"}
                    />
                </View>
                
                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>Phone</Text>
                    </View>
                    <TextInput
                        style={styles.Text_input}
                        placeholder={"  " + "Phone"}
                    />
                </View>               
            </View>

            <Separator/>

            <View style={styles.Edit}>
                <Pressable 
                onPress={() => { navigation.reset({ routes: [{ name: 'MyInfo_Screen' }] }) }} 
                style={styles.signIn_pressable}>
                    <Text style={styles.signIn}>완료</Text>
                </Pressable>
            </View>
            
           
        </SafeAreaView>
    )
}