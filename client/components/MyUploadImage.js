// Image.js
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { Pressable, Text, View, TextInput,TouchableOpacity, Image, Button, Dimensions} from "react-native";
// ...
 
import { Complete_MAIN } from "./styles";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MyUploadImage = ({ url, onChangePhoto }) => {
  // photo 입력받는 button을 눌렀을 때 실행되는 함수
  const _handlePhotoBtnPress = async () => {
    // image library 접근에 대한 허가 필요 없음
    // ImagePicker를 이용해 Image형식의 파일을 가져온다
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    
 
    // cancelled가 아닐 때 가져온 사진의 주소로 onChangePhoto
    if (!result.canceled) {
      onChangePhoto(result.assets[0].uri);
    }
  };
 
  return (
    <View style={{ width: windowWidth, height: windowHeight/1.3, alignItems: 'center'}}>
      <Complete_MAIN resizeMode="cover" source={{ uri: url }}/>
      <TouchableOpacity style={{width: 120, height: 60, borderRadius: 10, borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0F0E1'}}onPress={_handlePhotoBtnPress}>
        <Text>사진 선택</Text>
      </TouchableOpacity>
    </View>
  );
};
 
export default MyUploadImage;
