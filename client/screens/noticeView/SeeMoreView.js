import React from 'react';
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const SeeMoreView = ({ route }) => {
  const { notice } = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.header}/>

        <View style={styles.body}>
            <Text style={{fontSize: 24,fontWeight: 'bold'}}>{notice.title}</Text>
            <Text>{notice.description}</Text>
        </View>
  </View>
  );
};

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
    },
    text: {
      fontSize: 16,
      color: '#000',
    },
    footer: {
      height: 60,
      backgroundColor: '#FFDE9D',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      borderRadius:15,
      shadowOpacity: 0.1,
      shadowOffset: { width: 3, height: 3 }, 
      elevation: 5,
      width:150,
      height:50,
    }, 
    case1: {
      flex: 1,
    },
  
  });

export default SeeMoreView;