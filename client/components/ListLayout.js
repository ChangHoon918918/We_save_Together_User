import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, {useStat, useContext} from 'react';
import axios from 'axios';
import TabButton from '../components/TabButton';

import { CredentialsContext2 } from '../components/CredentialsContext2';

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

const ListLayout = (props) => {
  return (
    <ScrollView>
      {
        tabs.map((item)=>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/6, margin: 10}}>
        <View style={Listlayout_styles.Listlayout_body}>
          <View>
            <Text>캠페인 진행 일자: {item.date}</Text>
            <Text style={{fontSize: 25}}>{item.title}</Text>
            <Text style={{fontSize: 15}}>{item.time}</Text>
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

  export default ListLayout;