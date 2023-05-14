import { StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, {useState} from 'react'
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const tabs = [{id: "1번"}, {id: "2번"}, {id: "3번"}, {id: "4번"}, {id: "5번"}, {id: "6번"}, {id: "7번"}, {id: "8번"}, {id: "9번"},];

const Item = ({id}) => (

  <View style={{width: windowWidth/2.3, height: windowHeight/4, marginTop: 10}}>
  <View style={Girdlayout_styles.Girdlayout_body}>
  <View style={{alignItems: 'center', justifyContent: 'center'}}>
    <Text>캠페인 진행 일자: {id}</Text>
  </View>
  
  <View style={{alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 30}}>캠페인 제목</Text>
  </View>

  <View style={{alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 13}}>0000.00.00 ~ 0000.00.00</Text>
  </View>

  <View style={{alignItems: 'flex-end', marginTop: 30}}>
  <TouchableOpacity>
      <Text style={{fontSize: 20}}>보기</Text>
    </TouchableOpacity>
  </View>
  </View> 
  </View>
);

export default function GridLayout() {
  return (
    <ScrollView style={{marginTop: 10}}>
      <View style={{paddingHorizontal: windowWidth/20}}>
        <FlatList
          data={tabs}
          renderItem={({item}) => <Item id={item.id} />}
          keyExtractor={(item, index) => index}
          numColumns={2}
        />
      </View>
    </ScrollView>
  )
}

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