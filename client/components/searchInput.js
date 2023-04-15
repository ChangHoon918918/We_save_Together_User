import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Pressable } from 'react-native';

const searchInput = (currentTab, setCurrentTab, title, image, navigation, showMenu, windowWidth) => {
    return (
  
      <Pressable  onPress={() => {
        if (title == "통합검색") {
          {navigation.navigate('Search')}
        } else {
          setCurrentTab(title)
        }
      }}>
            <View elevation={10} style={{
                width: windowWidth/1.7,
                flexDirection: "row",
                alignItems: 'center',
                paddingVertical: 8,
                backgroundColor: '#fff',
                paddingLeft: 5,
                paddingRight: 20,
                borderWidth: 1,
                borderRadius: 8,
                marginTop: 15
            }}>
      
              <Image source={image} style={{
                width: 20, height: 20,
              }}></Image>
      
              <Text style={{
                fontSize: 13,
                fontWeight: 'bold',
                paddingLeft: 7,
                color: 'gray'
              }}>{title}</Text>
      
            </View>
      </Pressable>
    );
  }

export default searchInput;