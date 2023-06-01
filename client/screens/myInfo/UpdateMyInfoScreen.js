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
const server_url = 'http://192.168.0.6';

function Separator() {
    return <View style = {styles.separator}/>
  }

export default function UpdateMyInfoScreen({ navigation }) {
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const {user_id, name, email, address, phoneNumber} = storedCredentials;
    const [user_infolist, setInfoData] = useState([]);
    const [changed_name, setChangeName] = useState("");
    const [changed_address, setChangeAddress] = useState("");
    const [changed_email, setChangeEmail] = useState("");
    const [changed_phoneNumber, setChangephoneNumber] = useState("");
    const [avatar_image,  setPhoto] = useState(`${server_url}:5000/${user_id}.jpg?date=` + new Date().toLocaleString());


    function update_init() {
        const url = `${server_url}:5000/api/users/updateUser` //(locahhost -> 로컬 와이파이 주소)
        const formData = new FormData();
        const file = {
            uri: avatar_image,
            type: 'image/jpeg',
            name: `${user_id}.jpg`
        }
        const headers = {
            "content-type": "multipart/form-data"
        };

        formData.append("user_id", "null");
        formData.append("changed_name", "null");
        formData.append("changed_address", "null");
        formData.append("changed_email", "null");
        formData.append("changed_phoneNumber", "null");
        formData.append("testImage", file);
        formData.append("name", "testProfile");
        axios.post(url, formData, {headers: headers} )
        .then((response) => {
            console.log(response.data)
        })
        .catch(error => {

        })
      }

    function update() {
        const url = `${server_url}:5000/api/users/updateUser` //(locahhost -> 로컬 와이파이 주소)

        const formData2 = new FormData();
        const file2 = {
            uri: avatar_image,
            type: 'image/jpeg',
            name: `${user_id}.jpg`
        }
        const headers2 = {
            "content-type": "multipart/form-data"
        };

        formData2.append("user_id", user_id);
        formData2.append("changed_name", changed_name);
        formData2.append("changed_address", changed_address);
        formData2.append("changed_email", changed_email);
        formData2.append("changed_phoneNumber", changed_phoneNumber);
        formData2.append("testImage", file2);
        formData2.append("name", "testProfile");
        axios.post(url, formData2, {headers: headers2} )
        .then((response) => {
            console.log(response.data)
        })
        .catch(error => {

        })
    }

    function get_userinfo() {
        const url = `${server_url}:5000/api/users/getuserinfo` //(locahhost -> 로컬 와이파이 주소) 
        axios
        .post(url,
            {
                "user_id" : user_id
            }   
        )
        .then((response) => {
            const result = response.data;
            const {user_id, name, email, address, phoneNumber, avatar_image} = result;
            setInfoData(result);
            setChangeName(result.name);
            setChangeAddress(result.address);
            setChangeEmail(result.email);
            setChangephoneNumber(result.phoneNumber);
            console.log(result);
            console.log(user_infolist);
        })
        .catch(error => {
            console.log(user_infolist);
        })
    }

    useEffect(()=>{
        get_userinfo();
    }, []);

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
                        value={changed_name}
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
                        value={changed_address}
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
                        value={changed_email}
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
                        value={changed_phoneNumber}
                        style={styles.Text_input}
                        onChangeText={text=>setChangephoneNumber(text)}
                        placeholder={"  " + "Phone"}
                    />
                </View>               
            </View>

            <Separator/>

            <View style={styles.Edit}>
                <Pressable 
                onPress={() => { update_init(); update(); navigation.reset({routes: [{name: 'MyInfoScreen'}]}) }} 
                style={styles.signIn_pressable}>
                    <Text style={styles.signIn}>완료</Text>
                </Pressable>
            </View>
            
           
        </SafeAreaView>
    )
}