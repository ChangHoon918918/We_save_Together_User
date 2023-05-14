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
                <Stack.Screen name="Feed" component={Feed}/>
                <Stack.Screen name="Search" component={Search}/>
                <Stack.Screen name="CampaginView" component={CampaginView}/>
                <Stack.Screen options={{headerShown: true}} name="Notice" component={Notice}/>
                <Stack.Screen options={{headerShown: true}} name="TimeStampCamera" component={TimeStampCamera}/>
                <Stack.Screen options={{headerShown: false}} name="InformationScreen" component={InformationScreen}/>
                <Stack.Screen options={{headerShown: false}} name="MyInfoScreen" component={MyInfoScreen}/>
                <Stack.Screen options={{headerShown: false}} name="UpdateMyInfoScreen" component={UpdateMyInfoScreen}/>
                </>
                ) : (<>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Signup" component={Signup}/>         
                </>
            )}
            </Stack.Navigator>
        </NavigationContainer>
        )}
        </CredentialsContext.Consumer>
    )
}

export default RootStack;