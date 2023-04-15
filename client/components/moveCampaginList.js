import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Pressable } from 'react-native';

const moveCamapginList = (currentTab, setCurrentTab, title, navigation) => {
    return (
  
      <TouchableOpacity onPress={() => {
        if (title == "캠페인 전체 목록 바로 가기 >") {
            {navigation.navigate('CampaginView')}
        } else {
          setCurrentTab(title)
        }
      }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            
            color: currentTab == title ? "#5359D1" : "black"
          }}>{title}</Text>
      </TouchableOpacity>
    );
  }

export default moveCamapginList;