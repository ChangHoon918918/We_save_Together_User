import React, { useState } from 'react';
import { FlatList,TextInput,TouchableOpacity,Text,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DATA } from "./data"



const reView = ({ navigation }) => {
    const [writeMode, setWriteMode] = useState(false);
    const [txt,setTxt] = useState('');


    const [memos, setMemos] = useState(DATA);
    const [idx, setIdx] = useState(DATA.length + 1)

    const [reply, setReply] = useState(DATA);

    const addMemo = ()=>{
        let saveText = {id:idx, memo:txt, reply:txt};
        //setMemos(prev=>[...prev,saveText])
        DATA.push(saveText)
        setWriteMode(false);

        setIdx(idx+1)
    }

    const renderMemo = ({item}) =>{
        return(
            <View style={{padding:10, 
            borderBottomColor:'#ddd',
            borderBottomWidth:1, 
            flexDirection:'row',
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            width:350,
            height:100,
            backgroundColor: "#FFF1D7",
            margin:5 }}>
                <Text style={{marginRight: 10}}>{item.id}</Text>
                <Text>{item.memo}</Text>
                <Text>{item.reply}</Text>

            </View>
        )
    }


    if(writeMode){
        return (
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1, backgroundColor:'#9c0'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity style={{padding:15,}} onPress={()=>setWriteMode(false)}>
                    <Text style={{fontSize:18,}}>취소</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{padding:15,}} onPress={()=>addMemo()} >
                    <Text style={{fontSize:18,}}>저장</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex:1, backgroundColor:'#fff'}}>
                <TextInput style={{backgroundColor:'#eee', flex:1, padding:10}} onChangeText={text=>setTxt(text)} multiline/>
            </View>
        </View>
        </SafeAreaView>
    );
    }

    return (

        <SafeAreaView style={{flex:1, backgroundColor:'#FFF1D7'}}>
            <View style={{}}>
                <Text style={{fontSize:20,  textAlign:'center'}}>리뷰</Text>
            </View>
            <View style={{flex:1, backgroundColor:'#fff'}}>

            <View style={{position:'absolute', right:20, bottom:20,zIndex:10, }}>
                <View style={{width:50, height:50, backgroundColor:'tomato', borderRadius:25,
             alignItems:'center', justifyContent:'center'}}>

                <TouchableOpacity onPress={()=>setWriteMode(true)}>
                    <Text style={{color:'#FFF1D7'}}>작성</Text>
                </TouchableOpacity>

            </View>
            </View>

            <View style={{flex:1, borderRadius: 10,padding: 10,}}>

                <FlatList data={memos} renderItem={renderMemo} style={{flex:1}}/>

            </View>
            </View>
        </SafeAreaView>
    );
    }

export default reView;
