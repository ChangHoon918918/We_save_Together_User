import React from 'react';

import {Colors} from './../components/styles';
const {primary, tertiary} = Colors;

// React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, createStackNavigator } from '@react-navigation/stack';
//screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Feed from '../screens/Feed';
import Search from '../screens/Search';
import CampaginView from '../screens/CampaginView';
import InformationScreen from '../screens/InformationScreen';
import MyInfoScreen from '../screens/myInfo/MyInfoScreen';
import UpdateMyInfoScreen from '../screens/myInfo/UpdateMyInfoScreen';
import TimeStampCamera from '../screens/TimeStampCamera';
import Article from '../screens/Article';
import Notice from '../screens/Notice';
import MainTextView from '../screens/mainText/MainTextView';
import NoticeScreen from '../screens/noticeView/NoticeScreen';
import SeeMoreView from '../screens/noticeView/SeeMoreView';
import MyCampagin from '../screens/MyCampagin';
import DoingTextView from '../screens/mainText/DoingTextView';

const Stack = createStackNavigator();

//credentials context
import { CredentialsContext } from '../components/CredentialsContext'; 

const RootStack = () => {
    return(
        <CredentialsContext.Consumer>
        {({storedCredentials}) => (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 10
                    }
                }}
                initialRouteName="Login"
            >
            {storedCredentials ? (
                <>
                <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome}/>
                <Stack.Screen options={{headerShown: false}} name="CampaginView" component={CampaginView}/>
                <Stack.Screen options={{headerShown: true}} name="Feed" component={Feed}/>
                <Stack.Screen options={{headerShown: true}} name="Search" component={Search}/>
                <Stack.Screen options={{headerShown: true}} name="Notice" component={Notice}/>
                <Stack.Screen options={{headerShown: true}} name="TimeStampCamera" component={TimeStampCamera}/>
                <Stack.Screen options={{headerShown: false}} name="InformationScreen" component={InformationScreen}/>
                <Stack.Screen options={{headerShown: false}} name="UpdateMyInfoScreen" component={UpdateMyInfoScreen}/>
                <Stack.Screen options={{headerShown: false}} name="MyInfoScreen" component={MyInfoScreen}/>
                <Stack.Screen options={{headerShown: false}} name="MainTextView" component={MainTextView}/>
                <Stack.Screen options={{headerShown: false}} name="NoticeScreen" component={NoticeScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SeeMoreView" component={SeeMoreView}/>
                <Stack.Screen options={{headerShown: false}} name="MyCampagin" component={MyCampagin}/>
                <Stack.Screen options={{headerShown: false}} name="DoingTextView" component={DoingTextView}/>
                
                
                </>
                ) : (<>
                    <Stack.Screen name="Signup" component={Signup}/>
                    <Stack.Screen name="Login" component={Login}/>
                             
                </>
            )}
            </Stack.Navigator>
        </NavigationContainer>
        )}
        </CredentialsContext.Consumer>
    )
}

export default RootStack;