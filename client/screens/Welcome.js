import React from 'react';
import { StatusBar } from 'expo-status-bar';

import{ 
    InnerContainer, 
    PageTitle, 
    SubTitle, 
    StyledFormArea, 
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles';

const Welcome = ({navigation, route}) => {
    const {name, email} = route.params;


    return (
        <>
            <StatusBar style="light" />
            <InnerContainer>
                <WelcomeImage  resizeMode="cover" source={require('./../assets/img/img2.png')}/>
                <WelcomeContainer>
                    <PageTitle welcome={true}>어서오세용~</PageTitle>
                    <SubTitle welcome={true}>{name}</SubTitle>
                    <SubTitle welcome={true}>{email}</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/img/img1.png')}/>
                        <Line />
                        <StyledButton onPress={() => {navigation.navigate('Login')}}>
                            <ButtonText>로그아웃</ButtonText>
                        </StyledButton>                   
                  </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Welcome;