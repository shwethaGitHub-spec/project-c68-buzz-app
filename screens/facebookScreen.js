import React from 'react';
import {View, Text} from 'react-native';

export default class FBScreen extends React.Component{
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
          Facebook Screen
        </Text>
      </View>
    );
  }
}