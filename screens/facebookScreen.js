import React from 'react';
import {View, Text} from 'react-native';

export default class FBScreen extends React.Component{
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
          Facebook
        </Text>
      </View>
    );
  }
}