import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Contactus from '../components/contactus';
import HeaderLeft from '../components/shared/headerLeft';
import HeaderRight from '../components/shared/headerRight';

const screens = {
  Contactus: {
    screen: Contactus,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Contact us',
      headerLeft: <HeaderLeft navigationProps={navigation} />,
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
};

const ContactusStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#46c1bd',
    },
    headerTintColor: '#fff',
  },
});

export default ContactusStack;
