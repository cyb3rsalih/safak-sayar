import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { MenuProvider, Menu } from 'react-native-popup-menu';

import HomeScreen from './screens/HomeScreen'
import AyarlarScreen from './screens/AyarlarScreen'

const AppNavigator = createStackNavigator({
  
  Giris: {
    screen: HomeScreen
  },
  Ayarlar:{
    screen: AyarlarScreen
  },
  
});

const AppContainer =  createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return(
      <MenuProvider>
        <AppContainer/>
      </MenuProvider>
    )
  }
}