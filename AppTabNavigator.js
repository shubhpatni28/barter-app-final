import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonate';
import BookRequestScreen from '../screens/BookRequest';
import {AppStackNavigator} from './AppStackNavigator'

export const AppTabNavigator=createBottomTabNavigator({
  DonateBooks:{screen:AppStackNavigator,
  navigationOptions:{
    tabBarIcon:<Image source={require("../assets/books-cartoon-png-download-15501157-free-transparent-book-png-cartoon-history-png-900_500.jpg")} style={{width:20,height:20}}/>
  }},

  RequestBooks:{screen:BookRequestScreen,
  navigationOptions:{
    tabBarIcon:<Image source={require("../assets/gettyimages-165626020-170667a.jpg")} style={{width:20,height:20}}/>
  }}

  })

