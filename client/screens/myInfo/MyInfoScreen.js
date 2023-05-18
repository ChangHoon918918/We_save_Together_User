//내 정보 화면입니다.
import { Pressable, Text, View, TextInput, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React, { useRef, useState, useContext, useEffect } from 'react';
import { CredentialsContext } from "../../components/CredentialsContext";
import MyProfileImage from '../../components/MyProfileImage';

/**스타일 */
import styles from "./style";
//* 아이콘
import { AntDesign } from '@expo/vector-icons'; 
import{ 
    Avatar_Edit
} from '../../components/styles';

import axios from 'axios';

function Separator() {
    return <View style = {styles.separator}/>
  }

export default function MyInfoScreen({ navigation }) {
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const {user_id, name, email, address, phoneNumber, profileImage} = storedCredentials;
    const [user_infolist, setInfoData] = useState([]);
    const [photo,  setPhoto] = useState(undefined);

    function update_userinfo() {
        const url = 'http://192.168.45.169:5000/api/users/getuserinfo' //(locahhost -> 로컬 와이파이 주소)
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
            console.log(user_infolist);
        })
        .catch(error => {
            console.log(user_infolist);
        })
      }
    useEffect(() => {
        update_userinfo();
    }, []);
    return (       
        <SafeAreaView style={styles.container}> 
            <View style={styles.Box2}>
                <TouchableOpacity 
                    onPress={() => { navigation.navigate('Welcome') }}>
                    <AntDesign name="leftcircleo" size={30} color="black" />
                </TouchableOpacity>
            </View> 

            <MyProfileImage url={user_infolist.avatar_image} onChangePhoto={setPhoto}/>

            <Separator/>

            <View>
                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>Name</Text>
                    </View>
                    <Text style={styles.Text_input}>{user_infolist.name}</Text>
                </View>

                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>ID</Text>
                    </View>
                    <Text style={styles.Text_input}>{user_id}</Text>
                </View>

                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>주소</Text>
                    </View>
                    <Text style={styles.Text_input}>{user_infolist.address}</Text>
                </View>

                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>Email</Text>
                    </View>
                    <Text style={styles.Text_input}>{user_infolist.email}</Text>
                </View>
                
                <View style={styles.My_view}>
                    <View style={styles.ID}>
                        <Text style={styles.text_ID}>Phone</Text>
                    </View>
                    <Text style={styles.Text_input}>{user_infolist.phoneNumber}</Text>
                </View>               
            </View>
            
            <View style={styles.Edit}>
                <Pressable 
                onPress={() => { navigation.navigate('UpdateMyInfoScreen') }} 
                style={styles.signIn_pressable}>
                    <Text style={styles.signIn}>편집</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}