import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import FBScreen from './screens/facebookScreen';
import IGScreen from './screens/instagramScreen';


export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FB: {screen:FBScreen},
  Instagram: {screen:IGScreen}

});
const AppContainer = createAppContainer(TabNavigator);