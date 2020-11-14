import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Facebook from './screens/facebookScreen';
import Instagram from './screens/instagramScreen';


export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FB: {screens:Facebook},
  Instagram: {screens:Instagram}

});
const AppContainer = createAppContainer(TabNavigator);