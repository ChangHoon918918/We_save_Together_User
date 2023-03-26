import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import{ 
    StyledContainer2, 
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
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';


//Colors
const {brand, darkLight, primary} = Colors;

// Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

// keyboard avoiding view
import KeyboardAvoidingWrapper  from './../components/KeyboardAvoidingWrapper';

// api client
import axios from 'axios';

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));

    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    // Actual date of birth to be sent
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }

    // form handling
    const handleSignup = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = 'http://192.168.45.169:5000/api/users/register' //(locahhost -> 로컬 와이파이 주소)
        axios
        .post(url, credentials)
        .then((response) => {
            const result = response.data;
            const {message, status, data, success, userId, name, email} = result;

            if(success !== true) {
                handleMessage(message, loginSuccess);
            } else {
                navigation.navigate('Welcome', {name, email});
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
        <StyledContainer2>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>우리 함께 해요</PageTitle>
                <SubTitle>회원 가입</SubTitle>

                {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode= 'date'
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
                )}

                <Formik 
                    initialValues = {{ name: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        values = {...values, dateOfBirth: dob};
                        if(values.email == '' || values.password == '' || values.name == '' || values.dateOfBirth == '' || values.confirmPassword == ''){
                            handleMessage('Please fill all the fileds');
                            setSubmitting(false);
                        } else if(values.password !== values.confirmPassword) {
                            handlerMessage('Password do not match');
                            setSubmitting(false);
                        }
                        else {
                            handleSignup(values, setSubmitting);
                        }
                    }}
                >
                  {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFormArea>
                        <MyTextInput 
                            label="성명"
                            icon = "person"
                            placeholder="성명"
                            placeholderTextColor = {darkLight}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />

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
                            label="생년월일"
                            icon = "calendar"
                            placeholder="YYYY - MM - DD"
                            placeholderTextColor = {darkLight}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={dob ? dob.toDateString() : ''}
                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker}
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


                        <MyTextInput 
                            label="비밀번호 확인"
                            icon = "lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor = {darkLight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword = {setHidePassword}
                        />
                        
                        <MsgBox type={messageType}>{message}</MsgBox>

                        {!isSubmitting && (
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>가입하기</ButtonText>
                            </StyledButton>
                         )}

                        {isSubmitting && (<StyledButton disabled={true}>
                            <ActivityIndicator size = "large" color={primary}/>
                        </StyledButton> 
                        )}
                        <Line />
                        <ExtraView>
                            <ExtraText>이미 계정이 있으신가요?</ExtraText>
                            <TextLink onPress={() => navigation.navigate('Login')}>
                                <TextLinkContent>로그인 하기</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                  </StyledFormArea>
                  )}
                </Formik>
            </InnerContainer>
        </StyledContainer2>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (<View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props} />
                </TouchableOpacity>
            )}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>);
};

export default Signup;