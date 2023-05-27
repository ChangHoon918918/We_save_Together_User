import { StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList, Image, SafeAreaView, Animated, Pressable } from 'react-native';
import React, { useRef, useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import profile from './../assets/img/profile.png';
// Tab ICons...
import home from './../assets/img/home.png';
import search from './../assets/img/search.png';
import notifications from './../assets/img/bell.png';
import settings from './../assets/img/settings.png';
import logout from './../assets/img/logout.png';
import myInfo from './../assets/img/myInfo.png';
import ToS from './../assets/img/ToS.png';
import liveCampagin from './../assets/img/liveCampagin.png';
import information from './../assets/img/information.png';
import event from './../assets/img/event.png';
import registerInfo from './../assets/img/registerInfo.png';
import campaginReview from './../assets/img/campaginReview.png';
import myQnA from './../assets/img/myQnA.png';
import pointShop from './../assets/img/pointShop.png';
import reportLog from './../assets/img/reportLog.png';
import managePayment from './../assets/img/managePayment.png';
import userCenter from './../assets/img/userCenter.png';
import camapginCount from './../assets/img/campaginCount.png';
import AdEx from './../assets/img/AdEx.png';
import notice from './../assets/img/notice.png';
import shop from './../assets/img/shop.png';
import camera from './../assets/img/camera.png';
import allCampagin from './../assets/img/allCampagin.png';
import QnA from './../assets/img/QnA.png';
// Menu
import menu from './../assets/img/menu.png';
import close from './../assets/img/close.png';

// Photo
import photo from './../assets/img/photo.jpg';
import{ 
  PageLogo,
  WelcomeContainer,
  Poster_PV,
  Avatar,
  PosterList_PV,
  AdView
} from './../components/styles';

import Feed from './Feed';
import Article from './Article';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import TabButton from '../components/TabButton';
import TitleMenuButton from '../components/TitleMenuButton';
import moveCamapginList from '../components/moveCampaginList';
import searchInput from '../components/searchInput';
import JoinButton from '../components/JoinButton';
import axios from 'axios';

const Drawer = createDrawerNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//credentials context
import { CredentialsContext } from '../components/CredentialsContext';
const server_url = 'http://192.168.45.152';

const data_init = [
  {
    name: 'ListInfo',
    status: 'List'
  }
];

const data = [
  {
    name: 'ListInfo',
    status: 'List'
  },
  {
    name: 'DeatilInfo',
    status: 'Deatil'
  },
  {
    name: 'GridInfo',
    status: 'Grid'
  }
];

const CampaginView = ({ navigation, campaginData, props }) => {
  const [status, setStatus] = useState('List')
  const [datalist, setDatalist] = useState(data_init)
  const [list, setData] = useState([]);
  //context
  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
  const {user_id, name, email, address, phoneNumber} = storedCredentials;
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(true);
  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const [animatedViewRadius, setAnimatedViewRadius] = useState(0);
  const [user_infolist, setInfoData] = useState([]);

  function post() {
    const url = `${server_url}:5000/api/campagins/getinfo` //(locahhost -> 로컬 와이파이 주소)
    axios
    .post(url)
    .then((response) => {
        const result = response.data;
        const {campagin_point, campagin_volunteerTimer, campagin_name, campagin_operatingDate} = result;
        setData(result);
        console.log(list);
    })
    .catch(error => {
        console.log(result);
    })
  }
  useEffect(() => {
    post();
  }, []);
  
  const setStatusFilter = status => {
    if(status !== 'No'){
      setDatalist([...data.filter(e => e.status === status)])
    }else{
      setDatalist(data)
    }
    post();
    setStatus(status)
  }

  const clearLogin = () => {
    AsyncStorage.removeItem('We_save_together')
    .then(() => {
      setStoredCredentials("");
    })
    .catch(error => console.log(error))
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
        const {user_id, name, email, address, phoneNumber} = result;
        setInfoData(result);
        console.log(user_infolist);
    })
    .catch(error => {
        console.log(user_infolist);
    })
  }
  useEffect(() => {
      post();
      update_userinfo();
  }, []);

  const LogoutButton = (currentTab, setCurrentTab, title, image, navigation, showMenu) => {
    return (
  
      <TouchableOpacity onPress={clearLogin}>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: '#C4E1C5',
          paddingLeft: 8,
          paddingRight: 25,
          borderRadius: 8,
          borderWidth: 1,
          marginTop: 15
        }}>
  
          <Text style={{
            fontSize: 13,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "black"
          }}>{title}</Text>
  
        </View>
      </TouchableOpacity>
    );
  }

  const ListLayout = (props) => {
    return (
      <ScrollView>
        {
          list.map((item)=>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/6, margin: 10}}>
          <View style={Listlayout_styles.Listlayout_body}>
            <View style={{flex: 5}}>
              <Text>봉사 시간: {item.campagin_volunteerTimer}</Text>
              <Text style={{fontSize: 25}}>{item.campagin_name}</Text>
              <Text style={{fontSize: 15}}>포인트: {item.campagin_point}</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft:20}}>
              <TouchableOpacity>
                <Text style={{fontSize: 20}}>보기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>        
          )
        }
  
      </ScrollView>
    )
  }

  const Item = ({operatingDate, campagin_point, campagin_name, campagin_volunteerTimer}) => (

    <View style={{width: windowWidth/2.3, height: windowHeight/4, marginTop: 10}}>
    <View style={Girdlayout_styles.Girdlayout_body}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>봉사시간: {campagin_volunteerTimer}</Text>
    </View>
    
    <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 25}}>{campagin_name}</Text>
    </View>
  
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 13}}>포인트: {campagin_point}</Text>
    </View>
  
    <View style={{flex: 1, alignItems: 'flex-end', marginTop: 30}}>
    <TouchableOpacity>
        <Text style={{fontSize: 20}}>보기</Text>
      </TouchableOpacity>
    </View>
    </View> 
    </View>
  );
  
  const GridLayout = () => {
    return (
      <ScrollView style={{marginTop: 10}}>
        <View style={{paddingHorizontal: windowWidth/20, height: windowHeight}}>
          <FlatList
            data={list}
            renderItem={({item}) => <Item campagin_operatingDate={item.campagin_operatingDate} campagin_name={item.campagin_name} campagin_point={item.campagin_point} campagin_volunteerTimer={item.campagin_volunteerTimer}/>}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        </View>
      </ScrollView>
    )
  }

  const DetailLayout = () => {
    return (
      <ScrollView>
        {
          list.map((item, index)=> 
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/1.5, margin: 10}}>
          <View style={DetailLayout_styles.DetailLayout_body}>
            <View style={{flexDirection:'row'}}>
              <View style={{flex: 5}}>
                <Text>봉사 시간: {item.campagin_volunteerTimer}</Text>
                <Text style={{fontSize: 25}}>{item.campagin_name}</Text>
                <Text style={{fontSize: 15}}>포인트: {item.campagin_point}</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft:20}}>
                <TouchableOpacity onPress={() => navigation.navigate('MainTextView')}>
                  <Text style={{fontSize: 20}}>보기</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Poster_PV resizeMode="cover" source={{ uri: `${server_url}:5000/CampaginNum${index}.jpg?date=` + new Date().toLocaleString() }}/>
          </View>
        </View>
          )
        }
      </ScrollView>
    )
  }
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'flex-start',}}>
    <StatusBar style="dark" />
    
    <View style={{ flex: 1,}}>
      <View style={{flex: 1, backgroundColor: '#C4E1C5', width: windowWidth}} />
      <View style={{flex: 5, backgroundColor: '#ffffff', width: windowWidth, alignItems: 'flex-end'}}>
        <View style={{backgroundColor: '#FFF1D7', width: windowWidth/1.4, height: windowHeight/1.4, borderRadius: 15, marginTop: 80, marginRight: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {searchInput(currentTab, setCurrentTab, "통합검색", search, navigation, showMenu, windowWidth)}
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {TabButton(currentTab, setCurrentTab, "My 활동정보", myInfo, navigation, windowWidth)}
            {TabButton(currentTab, setCurrentTab, "이용약관", ToS, navigation, windowWidth)}
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {TabButton(currentTab, setCurrentTab, "My 실시간 캠페인", liveCampagin, navigation, windowWidth)}
            {TabButton(currentTab, setCurrentTab, "공지사항", information, navigation, windowWidth)}
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {TabButton(currentTab, setCurrentTab, "My 가입 정보", registerInfo, navigation, windowWidth)}
            {TabButton(currentTab, setCurrentTab, "이벤트", event, navigation, windowWidth)}
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {TabButton(currentTab, setCurrentTab, "My 캠페인 리뷰", campaginReview, navigation, windowWidth)}
            {TabButton(currentTab, setCurrentTab, "전체 캠페인", allCampagin, navigation, windowWidth)}
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {TabButton(currentTab, setCurrentTab, "My 질의응답", myQnA, navigation, windowWidth)}
            {TabButton(currentTab, setCurrentTab, "Point Shop", pointShop, navigation, windowWidth)}
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {TabButton(currentTab, setCurrentTab, "My 신고내역", reportLog, navigation, windowWidth)}
            {TabButton(currentTab, setCurrentTab, "결제수단관리", managePayment, navigation, windowWidth)}
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {TabButton(currentTab, setCurrentTab, "고객센터", userCenter, navigation, windowWidth)}
            {TabButton(currentTab, setCurrentTab, "사진 찍기", camera, navigation, windowWidth)}
          </View>
        </View>
      </View>
      <View elevation={20} style={{position: 'absolute', width: windowWidth/1.4, height: windowHeight/6, backgroundColor: 'white', top: 60, left: 90, borderRadius: 15}}>
        <View style={{ margin: 15}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={{width: 40, height: 40, margin: 'auto', borderRadius: 50, borderWidth: 2, borderColor: '#E5E7EB'}} resizeMode="cover" source={require('./../assets/img/img1.png')}/>
            <Text style={{fontSize: 25}}>{user_infolist.name} 님 </Text>
            <View style={{position: 'absolute', top: -20, right: 0}}>
              {LogoutButton(currentTab, setCurrentTab, "LogOut", logout, navigation, showMenu, setShowMenu, clearLogin)}
            </View>
          </View>

          <View style={{backgroundColor: '#C4E1C5', width: windowWidth/1.6, height: windowHeight/20, borderRadius: 10, marginTop: 25, flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {TitleMenuButton(currentTab, setCurrentTab, "Notice", notice)}
            {TitleMenuButton(currentTab, setCurrentTab, "Shop", shop)}
            {TitleMenuButton(currentTab, setCurrentTab, "QnA", QnA, navigation)}
          </View>
        </View>
      </View>
    </View>

    <Animated.View elevation={10} style={{
              flexGrow: 1, backgroundColor: 'white', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, borderRadius: animatedViewRadius,
              shadowOffset: {width: 1, height: 1}, shadowColor: 'black', shadowOpacity: 0.2, paddingVertical: 0, overflow: 'hidden',
              // Transforming View...
              transform: [
                { scale: scaleValue },
                { translateX: offsetValue }
              ]
            }}>
              <Animated.View style={{
                transform: [{
                  translateY: closeButtonOffset
                }],
                flex: 1,
                width: '100%',
              }}>
          <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: !showMenu ? 1 : 0.9,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? -(windowWidth/1.2) : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
            setAnimatedViewRadius(showMenu ? 25 : 0)
          }}>

            <Image source={showMenu ? menu : close} style={{
              width: 30,
              height: 30,
              tintColor: 'black',
              marginTop: 50,
              marginRight: 20,
              justifyContent: 'flex-end'
            }}></Image>

          </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <View style={{alignSelf: 'flex-end', marginTop: -10, marginRight: 5}}>
              <View style={styles.listTab}>
                <TouchableOpacity 
                  style={[styles.btnTab, status ==='List' && styles.btnTabActive]}
                  onPress= {() => setStatusFilter('List')}
                >
                  <FontAwesome name="list-ul" size={30} color="black" />
                </TouchableOpacity> 

                <TouchableOpacity 
                  style={[styles.btnTab, status ==='Grid' && styles.btnTabActive]}
                  onPress= {() => setStatusFilter('Grid')}
                >
                  <AntDesign name="appstore-o" size={30} color="black" />
                </TouchableOpacity> 

                <TouchableOpacity 
                  style={[styles.btnTab, status ==='Deatil' && styles.btnTabActive]}
                  onPress= {() => setStatusFilter('Deatil')}
                >
                  <Fontisto name="nav-icon-a" size={30} color="black" />
                </TouchableOpacity> 
              </View>
            </View>
      
            <FlatList 
              data={datalist}
              keyExtractor={(e, i) => i.toString()}
              renderItem={status === 'List' ? ListLayout : status === 'Grid' ? GridLayout : DetailLayout}
            />
          </View>
        </Animated.View>

      </Animated.View>

</SafeAreaView>
  );
}

const Listlayout_styles = StyleSheet.create({
    Listlayout_container: {
      flex: 1,
      backgroundColor: '#fff',
  
      justifyContent: 'center',
      padding: 20,
    },
    Listlayout_header: {
      height: 60,
      backgroundColor: '#ffffff',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    Listlayout_title: {
      color: '#000',
      fontSize: 24,
      fontWeight: 'bold',
    },
    Listlayout_body: {
      flex: 3,
      flexDirection: 'row',
      padding: 20,
      backgroundColor: '#FFF1D7',
      shadowColor: "#A01900", 
      shadowOpacity: 0.1,
      shadowOffset: { width: 3, height: 3 }, 
      elevation: 9,
      borderRadius:20,
      marginLeft:10
    },
    Listlayout_text: {
      fontSize: 16,
      color: '#000',
    },
    Listlayout_footer: {
      flexDirection: "row",
      marginLeft:100,
      justifyContent: 'space-around',
      paddingBottom: 10
    }, 
    Listlayout_fotterElement: {
      backgroundColor: '#FFF1D7',
      shadowColor: "#A01900", 
      shadowOpacity: 0.1,
      shadowOffset: { width: 3, height: 3 }, 
      elevation: 9,
      borderRadius:20,
    },
    Listlayout_case1: {
      flex: 1,
    },
  
  });

const Girdlayout_styles = StyleSheet.create({
    Girdlayout_container: {
      flex: 1,
      backgroundColor: '#fff',
  
      justifyContent: 'center',
      padding: 20,
    },
    Girdlayout_header: {
      height: 60,
      backgroundColor: '#ffffff',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    Girdlayout_title: {
      color: '#000',
      fontSize: 24,
      fontWeight: 'bold',
    },
    Girdlayout_body: {
      flex: 3,
      padding: 10,
      backgroundColor: '#FFF1D7',
      shadowColor: "#A01900", 
      shadowOpacity: 0.1,
      shadowOffset: { width: 3, height: 3 }, 
      elevation: 9,
      borderRadius:20,
      marginLeft:10
    },
    Girdlayout_text: {
      fontSize: 16,
      color: '#000',
    },
    Girdlayout_footer: {
      flexDirection: "row",
      marginLeft:100,
      justifyContent: 'space-around',
      paddingBottom: 10
    }, 
    Girdlayout_fotterElement: {
      backgroundColor: '#FFF1D7',
      shadowColor: "#A01900", 
      shadowOpacity: 0.1,
      shadowOffset: { width: 3, height: 3 }, 
      elevation: 9,
      borderRadius:20,
    },
    Girdlayout_case1: {
      flex: 1,
    },
  
  });

const DetailLayout_styles = StyleSheet.create({
    DetailLayout_container: {
      flex: 1,
      backgroundColor: '#fff',
  
      justifyContent: 'center',
      padding: 20,
    },
    DetailLayout_header: {
      height: 60,
      backgroundColor: '#ffffff',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    DetailLayout_title: {
      color: '#000',
      fontSize: 24,
      fontWeight: 'bold',
    },
    DetailLayout_body: {
      flex: 3,
      padding: 20,
      backgroundColor: '#FFF1D7',
      shadowColor: "#A01900", 
      shadowOpacity: 0.1,
      shadowOffset: { width: 3, height: 3 }, 
      elevation: 9,
      borderRadius:20,
      marginLeft:10
    },
    DetailLayout_text: {
      fontSize: 16,
      color: '#000',
    },
    DetailLayout_footer: {
      flexDirection: "row",
      marginLeft:100,
      justifyContent: 'space-around',
      paddingBottom: 10
    }, 
    DetailLayout_fotterElement: {
      backgroundColor: '#FFF1D7',
      shadowColor: "#A01900", 
      shadowOpacity: 0.1,
      shadowOffset: { width: 3, height: 3 }, 
      elevation: 9,
      borderRadius:20,
    },
    DetailLayout_case1: {
      flex: 1,
    },
  
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listTab: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 40,
    alignContent: 'flex-end'
  },
  btnTab:{
    width: windowWidth/7,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 5,
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center'
  },
  textTab: {
    fontSize: 15
  },
  btnTabActive: {
    backgroundColor: '#FFF1D7'
  },
  textTabActive: {
    color: '#fff'
  },







});

export default CampaginView;