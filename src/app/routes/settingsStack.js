import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Settings from '../components/settings';
import HeaderLeft from '../components/shared/headerLeft';
import HeaderRight from '../components/shared/headerRight';

const screens = {
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Settings',
      headerLeft: <HeaderLeft navigationProps={navigation} />,
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
};

const SettingsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#46c1bd',
    },
    headerTintColor: '#fff',
  },
});

export default SettingsStack;
