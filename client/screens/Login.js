import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import{ 
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle, 
    SubTitle, 
    StyledFormArea, 
    LeftIcon, 
    StyledInputLabel, 
    StyledTextInput, 
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles';
import {View, ActivityIndicator} from 'react-native';



//Colors
const {brand, darkLight, primary} = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper  from './../components/KeyboardAvoidingWrapper';

// API client
import axios from 'axios';

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handlerLogin = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = 'http://192.168.45.169:5000/api/users/login' //(locahhost -> 로컬 와이파이 주소)
        axios
        .post(url, credentials)
        .then((response) => {
            const result = response.data;
            const {message, status, data, loginSuccess, userId, name, email} = result;

            if(loginSuccess !== true) {
                handleMessage(message, loginSuccess);
            } else {
                navigation.navigate('Welcome', {userId, name, email});
            }
            setSubmitting(false);
        })
        .catch(error => {
            console.log(error.JSON());
            setSubmitting(false);
            handleMessage("An error occured. Check your network and try again");
        })
    }

    const handleMessage = (message, type = 'FAILED') =>{
        setMessage(message);
        setMessageType(type);
    }

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/img1.png')}/>
                <PageTitle>우리 함께 해요</PageTitle>
                <SubTitle>로그인</SubTitle>

                <Formik 
                    initialValues = {{email: '', password: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        if(values.email == '' || values.password == ''){
                            handleMessage('Please fill all the fileds');
                            setSubmitting(false);
                        } else {
                            handlerLogin(values, setSubmitting);
                        }
                    }}
                >
                  {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFormArea>
                        <MyTextInput 
                            label="이메일 주소"
                            icon = "mail"
                            placeholder="hn016768@gmail.com"
                            placeholderTextColor = {darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />

                        <MyTextInput 
                            label="비밀번호"
                            icon = "lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor = {darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword = {setHidePassword}
                        />
                        <MsgBox type={messageType}>{message}</MsgBox>
                        {!isSubmitting && (<StyledButton onPress={handleSubmit}>
                            <ButtonText>로그인</ButtonText>
                        </StyledButton>
                         )}

                        {isSubmitting && (<StyledButton disabled={true}>
                            <ActivityIndicator size = "large" color={primary}/>
                        </StyledButton> 
                        )}

                        <Line />
                        <ExtraView>
                            <ExtraText>계정이 없으신가요?</ExtraText>
                            <TextLink onPress={() => navigation.navigate("Signup")}>
                                <TextLinkContent>회원가입 하기</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                  </StyledFormArea>
                  )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (<View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>);
};

export default Login;