// 진행중 캠패인 화면

import { StyleSheet, Text, View, TouchableOpacity, Dimensions,FlatList,SafeAreaView, TextInput, Alert} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import blankupload from '../../assets/img/blankupload.jpg';

import{ 
  Poster_MAIN,
} from '../../components/styles';

import axios from 'axios';
import { CredentialsContext } from '../../components/CredentialsContext';
import MyUploadImage from '../../components/MyUploadImage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { local_server_url } from '../../assets/server_url/server_url';
const server_url = local_server_url;

const data_init = [
  {
    name: 'MainView',
    status: 'Main'
  }
];

const data = [
  {
    name: 'MainView',
    status: 'Main'
  },
  {
    name: 'CompleteWrite',
    status: 'Complete'
  },
];



const DoingTextView = ({ navigation, route }) => {
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const {user_id, name, email, address, phoneNumber} = storedCredentials;

    /*FlatList 상태 변수*/
    const [status, setStatus] = useState('Main')
    const [datalist, setDatalist] = useState(data_init)
    const [list, setData] = useState([]);


    const [regist_status_text, setStatusText] = useState("신청하기");
    const [btn_disabled, setDisabled] = useState(true);
    const [upload_image,  setPhoto] = useState(`${server_url}:5000/${user_id}_complete_${route.params._id}.jpg?date=` + new Date().toLocaleString());
    const [upload_status, setUploadStatus] = useState("활동 등록");

    function post() {
      const url = `${server_url}:5000/api/campagins/getinfoOne` //(locahhost -> 로컬 와이파이 주소)
      console.log(route.params.number)
      axios
      .post(url,
        {
          "campagin_name" : route.params.name
        }  
      )
      .then((response) => {
          const result = response.data;
          setData(result);
          console.log(list);
      })
      .catch(error => {
          console.log(result);
      })
    }
    function update_userinfo() {
      const url = `${server_url}:5000/api/users/getuserinfo` //(locahhost -> 로컬 와이파이 주소)
      axios
      .post(url,
          {
              "user_id" : user_id
          }   
      )
      .then((response) => {
          const result = response.data;
          console.log(result);
          if(result.complete_campagin.findIndex(v=>v.complete_campaginName === route.params.name) !== -1){
            if(result.complete_campagin.find(v=>v.complete_campaginName === route.params.name).complete_status === true){
              setUploadStatus("활동 완료");
            }
            else if(result.complete_campagin.find(v=>v.complete_campaginName === route.params.name).complete_status === false){
              setUploadStatus("등록 변경");
            }
            else if(result.complete_campagin.find(v=>v.complete_campaginName === route.params.name).complete_status === null){
              setUploadStatus("활동 등록");
            }
          }
      })
      .catch(error => {
          console.log(result);
      })
    }
    useEffect(() => {
      post();
      update_userinfo();
    }, []);

    function campagin_completeUser() {
        const url = `${server_url}:5000/api/campagins/completeUser` //(locahhost -> 로컬 와이파이 주소)
        const formData = new FormData();
        const file = {
            uri: upload_image,
            type: 'image/jpeg',
            name: `${user_id}_complete_${list._id}.jpg`
        }
        const headers = {
            "content-type": "multipart/form-data"
        };

        formData.append("completeImage", file);
        formData.append("name", "completeUpload");
        axios.post(url, formData, {headers: headers} )
        .then((response) => {
            console.log(response.data)
        })
        .catch(error => {

        })
    }

    function campagin_registcompleteUser() {
      const url = `${server_url}:5000/api/campagins/registcompleteUser` //(locahhost -> 로컬 와이파이 주소)
      axios.post(url, 
        {
          "campagin_name" : route.params.name,
          "complete_userId" : user_id,
          "complete_imageurl" : "${server_url}"+`:5000/${user_id}_complete_${route.params._id}.jpg`
        }
      )
      .then((response) => {
          console.log(response.data)
      })
      .catch(error => {

      })
    }

    function campagin_registcompleteCampagin() {
      const url = `${server_url}:5000/api/users/registcompleteCampagin` //(locahhost -> 로컬 와이파이 주소)
      axios.post(url, 
        {
          "campagin_name" : route.params.name,
          "complete_userId" : user_id,
          "complete_imageurl" : "${server_url}"+`:5000/${user_id}_complete_${route.params._id}.jpg`
        }
      )
      .then((response) => {
          console.log(response.data)
      })
      .catch(error => {

      })
    }

    const goAlert = () =>{
      Alert.alert(
        "등록하시겠습니까?",
        "등록 후, 활동 승인이 완료되면 변경이 불가능합니다..",
        [    
          {
            text: "아니요",
            onPress: () => console.log("취소되었습니다."),
            style: "cancel"
          },
          { text: "네", onPress: () => 
            {
              console.log("OK 땡큐");
              campagin_completeUser(); 
              campagin_registcompleteUser(); 
              campagin_registcompleteCampagin();
              setUploadStatus("등록 변경");
            } 
          },
        ],
        { cancelable: true }
      );
    }
    const changeAlert = () =>{
      Alert.alert(
        "변경하시겠습니까?",
        "변경 후, 활동 승인이 완료되면 변경이 불가능합니다..",
        [    
          {
            text: "아니요",
            onPress: () => console.log("알았어 취소 안할게"),
            style: "cancel"
          },
          { text: "네", onPress: () => 
            {
              console.log("변경되었습니다.");
              campagin_completeUser(); 
            } 
          },
        ],
        { cancelable: true }
      );
    }

    const setStatusFilter = status => {
      if(status !== 'No'){
        setDatalist([...data.filter(e => e.status === status)])
      }else{
        setDatalist(data)
      }
      setStatus(status)
    }
    const MainViewLayout = (props) => {
      return (
        <View style={{flex: 1}}>
          <Poster_MAIN resizeMode="cover" source={{ uri: `${server_url}:5000/CampaginNum${route.params.number}.jpg?date=` + new Date().toLocaleString() }}/>      
        </View>
      )
    }

    const CompleteViewLayout = (props) => {
        return (
          <View style={{flex: 1}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>활동 실적 업로드</Text>
            <Text>*앱 내부 기능에 있는 타임스탬프 카메라로 촬영한 날짜와 시간이{"\n"} 적힌 사진이 업로드 되어야 활동 인정이 됩니다.*</Text>
            <MyUploadImage url={upload_image} onChangePhoto={setPhoto}/>  
            <TouchableOpacity style={styles.RegisterButton} onPress={
              upload_status === "활동 등록" ? goAlert : upload_status === "등록 변경" ? changeAlert : setDisabled(false)
            }>
              <Text style={{color: 'black', fontSize: 23, fontWeight: 'bold'}}>{upload_status}</Text>
            </TouchableOpacity>
          </View>
        )
      }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box1}>
                <TouchableOpacity 
                    onPress={() => { navigation.pop() }}>
                    <AntDesign name="leftcircleo" size={30} color="black" />
                </TouchableOpacity>
            </View>
          <View style={styles.header}>
               <Text style={styles.text}>{route.params.name}</Text>
          </View>

          <View style={styles.content}>
            <FlatList 
              data={datalist}
              keyExtractor={(e, i) => i.toString()}
              renderItem={status === 'Main' ? MainViewLayout : status === 'Complete' ? CompleteViewLayout : ""}
            />
          </View>

          <View style={styles.footer}>
            <TouchableOpacity 
              style={[styles.FootButton, status ==='Main' && styles.FootButtonActive]}
              onPress= {() => setStatusFilter('Main')}
            >
              <Text style={{color: 'black', fontSize: 23, fontWeight: 'bold',}}>본문</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.FootButton, status ==='Complete' && styles.FootButtonActive]}
              onPress= {() => setStatusFilter('Complete')}
            >
              <Text style={{color: 'black', fontSize: 23, fontWeight: 'bold',}}>활동 실적 작성</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',  
      },
      box1:{
        marginTop: windowHeight/15
      },
      FootButton: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        width:windowHeight/4,
        height:60,
        borderBottomWidth: 1,
      },
      FootButtonActive: {
        backgroundColor: '#FFF1D7'
      },
      RegisterButton: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: windowWidth/6,
        padding: 10,
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        width:windowWidth/1.5,
        height:60,
        borderBottomWidth: 1,
        backgroundColor: '#FFF1D7'
      },
      header: {
        height: 55,
        backgroundColor: '#FFF1D7',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 0,
        
      },
      logo: {
        width: 150,
        height: 40,
        resizeMode: 'contain',
      },
      content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      footer: {
        height: 60,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        flexDirection: "row",
        marginBottom: 20
      },
      footerText: {
        fontSize: 16,
      },
      
    });

export default DoingTextView;