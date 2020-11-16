import React from 'react';
import {View, Text} from 'react-native';

export default class IGScreen extends React.Component{
  render(){
    return(
      <View>
        <Text
        style = {{
          fontSize:30,
          alignSelf:'center',
          alignItems:'center',
          fontWeight:'bold',
          alignContent:'center',
          margin:300
        }}>
          Instagram Screen
        </Text>
      </View>
    );
  }
}