import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import BookDonate from '../screens/BookDonate'
import RecieverDetails from '../screens/RecieverDetails'


export const AppStackNavigator=createStackNavigator({
  BookDonateList:{
  screen:BookDonate,
  navigationOptions:{
    headerShown:false,
}  
  },
  RecieverDetails:{
    screen:RecieverDetails,
    navigationOptions:{
      headerShown:false,
    }
  }
},

{
  intialRouteName:'BookDonateList'
})