import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'white', 
        paddingBottom: 150,
    },
    CodeforDCU_Tree : {
        marginLeft: 25,
        marginBottom : 15,
    },
    ID_view : {
        flexDirection : 'row',
        borderWidth : 2,
        borderColor : '#7f9980',
        width : 300,
        height :50,
        borderRadius : 27,
        marginBottom : 7,
    },
    Pw_view : {
        flexDirection : 'row',
        borderWidth : 2,
        borderColor : '#7f9980',
        width : 300,
        height :50,
        borderRadius : 27,
        marginBottom : 7,
    },
    ID : {
        flex : 1,
        marginLeft : 7,
        marginVertical : 10,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 1,
        borderLeftColor : 'white',
        borderTopColor : 'white',
        borderBottomColor : 'white',
        borderRightColor : '#7f9980',
    },
    Pw : {
        flex : 1,
        marginLeft : 7,
        marginVertical : 10,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 1,
        borderLeftColor : 'white',
        borderTopColor : 'white',
        borderBottomColor : 'white',
        borderRightColor : '#7f9980',
    },
    Input_ID : {
        flex : 5,
        marginLeft: 10,
    },
    Input_Pw : {
        flex : 5,
        marginLeft: 10,
    },
    text_ID : {
        fontSize : 17,
    },
    text_Pw : {
        fontSize : 17,
    },
    Pw_show_Icon : {
        flex : 1,
        marginRight : 12,
        marginTop : 10,
    },
    signContainer : {
        flexDirection : 'row',
    },
    signIn_pressable : {
        backgroundColor : '#AED0AF',
        marginRight : 5,
        paddingVertical : 14,
        paddingHorizontal : 50,
        borderWidth : 2,
        borderColor : '#7f9980',
        borderRadius : 27,
    },
    signUp_pressable : {
        backgroundColor : '#AED0AF',
        marginLeft : 5,
        paddingVertical : 14,
        paddingHorizontal : 50,
        borderWidth : 2,
        borderColor : '#7f9980',
        borderRadius : 27,
    },
    signIn : {

    },
    signUp : {

    },
})

export default styles