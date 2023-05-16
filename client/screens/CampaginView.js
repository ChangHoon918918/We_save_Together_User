import { StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList, Image, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import{ 
  PageLogo,
  Poster_PV
} from './../components/styles';

import allCampagin from './../assets/img/allCampagin.png';
import QnA from './../assets/img/QnA.png';

import { CredentialsContext2 } from '../components/CredentialsContext2';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabs = 
[
  {
    title: "ESG 용기내 챌린지", 
    date: "2023-05-01", 
    time: "2022.12.30 ~ 2023.01.30"
  }, 
  {
    title: "제주 쓰담", 
    date: "2023-05-03", 
    time: "10:00 ~ 15:00"
  },
  {
    title: "줍깅 캠페인", 
    date: "2023-05-08", 
    time: "11:00 ~ 17:00"
  },
];

const listTab = [
  {
    status: 'List'
  },
  {
    status: 'Grid'
  },
  {
    status: 'Deatil'
  }
]
const data = [
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
  const [datalist, setDatalist] = useState(data)
  const [list, setData] = useState([]);

  function post() {
    const url = 'http://192.168.45.169:5000/api/campagins/getinfo' //(locahhost -> 로컬 와이파이 주소)
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
    if(status !== 'List'){
      setDatalist([...data.filter(e => e.status === status)])
    }else{
      setDatalist(data)
    }
    post();
    setStatus(status)
  }

  const ListLayout = (props) => {
    return (
      <ScrollView>
        {
          list.map((item)=>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/6, margin: 10}}>
          <View style={Listlayout_styles.Listlayout_body}>
            <View>
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
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>봉사시간: {campagin_volunteerTimer}</Text>
    </View>
    
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>{campagin_name}</Text>
    </View>
  
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 13}}>포인트: {campagin_point}</Text>
    </View>
  
    <View style={{alignItems: 'flex-end', marginTop: 30}}>
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
        <View style={{paddingHorizontal: windowWidth/20}}>
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
          list.map((item)=> 
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/1.5, margin: 10}}>
          <View style={DetailLayout_styles.DetailLayout_body}>
            <View style={{flexDirection:'row'}}>
              <View>
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
            <Poster_PV resizeMode="cover" source={require('./../assets/img/img1.png')}/>
          </View>
        </View>
          )
        }
      </ScrollView>
    )
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: 'flex-end'}}>
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
    margin: 10,
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