import React from 'react';
import { TouchableOpacity, Text, View, Image} from 'react-native';

//const pointIcon = require('../../assets/img/AdEx.png')
const Button = ({title, onPress, color, back}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#FFF1D7',
            alignItems: 'center',
            width:120,
            height:60,
            borderBottomWidth: 1,
           
        }}>
            <Text style={{color: color, fontSize: 23, fontWeight: 'bold',}}>{title }</Text>
        </View>
    </TouchableOpacity>
  );
}

export default Button;

