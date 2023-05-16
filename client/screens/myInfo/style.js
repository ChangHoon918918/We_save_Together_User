import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'white', 
        paddingBottom: 150,
    },
    My_view : {
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
        borderLeftWidth : 1
    },
    Text_input : {
        flex : 5,
        marginLeft: 10,
        textAlignVertical: 'center',
        justifyContent: 'center'
    },
    Box1 : {
        marginTop: 50,    
    },
    Edit : {
        backgroundColor : '#AED0AA',
        marginRight : 5,
        paddingVertical : 7,
        paddingHorizontal : 25,
        borderWidth : 2,
        borderColor : '#7f9980',
        borderRadius : 10,        
    },
    separator: {
        marginTop: 50,
        marginVertical : 10,
      },
    Box2 : {
        flex:1,
        width:350,
        height:100,
    },

     
})

export default styles