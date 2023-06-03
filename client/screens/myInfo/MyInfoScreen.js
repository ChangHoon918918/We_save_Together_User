//내 정보 화면입니다.
import { Pressable, Text, View, TextInput, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React, { useRef, useState, useContext, useEffect } from 'react';
import { CredentialsContext } from "../../components/CredentialsContext";
import MyProfileImage from '../../components/MyProfileImage';
import shop from '../../assets/img/shop.png';

/**스타일 */
import styles from "./style";
//* 아이콘
import { AntDesign } from '@expo/vector-icons'; 
import{ 
    Avatar_Edit
} from '../../components/styles';

import axios from 'axios';
import { local_server_url } from "../../assets/server_url/server_url";
const server_url = local_server_url;

function Separator() {
    return <View style = {styles.separator}/>
  }

export default function MyInfoScreen({ navigation }) {
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const {user_id, name, email, address, phoneNumber, profileImage} = storedCredentials;
    const [user_infolist, setInfoData] = useState([]);
    const [photo,  setPhoto] = useState(undefined);
    const [userProfileImage, setUserProfileImage] = useState({});
    const imageurl = `${server_url}:5000/${user_id}.jpg?date=` + new Date().toLocaleString();
    const [imageURI, setImageURI] = useState(`${server_url}:5000/blankProfile.jpg`);
    const [imageError, setImageError] = useState(true);
 
    const onImageNotFound = () => {
      setImageError(false);
    }

    function update_userinfo() {
        const url = `${server_url}:5000/api/users/getuserinfo` //(locahhost -> 로컬 와이파이 주소)
        setImageURI(imageurl);
        
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
            console.log(result);
            console.log(user_infolist);
        })
        .catch(error => {
            console.log(user_infolist);
        })
    }

    useEffect(()=>{
        let timer = setTimeout(()=>{ update_userinfo() }, 2000);
    }, []);

    return (       
        <SafeAreaView style={styles.container}> 
            <View style={styles.Box2}>
                <TouchableOpacity 
                    onPress={() => { navigation.reset({routes: [{name: 'Welcome'}]}) }}>
                    <AntDesign name="leftcircleo" size={30} color="black" />
                </TouchableOpacity>
            </View> 

            <Avatar_Edit source={{ uri: imageURI }}
                onError={() => onImageNotFound()} />

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