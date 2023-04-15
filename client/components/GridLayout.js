import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function GridLayout() {
  return (
    <ScrollView>
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/5, margin: 10}}>
      <View style={styles.body}/>
      <View style={styles.body}/>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/5, margin: 10}}>
      <View style={styles.body}/>
      <View style={styles.body}/>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/5, margin: 10}}>
      <View style={styles.body}/>
      <View style={styles.body}/>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/5, margin: 10}}>
      <View style={styles.body}/>
      <View style={styles.body}/>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/5, margin: 10}}>
      <View style={styles.body}/>
      <View style={styles.body}/>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: windowWidth/1.2, height: windowHeight/5, margin: 10}}>
      <View style={styles.body}/>
      <View style={styles.body}/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
  
      justifyContent: 'center',
      padding: 20,
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