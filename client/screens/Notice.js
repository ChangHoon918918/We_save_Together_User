import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const tabs = ["1번", "2번", "3번", "4번", "5번","6번", "7번","8번","9번"];

export default function Notice() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={{marginTop: 30}}>
      {
        tabs.map((item)=>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/6, margin: 10}}>
        <View style={styles.body}>
          <View>
            <Text>공지: {item}</Text>
            <Text style={{fontSize: 20}}>캠페인 제목</Text>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
      height: 60,
      backgroundColor: '#ffffff',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    title: {
      color: '#000',
      fontSize: 24,
      fontWeight: 'bold',
    },
    body: {
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
    text: {
      fontSize: 16,
      color: '#000',
    },
    footer: {
      flexDirection: "row",
      marginLeft:100,
      justifyContent: 'space-around',
      paddingBottom: 10
    }, 
    fotterElement: {
      backgroundColor: '#FFF1D7',
      shadowColor: "#A01900", 
      shadowOpacity: 0.1,
      shadowOffset: { width: 3, height: 3 }, 
      elevation: 9,
      borderRadius:20,
    },
    case1: {
      flex: 1,
    },
  
  });