import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from '../screens/CustomSideBarMenu';
import Settings from '../screens/Settings';
import NotificationScreen from '../screens/NotificationScreen';
import MyDonations from '../screens/MyDonationScreen';
import MyRecievedBookScreen from '../screens/MyRecievedBookScreen';
import {Icon} from 'react-native-elements';


export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
        navigationOptions: {
        drawerIcon: <Icon name="home" type="fontawesome5" />,
        drawerLabel: 'Home',
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        drawerIcon: <Icon name="settings" type="fontawesome5" />,
        drawerLabel: 'Settings',
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        drawerIcon: <Icon name="bell" type="font-awesome" />,
        drawerLabel: 'Notifications',
      },
    },
    MyDonations: {
      screen: MyDonations,
      navigationOptions: {
        drawerIcon: <Icon name="gift" type="font-awesome" />,
        drawerLabel: 'My Donations',
      },
    },
    RecievedBook: {
      screen: MyRecievedBookScreen,
navigationOptions: {
        drawerIcon: <Icon name="gift" type="font-awesome" />,
        drawerLabel: 'Recieved Books',
      },
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
