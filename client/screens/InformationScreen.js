
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const InformationScreen = ({ navigation }) => {

  const [buttonColor, setButtonColor] = useState('#FFF1D7');
  
  const handleButtonPress = () => {
    setButtonColor('green');

  }
  

  const [roomNum, setRoomNum] = useState(0)
  
  const rooms = [
    {
      id1: "WE 포인트란?",
      desc1: "• 사용 가능한 포인트와 가용 예정 포인트를 합산한포인트를 WE 포인트라고 합니다.",

      id2: "사용 가능 포인트란?",
      desc2: "• 적립이 이루어지고 사용 가능한 상태로 전환된포인트를 말합니다. shop에서 사용이 가능한 포인트입니다.",

      id3: "가용 예정 포인트란?",
      desc3: "• 적립은 이루어졌으나, 아직 사용 가능한 상태로 전환되지 않은 포인트를 말합니다.\n일반적으로 적립 다음날 가용 포인트로 전환됩니다. WE 포인트는 일단위로 가용 예정 포인트에서 사용 가능 포인트로 전환됩니다.",

      id4: "소멸 예정 포인트란?",
      desc4: "• 유효기간의 경과로 소멸이 예상되는 포인트입니다.\nWE 포인트 사용 시 남은 유효기간이 짧은 순서로 차감되므로, 포인트 소멸을 최대한 방지할 수 있습니다.",
    },

    {
      id1: "누적 봉사 시간이란?",
      desc1: "• 총 봉사 시간과 지급 예정 시간를 합산한 시간을 누적 봉사 시간이라고 합니다.",
      id2: "총 시간이란?",
      desc2: "• 봉사활동 인정 시간이 지급 완료된 시간입니다.",
      id3: "지급 예정 시간이란?",
      desc3: "• 봉사활동이 완료되어 기관의 봉사활동 인정 시간 지급을 기다리는 상태인 봉사시간의 총량입니다.",
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => { navigation.pop() }}>
          <AntDesign name="closecircleo" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>

      <TouchableOpacity point
          onPress={() => setRoomNum(0)} >
            <View style={{
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            width:75,
            height:50,
            backgroundColor: buttonColor, 
            padding: 10           
            }}>
              <MaterialCommunityIcons name="file-powerpoint-box-outline" size={30} color="black" />
            </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setRoomNum(1)} >
            <View style={{
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            width:75,
            height:50,            
            }}>
              <FontAwesome name="leaf" size={30} color="black" />
            </View>
        </TouchableOpacity>

               
      </View>
      

      <View style={styles.body}>
        <Text style={styles.title}>{rooms[roomNum].id1}</Text>
        <Text>{rooms[roomNum].desc1}</Text>
        <Text></Text>

        <Text style={styles.title}>{rooms[roomNum].id2}</Text>
        <Text>{rooms[roomNum].desc2}</Text>
        <Text></Text>

        <Text style={styles.title}>{rooms[roomNum].id3}</Text>
        <Text>{rooms[roomNum].desc3}</Text>
        <Text></Text>

        <Text style={styles.title}>{rooms[roomNum].id4}</Text>
        <Text>{rooms[roomNum].desc4}</Text>
      </View>
      <View style={styles.case1} />
      
    </View>
  );
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

export default InformationScreen;