import { StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList, Image, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

import GridLayout from '../components/GridLayout';
import ListLayout from '../components/ListLayout';
import DetailLayout from '../components/DetailLayout';
import allCampagin from './../assets/img/allCampagin.png';
import QnA from './../assets/img/QnA.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const listTab = [
  {
    status: 'List'
  },
  {
    status: 'Grid'
  },
  {
    status: 'Deatil'
  }
]
const data = [
  {
    name: 'DeatilInfo',
    status: 'Deatil'
  },
  {
    name: 'GridInfo',
    status: 'Grid'
  }
]
const CampaginView = ({ navigation }) => {
  const [status, setStatus] = useState('List')
  const [datalist, setDatalist] = useState(data)
  const setStatusFilter = status => {
    if(status !== 'List'){
      setDatalist([...data.filter(e => e.status === status)])
    }else{
      setDatalist(data)
    }
    setStatus(status)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: 'flex-end'}}>
      <View style={styles.listTab}>
            <TouchableOpacity 
              style={[styles.btnTab, status ==='List' && styles.btnTabActive]}
              onPress= {() => setStatusFilter('List')}
            >
              <FontAwesome name="leaf" size={30} color="black" />
            </TouchableOpacity> 

            <TouchableOpacity 
              style={[styles.btnTab, status ==='Grid' && styles.btnTabActive]}
              onPress= {() => setStatusFilter('Grid')}
            >
              <AntDesign name="closecircleo" size={30} color="black" />
            </TouchableOpacity> 

            <TouchableOpacity 
              style={[styles.btnTab, status ==='Deatil' && styles.btnTabActive]}
              onPress= {() => setStatusFilter('Deatil')}
            >
              <MaterialCommunityIcons name="file-powerpoint-box-outline" size={30} color="black" />
            </TouchableOpacity> 
      </View>
      </View>
      
      <FlatList 
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={status === 'List' ? ListLayout : status === 'Grid' ? GridLayout : DetailLayout}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listTab: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 40,
    alignContent: 'flex-end'
  },
  btnTab:{
    width: windowWidth/8,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 10,
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center'
  },
  textTab: {
    fontSize: 15
  },
  btnTabActive: {
    backgroundColor: '#FFF1D7'
  },
  textTabActive: {
    color: '#fff'
  },







});

export default CampaginView;