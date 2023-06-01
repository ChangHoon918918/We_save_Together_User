
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity ,SafeAreaView, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
// 공지 데이터
const notices = [
  { id: 1, title: '박보근 생년월일 공지 합니다.', description: '나는 1999년 4월 29일 오후 3시에 태어나 1남1녀 중 장남으로......하 귀찮아' },
  { id: 2, title: '캡스톤 왜 하는건지 공지 합니다.', description: '나도 몰라 슈벌 ......' },
  { id: 3, title: '정처기 필기 불합격 하면 삭발해 논란', description: '진짜 떨어지면 어키냐 ㅜㅜ 야발 자살 한다' },
]// 더 추가 하셔서 사용  DB연결 해줭 창훈애몽  !!!!!!!!!!!!!!!!!!!!

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NoticeScreen = ({ navigation }) => {
  const handleNoticePress = (notice) => {
    navigation.navigate('SeeMoreView', { notice });
  };

  const renderNoticeItem = ({ item }) => (
    <View style  ={styles.item}> 
    <TouchableOpacity onPress={() => handleNoticePress(item)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

          <View style={styles.header}>
          <TouchableOpacity 
              onPress={() => { navigation.reset({ routes: [{ name: 'Welcome' }] }) }}>
              <AntDesign name="leftcircleo" size={30} color="black" />
          </TouchableOpacity>
          <View style={{justifyContent: 'center'}}>
          <Text style={styles.text}>공지사항</Text>
          </View>
        </View>


        <FlatList
          data={notices}
          renderItem={renderNoticeItem}
          keyExtractor={(item) => item.id.toString()}
        />

  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 70,
    backgroundColor: '#FFF1D7',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 0,
    flexDirection: 'row',
    marginTop: windowHeight/20
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
    flexDirection: "row"
  },
  footerText: {
    fontSize: 16,
  },
  box1: {
    height:60,
    backgroundColor:'#FFF1D7',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#A01900", 
    shadowOpacity: 0.1,
    shadowOffset: { width: 3, height: 3 }, 
    elevation: 9,
    borderRadius:20,
    
  },
  separator: {
    marginVertical : 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
});
export default NoticeScreen;