import styled from "styled-components";
import {View, Text, Image, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#AED0AF",
    green : "#10B981",
    red: "#EF4444",
    bread: "#6D28D9"
};

const {primary, secondary, tertiary, darkLight, brand, green, red, bread} = Colors;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 40}px;
    background-color: ${primary};
`

export const StyledContainer2 = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 40}px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
    background-color:#C4E1C5;
`;

export const PageLogo = styled.Image`
    width: 300px;
    height: 285px;
`;

export const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
    margin-right: 10px;
`;

export const Avatar_Edit = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 150px;
    border-width: 5px;
    border-color: ${secondary};
    margin-bottom: 10px;
    
    margin-right: 10px;
`;

export const Poster_PV = styled.Image`
    width: 250px;
    height: 350px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 15px;
`;

export const PosterList_PV = styled.Image`
    width: ${windowWidth/3};
    height: ${windowHeight/4};
    margin: 10px;
    border-radius: 15px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 15px;
`;

export const AdView = styled.Image`
    height: ${windowHeight/7};
`;

export const WelcomeImage = styled.Image`
    height: 50%;
    min-width: 100%;

`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;

    ${(props) => props.welcome && `
        font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};

    ${(props) => props.welcome && `
        margin-bottom: 5px;
        font-weight: normal;
    `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    align-items: center;
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary}; 
`;

export const StyledSearchInput = styled.TextInput`
    background-color: ${'white'};
    width: ${windowWidth-30}px;
    align-items: center;
    padding: 15px;
    padding-right: 55px;
    border-radius: 10px;
    border-width: 2px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary}; 
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    text-align: center;
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${'#000000'};
    font-size: 16px;

    ${(props) => props.google == true && `
        padding-left: 25px;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${props => props.type == 'SUCCESS' ? green : red};
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${bread};
    font-size: 15px;
`;