//내 정보 수정 화면입니다.
import { Pressable, Text, View, TextInput,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import React, { useRef, useState, useContext, useEffect } from 'react';
import { CredentialsContext } from "../../components/CredentialsContext";


/**스타일 */
import styles from "./style";

import axios from 'axios';

import{ 
    Avatar_Edit
} from '../../components/styles';

import MyProfileImage from '../../components/MyProfileImage';

//* 아이콘
import { AntDesign } from '@expo/vector-icons'; 

function Separator() {
    return <View style = {styles.separator}/>
  }

export default function UpdateMyInfoScreen({ navigation }) {
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const {user_id, name, email, address, phoneNumber} = storedCredentials;
    const [changed_name, setChangeName] = useState("");
    const [changed_address, setChangeAddress] = useState("");
    const [changed_email, setChangeEmail] = useState("");
    const [changed_phoneNumber, setChangephoneNumber] = useState("");
    const [avatar_image,  setPhoto] = useState(undefined);
    function update() {
        const url = 'http://192.168.45.169:5000/api/users/updateUser' //(locahhost -> 로컬 와이파이 주소)
        const formData = new FormData();
        const file = {

        }
        formData.append('avatar_image', avatar_image);
        axios
        .post(url, 
            {
                "user_id" : user_id,
                "changed_name" : changed_name,
                "changed_address" : changed_address,
                "changed_email" : changed_email,
                "changed_phoneNumber" : changed_phoneNumber,
                "changed_img" : formData,
                "headers" : { 'Content-type': 'multipart/form-data'},
                "imageData" : avatar_image
            }        
        )
        .then((response) => {

        })
        .catch(error => {

        })
      }

    return (       
        <SafeAreaView style={styles.container}>   

            <View style={styles.Box2}>
                <TouchableOpacity 
                    onPress={() => { navigation.navigate('MyInfoScreen')}}>
                    <AntDesign name="leftcircleo" size={30} color="black" />
                </TouchableOpacity>
            </View>   

            <MyProfileImage url={avatar_image} onChangePhoto={setPhoto}/>
            


            <View style={styles.Box1}>
                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>Name</Text>
                    </View>
                    <TextInput
                        style={styles.Text_input}
                        onChangeText={text=>setChangeName(text)}
                        placeholder={"  " + "이름"}
                    />
                </View>

                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>주소</Text>
                    </View>
                    <TextInput
                        style={styles.Text_input}
                        onChangeText={text=>setChangeAddress(text)}
                        placeholder={"  " + "주소"}
                    />
                </View>

                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>Email</Text>
                    </View>
                    <TextInput
                        style={styles.Text_input}
                        onChangeText={text=>setChangeEmail(text)}
                        placeholder={"  " + "Email"}
                        keyboardType="email-address"
                    />
                </View>
                
                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>Phone</Text>
                    </View>
                    <TextInput
                        style={styles.Text_input}
                        onChangeText={text=>setChangephoneNumber(text)}
                        placeholder={"  " + "Phone"}
                    />
                </View>               
            </View>

            <Separator/>

            <View style={styles.Edit}>
                <Pressable 
                onPress={() => { update(); navigation.reset({routes: [{name: 'MyInfoScreen'}]}) }} 
                style={styles.signIn_pressable}>
                    <Text style={styles.signIn}>완료</Text>
                </Pressable>
            </View>
            
           
        </SafeAreaView>
    )
}