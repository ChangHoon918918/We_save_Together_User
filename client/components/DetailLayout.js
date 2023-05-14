import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react'

import{ 
  PageLogo,
  Poster_PV
} from './../components/styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const tabs = ["1번", "2번", "3번", "4번", "5번","6번", "7번","8번","9번"];
export default function DetailLayout() {
  return (
    <ScrollView>
      {
        tabs.map((item)=> 
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/1.5, margin: 10}}>
        <View style={DetailLayout_styles.DetailLayout_body}>
          <View style={{flexDirection:'row'}}>
            <View>
              <Text>캠페인 진행 일자: {item}</Text>
              <Text style={{fontSize: 40}}>캠페인 제목</Text>
              <Text style={{fontSize: 20}}>0000.00.00 ~ 0000.00.00</Text>
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