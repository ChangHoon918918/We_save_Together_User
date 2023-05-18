// Image.js
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { Pressable, Text, View, TextInput,TouchableOpacity, Image, Button} from "react-native";
// ...
 
import{ 
  Avatar, Avatar_Edit,
} from './../components/styles';
const MyProfileImage = ({ url, onChangePhoto }) => {
  // photo 입력받는 button을 눌렀을 때 실행되는 함수
  const _handlePhotoBtnPress = async () => {
    // image library 접근에 대한 허가 필요 없음
    // ImagePicker를 이용해 Image형식의 파일을 가져온다
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    
 
    // cancelled가 아닐 때 가져온 사진의 주소로 onChangePhoto
    if (!result.canceled) {
      onChangePhoto(result.assets[0].uri);
    }
  };
 
  return (
    <View style={{ width: 150, height: 150, alignItems: 'center'}}>
      <Avatar_Edit source={{ uri: url }} />
      <TouchableOpacity style={{width: 120, height: 30, marginTop: -10, marginLeft: 100, borderRadius: 10, borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0F0E1'}}onPress={_handlePhotoBtnPress}>
        <Text>프로필 사진 변경</Text>
      </TouchableOpacity>
    </View>
  );
};
 
export default MyProfileImage;
