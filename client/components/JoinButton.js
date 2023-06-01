import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Pressable } from 'react-native';

const JoinButton = (currentTab, setCurrentTab, title, navigation, windowWidth, campagin_name, campagin_number, campagin_userId) => {
  return (

    <Pressable onPress={() => {
      if (title == "지금신청") {
          console.log(campagin_name, campagin_number)
          {navigation.navigate('MainTextView', {name: campagin_name.campagin_name, number: campagin_number.campagin_number, userId: campagin_userId.campagin_userId})}
          
      } else {
        setCurrentTab(title)
      }
    }}>
      <View elevation={10} style={{
        width: windowWidth/5,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
      }}>

        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: currentTab == title ? "#5359D1" : "black"
        }}>{title}</Text>

      </View>
    </Pressable>
  );
}

export default JoinButton;