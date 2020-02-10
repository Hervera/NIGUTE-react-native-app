import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Home from '../components/home';
import HeaderLeft from '../components/shared/headerLeft';
import HeaderRight from '../components/shared/headerRight';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Home',
      headerLeft: <HeaderLeft navigationProps={navigation} />,
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#46c1bd',
    },
    headerTintColor: '#fff',
    headerTintStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
    },
  },
});

export default HomeStack;
