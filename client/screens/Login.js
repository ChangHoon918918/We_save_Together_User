import React, {useState, useContext} from 'react';
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

// async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//credentials context
import { CredentialsContext } from '../components/CredentialsContext';
import { local_server_url } from '../assets/server_url/server_url';
const server_url = local_server_url;

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    //context
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

    const handlerLogin = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = `${server_url}:5000/api/users/login` //(locahhost -> 로컬 와이파이 주소)
        axios
        .post(url, credentials)
        .then((response) => {
            const result = response.data;
            const {message, status, data, loginSuccess, user_id, name, email, address, phoneNumber} = result;

            if(loginSuccess !== true) {
                handleMessage(message, loginSuccess);
            } else {
                persistLogin({user_id, address, name, email, phoneNumber}, message, status);
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

    const persistLogin = (credentials, message, status) => {
        AsyncStorage.setItem('We_save_together', JSON.stringify(credentials))
        .then(() => {
            handleMessage(message, status);
            setStoredCredentials(credentials);
        })
        .catch((error) => {
            console.log(error);
            handleMessage('Persisting login failed');
        })
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
                    initialValues = {{user_id: '', password: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        if(values.user_id == '' || values.password == ''){
                            handleMessage('Please fill all the fileds');
                            setSubmitting(false);
                        } else {
                            handlerLogin(values, setSubmitting);
                        }
                    }}
                >
                  {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFormArea>
                        <MyTextInput 
                            label="ID"
                            icon = "person"
                            placeholder="ID"
                            placeholderTextColor = {darkLight}
                            onChangeText={handleChange('user_id')}
                            onBlur={handleBlur('user_id')}
                            value={values.user_id}
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