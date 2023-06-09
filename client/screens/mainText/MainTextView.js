// 진행중 캠패인 화면

import { StyleSheet, Text, View, TouchableOpacity, Dimensions,FlatList,SafeAreaView, TextInput, Alert} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Button from './Button';
import QnAView from './QnAView';
import { DATA } from "./QnAdata"
import { DATA2 } from "./data"

import{ 
  Poster_MAIN,
} from '../../components/styles';

import axios from 'axios';
import { CredentialsContext } from '../../components/CredentialsContext';

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
    name: 'ReviewWrite',
    status: 'Review'
  },
  {
    name: 'QnAWrite',
    status: 'QnA'
  }
];



const MainTextView = ({ navigation, route }) => {
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const {user_id, name, email, address, phoneNumber} = storedCredentials;

    /*FlatList 상태 변수*/
    const [status, setStatus] = useState('Main')
    const [datalist, setDatalist] = useState(data_init)
    const [list, setData] = useState([]);

    /*QnA 화면 작성 변수*/
    const [writeMode, setWriteMode] = useState(false);
    const [txt,setTxt] = useState('');
    const [memos, setMemos] = useState(DATA);
    const [idx, setIdx] = useState(DATA.length + 1)

    /*Review 화면 작성 변수*/
    const [writeMode2, setWriteMode2] = useState(false);
    const [txt2,setTxt2] = useState('');
    const [memos2, setMemos2] = useState(DATA2);
    const [idx2, setIdx2] = useState(DATA2.length + 1)
    const [reply2, setReply2] = useState(DATA2);

    const [regist_status_text, setStatusText] = useState("신청하기");
    const [btn_disabled, setDisabled] = useState(true);

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
          if(result.register_campagin.findIndex(v=>v.register_campaginName === route.params.name) !== -1){
            if(result.register_campagin.find(v=>v.register_campaginName === route.params.name).register_status === true){
              setStatusText("신청완료");
            }
            else if(result.register_campagin.find(v=>v.register_campaginName === route.params.name).register_status === false){
              setStatusText("신청취소");
            }
            else if(result.register_campagin.find(v=>v.register_campaginName === route.params.name).register_status === null){
              setStatusText("신청하기");
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

    const setStatusFilter = status => {
      if(status !== 'No'){
        setDatalist([...data.filter(e => e.status === status)])
      }else{
        setDatalist(data)
      }
      setStatus(status)
    }

    //QnA 메모 추가
    const addMemo = ()=>{
      let saveText = {id:idx, memo:txt};
      //setMemos(prev=>[...prev,saveText])
      DATA.push(saveText)
      setWriteMode(false);

      setIdx(idx+1)
    }

    //리뷰 메모 추가
    const addMemo2 = ()=>{
      let saveText2 = {id:idx2, memo:txt2, reply:txt2};
      //setMemos(prev=>[...prev,saveText])
      DATA2.push(saveText2)
      setWriteMode2(false);

      setIdx2(idx2+1)
    }

  const renderMemo = ({item}) =>{
      return(
          <View style={{
              borderBottomColor:'#ddd',
              borderBottomWidth:1, 
              flexDirection:'row',
              borderRadius: 10,
              padding: 10,
              alignItems: 'center',
              width:350,
              height:100,
              backgroundColor: "#FFF1D7",
              margin:5 }}>
              <Text style={{marginRight: 10}}>{item.id}</Text>
              <Text>{item.memo}</Text>

              
          </View>
      )
  }

  const renderMemo2 = ({item}) =>{
    return(
        <View style={{padding:10, 
        borderBottomColor:'#ddd',
        borderBottomWidth:1, 
        flexDirection:'row',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width:350,
        height:100,
        backgroundColor: "#FFF1D7",
        margin:5 }}>
            <Text style={{marginRight: 10}}>{item.id}</Text>
            <Text>{item.memo}</Text>
            {/* <Text>{item.reply}</Text> */}

        </View>
    )
  }

  if(writeMode){
    return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1, backgroundColor:'#9c0'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TouchableOpacity style={{padding:15,}} onPress={()=>setWriteMode(false)}>
                <Text style={{fontSize:18,}}>취소</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{padding:15,}} onPress={()=>addMemo()} >
                <Text style={{fontSize:18,}}>저장</Text>
            </TouchableOpacity>
        </View>

        <View style={{flex:1, backgroundColor:'#fff'}}>
            <TextInput style={{backgroundColor:'#eee', flex:1, padding:10}} onChangeText={text=>setTxt(text)} multiline/>
        </View>
    </View>
    </SafeAreaView>
  );
  }

  if(writeMode2){
    return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1, backgroundColor:'#9c0'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TouchableOpacity style={{padding:15,}} onPress={()=>setWriteMode2(false)}>
                <Text style={{fontSize:18,}}>취소</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{padding:15,}} onPress={()=>addMemo2()} >
                <Text style={{fontSize:18,}}>저장</Text>
            </TouchableOpacity>
        </View>

        <View style={{flex:1, backgroundColor:'#fff'}}>
            <TextInput style={{backgroundColor:'#eee', flex:1, padding:10}} onChangeText={text=>setTxt2(text)} multiline/>
        </View>
    </View>
    </SafeAreaView>
  );
  }

    const QnAView = () => {
      return (

        <SafeAreaView style={{flex:1, backgroundColor:'#FFF1D7'}}>
            <View style={{}}>
                <Text style={{fontSize:20,  textAlign:'center'}}>QnA</Text>
            </View>
            <View style={{flex:1, backgroundColor:'#fff'}}>

            <View style={{position:'absolute', right:20, bottom:20,zIndex:10, }}>
                <View style={{width:50, height:50, backgroundColor:'tomato', borderRadius:25,
             alignItems:'center', justifyContent:'center'}}>

                <TouchableOpacity onPress={()=>setWriteMode(true)}>
                    <Text style={{color:'#FFF1D7'}}>작성</Text>
                </TouchableOpacity>

            </View>
            </View>

            <View style={{flex:1, borderRadius: 10,padding: 10,}}>

                <FlatList data={memos} renderItem={renderMemo} style={{flex:1}}/>
                

            </View>
            </View>
        </SafeAreaView>
    );

    
    }

    const reView = () => {
      return (

        <SafeAreaView style={{flex:1, backgroundColor:'#FFF1D7'}}>
            <View style={{}}>
                <Text style={{fontSize:20,  textAlign:'center'}}>리뷰</Text>
            </View>
            <View style={{flex:1, backgroundColor:'#fff'}}>

            <View style={{position:'absolute', right:20, bottom:20,zIndex:10, }}>
                <View style={{width:50, height:50, backgroundColor:'tomato', borderRadius:25,
             alignItems:'center', justifyContent:'center'}}>

                <TouchableOpacity onPress={()=>setWriteMode2(true)}>
                    <Text style={{color:'#FFF1D7'}}>작성</Text>
                </TouchableOpacity>

            </View>
            </View>

            <View style={{flex:1, borderRadius: 10,padding: 10,}}>

                <FlatList data={memos2} renderItem={renderMemo2} style={{flex:1}}/>

            </View>
            </View>
        </SafeAreaView>
    );
    }

    function campagin_registUser() {
      const url = `${server_url}:5000/api/campagins/registUser` //(locahhost -> 로컬 와이파이 주소)
      axios
      .post(url,
        {
          "campagin_name" : route.params.name,
          "register_userId" : route.params.userId
        }  
      )
      .then((response) => {
          const result = response.data;
          console.log(result);
      })
      .catch(error => {
          console.log(result);
      })
    }
    function user_registCampagin() {
      const url = `${server_url}:5000/api/users/registCampagin` //(locahhost -> 로컬 와이파이 주소)
      axios
      .post(url,
        {
          "campagin_name" : route.params.name,
          "register_userId" : route.params.userId
        }  
      )
      .then((response) => {
          const result = response.data;
          console.log(result);
      })
      .catch(error => {
          console.log(result);
      })
    }
    function campagin_deleteUser() {
      const url = `${server_url}:5000/api/campagins/deleteUser` //(locahhost -> 로컬 와이파이 주소)
      axios
      .post(url,
        {
          "campagin_name" : route.params.name,
          "register_userId" : route.params.userId
        }  
      )
      .then((response) => {
          const result = response.data;
          console.log(result);
      })
      .catch(error => {
          console.log(result);
      })
    }
    function user_deleteCampagin() {
      const url = `${server_url}:5000/api/users/deleteCampagin` //(locahhost -> 로컬 와이파이 주소)
      axios
      .post(url,
        {
          "campagin_name" : route.params.name,
          "register_userId" : route.params.userId
        }  
      )
      .then((response) => {
          const result = response.data;
          console.log(result);
      })
      .catch(error => {
          console.log(result);
      })
    }
    const goAlert = () =>{
      Alert.alert(
        "신청하시겠습니까?",
        "신청 후, 활동 증빙 사진까지 등록해야 활동 인정이 됩니다.",
        [    
          {
            text: "아니요",
            onPress: () => console.log("취소되었습니다."),
            style: "cancel"
          },
          { text: "네", onPress: () => 
            {
              console.log("OK 땡큐");
              campagin_registUser();
              user_registCampagin();
              setStatusText("신청취소");
            } 
          },
        ],
        { cancelable: true }
      );
    }
    const cancleAlert = () =>{
      Alert.alert(
        "취소하시겠습니까?",
        "신청완료 승인 전까지 취소가 가능합니다.",
        [    
          {
            text: "아니요",
            onPress: () => console.log("알았어 취소 안할게"),
            style: "cancel"
          },
          { text: "네", onPress: () => 
            {
              console.log("취소되었습니다.");
              campagin_deleteUser();
              user_deleteCampagin();
              setStatusText("신청하기");
            } 
          },
        ],
        { cancelable: true }
      );
    }
    const MainViewLayout = (props) => {
      return (
        <View style={{flex: 1}}>
          <Poster_MAIN resizeMode="cover" source={{ uri: `${server_url}:5000/CampaginNum${route.params.number}.jpg?date=` + new Date().toLocaleString() }}/>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={styles.RegisterButton} 
              onPress={
                regist_status_text === "신청하기" ? goAlert : regist_status_text === "신청취소" ? cancleAlert : setDisabled(false)
              }
            >
              <Text style={{color: 'black', fontSize: 23, fontWeight: 'bold'}}>{regist_status_text}</Text>
            </TouchableOpacity>
          </View>        
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
              renderItem={status === 'Main' ? MainViewLayout : status === 'Review' ? reView : QnAView}
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
              style={[styles.FootButton, status ==='Review' && styles.FootButtonActive]}
              onPress= {() => setStatusFilter('Review')}
            >
              <Text style={{color: 'black', fontSize: 23, fontWeight: 'bold',}}>리뷰</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.FootButton, status ==='QnA' && styles.FootButtonActive]}
              onPress= {() => setStatusFilter('QnA')}
            >
              <Text style={{color: 'black', fontSize: 23, fontWeight: 'bold',}}>QnA</Text>
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
        width:120,
        height:60,
        borderBottomWidth: 1,
      },
      FootButtonActive: {
        backgroundColor: '#FFF1D7'
      },
      RegisterButton: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        width:200,
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

export default MainTextView;