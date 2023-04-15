import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Pressable } from 'react-native';

const TabButton = (currentTab, setCurrentTab, title, image, navigation, windowWidth) => {
    return (
  
      <Pressable onPress={() => {
        if (title == "LogOut") {
            {navigation.navigate('Login')}
        }
        else if(title == "전체 캠페인"){
            {navigation.navigate('CampaginView')}
        }
        else if(title == "My 가입 정보"){
          {navigation.navigate('MyInfoScreen')}
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