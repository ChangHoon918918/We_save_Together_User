import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import{ StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, 
    StyledFormArea, LeftIcon, StyledInputLabel, StyledSearchInput, RightIcon,
    StyledButton, ButtonText, Colors, MsgBox, Line,
    ExtraView, ExtraText, TextLink, TextLinkContent
} from './../components/styles';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
const {brand, darkLight, primary} = Colors;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Search() {
  return (
    <View style={styles.container}>
        <View style={{marginTop: windowWidth/9}}>
            <Text style={{fontSize: 30, marginLeft: 60}}>통합 검색</Text>
        </View>
        <View style={{marginLeft:15}}>
            <MyTextInput 
                icon = "search"
                placeholder="검색어를 입력해주세요"
                placeholderTextColor = {darkLight}
                keyboardType="email-address"
            />
        </View>
        <View style={{marginLeft:15}}>
            <View style={{backgroundColor: '#F2F2F2', width: windowWidth-30, height: windowHeight/2, borderRadius: 10}}>
                <Text style={{fontSize: 30, margin: 10, color: '#7E7E7E'}}>최근 검색어</Text>
            </View>
        </View>
      <StatusBar style="auto" />
    </View>
  )
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (<View>
            <RightIcon>
                <Octicons name={icon} size={30} color={'black'}/>
            </RightIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledSearchInput {...props} />
        </View>);
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
    },
  });
  