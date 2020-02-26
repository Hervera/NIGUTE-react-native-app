import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Subscribe from '../components/subscribe';
import HeaderLeft from '../components/shared/headerLeft';
import HeaderRight from '../components/shared/headerRight';

const screens = {
  Subscribe: {
    screen: Subscribe,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Subscribe',
      headerLeft: <HeaderLeft navigationProps={navigation} />,
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
};

const SubscribeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#46c1bd',
    },
    headerTintColor: '#fff',
  },
});

export default SubscribeStack;
