import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Pressable } from 'react-native';
import React, {useState, useContext} from 'react';

// API client
import axios from 'axios';
import { CredentialsContext2 } from './CredentialsContext2';
import { local_server_url } from '../assets/server_url/server_url';
const server_url = local_server_url;

const TabButton = (currentTab, setCurrentTab, title, image, navigation, windowWidth) => {
    const [campaginData, setData] = useState();

    //context
    const {storedCredentials2, setStoredCredentials2} = useContext(CredentialsContext2);
    return (
  
      <Pressable onPress={() => {
        if (title == "LogOut") {
            {navigation.navigate('Login')}
        }
        else if(title == "전체 캠페인"){
          {navigation.navigate('CampaginView', {campaginData})}
        }
        else if(title == "My 가입 정보"){
          {navigation.navigate('MyInfoScreen')}
        }
        else if(title == "공지사항"){
          {navigation.navigate('NoticeScreen')}
        }
        else if(title == "사진 찍기"){
          {navigation.navigate('TimeStampCamera')}
        }
        else if(title == "My 실시간 캠페인"){
          {navigation.navigate('MyCampagin')}
        }
        else {
          setCurrentTab(title)
        }
      }}>
        <View elevation={10} style={{
          width: windowWidth/3,
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: '#fff',
          paddingLeft: 5,
          paddingRight: 20,
          borderRadius: 8,
          marginTop: 15
        }}>
  
          <Image source={image} style={{
            width: 20, height: 20,
          }}></Image>
  
          <Text style={{
            fontSize: 12,
            fontWeight: 'bold',
            paddingLeft: 10,
            color: currentTab == title ? "#5359D1" : "black"
          }}>{title}</Text>
  
        </View>
      </Pressable>
    );
}

export default TabButton;