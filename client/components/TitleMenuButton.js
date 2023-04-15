import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Pressable } from 'react-native';

const TitleMenuButton = (currentTab, setCurrentTab, title, image, navigation, showMenu) => {
    return (
  
      <TouchableOpacity onPress={() => {
        if (title == "QnA") {
            {navigation.navigate('InformationScreen')}
        } else {
          setCurrentTab(title)
        }
      }}>
            <View style={{
              flexDirection: "row",
              alignItems: 'center',
              paddingVertical: 8,
              paddingLeft: 8
            }}>
      
              <Image source={image} style={{
                width: 20, height: 20,
                tintColor: currentTab == title ? "#5359D1" : "black"
              }}></Image>
      
              <Text style={{
                fontSize: 13,
                fontWeight: 'bold',
                paddingLeft: 7,
                color: currentTab == title ? "#5359D1" : "black"
              }}>{title}</Text>
      
            </View>
      </TouchableOpacity>
    );
}

export default TitleMenuButton;