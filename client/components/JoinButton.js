import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Pressable } from 'react-native';

const JoinButton = (currentTab, setCurrentTab, title, navigation, windowWidth) => {
  return (

    <Pressable onPress={() => {
      if (title == "지금신청") {
          {navigation.navigate('Feed')}
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