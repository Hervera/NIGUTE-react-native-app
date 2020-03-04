import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Aboutus from '../components/aboutus';
import HeaderLeft from '../components/shared/headerLeft';
import HeaderRight from '../components/shared/headerRight';

const screens = {
  Aboutus: {
    screen: Aboutus,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'About us',
      headerLeft: <HeaderLeft navigationProps={navigation} />,
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
};

const AboutusStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#46c1bd',
    },
    headerTintColor: '#fff',
  },
});

export default AboutusStack;
