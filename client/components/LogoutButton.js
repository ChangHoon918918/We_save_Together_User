import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Pressable } from 'react-native';

const LogoutButton = (currentTab, setCurrentTab, title, image, navigation, showMenu) => {
    return (
  
      <TouchableOpacity onPress={() => {
        if (title == "LogOut") {
            {navigation.navigate('Login')}
        } else {
          setCurrentTab(title)
        }
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: '#C4E1C5',
          paddingLeft: 8,
          paddingRight: 25,
          borderRadius: 8,
          borderWidth: 1,
          marginTop: 15
        }}>
  
          <Text style={{
            fontSize: 13,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "black"
          }}>{title}</Text>
  
        </View>
      </TouchableOpacity>
    );
  }
  
  export default LogoutButton;