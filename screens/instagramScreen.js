import React from 'react';
import {View, Text} from 'react-native';

export default class IGScreen extends React.Component{
  render(){
    return(
      <View>
        <Text
        style = {{
          fontSize:22,
          alignSelf:'center',
          alignItems:'center',
          fontWeight:'bold'
        }}>
          Instagram
        </Text>
      </View>
    );
  }
}