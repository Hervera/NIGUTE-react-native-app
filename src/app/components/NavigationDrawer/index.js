import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Home';
import Categories from '../Categories';
import Aboutus from '../Aboutus';
import Contactus from '../Contactus';
import Subscribe from '../Subscribe';

class NavigationDrawer extends Component {
  openDrawer = () => {
    this.props.navigationProps.openDrawer();
  };

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.openDrawer.bind(this)}>
          <Image
            source={require('../../assets/images/menu-icon-white.png')}
            style={{width: 25, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Home',
      headerLeft: <NavigationDrawer navigationProps={navigation} />,
      headerRight: (
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => navigation.navigate('Search')}>
          <Image
            source={require('../../assets/images/search-icon-white.png')}
            style={{width: 22, height: 22}}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#46c1bd',
      },
      headerTintColor: '#fff',
      headerTintStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
      },
    }),
  },
});

const Categories_StackNavigator = createStackNavigator({
  Second: {
    screen: Categories,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Categories',
      headerLeft: <NavigationDrawer navigationProps={navigation} />,
      headerRight: (
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => navigation.navigate('Search')}>
          <Image
            source={require('../../assets/images/search-icon-white.png')}
            style={{width: 22, height: 22}}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#46c1bd',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Aboutus_StackNavigator = createStackNavigator({
  Third: {
    screen: Aboutus,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'About us',
      headerLeft: <NavigationDrawer navigationProps={navigation} />,
      headerRight: (
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => navigation.navigate('Search')}>
          <Image
            source={require('../../assets/images/search-icon-white.png')}
            style={{width: 22, height: 22}}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#46c1bd',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Contactus_StackNavigator = createStackNavigator({
  Fourth: {
    screen: Contactus,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Contact us',
      headerLeft: <NavigationDrawer navigationProps={navigation} />,
      headerRight: (
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => navigation.navigate('Search')}>
          <Image
            source={require('../../assets/images/search-icon-white.png')}
            style={{width: 22, height: 22}}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#46c1bd',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Subscribe_StackNavigator = createStackNavigator({
  Fifth: {
    screen: Subscribe,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Subscribe',
      headerLeft: <NavigationDrawer navigationProps={navigation} />,
      headerRight: (
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => navigation.navigate('Search')}>
          <Image
            source={require('../../assets/images/search-icon-white.png')}
            style={{width: 22, height: 22}}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#46c1bd',
      },
      headerTintColor: '#fff',
    }),
  },
});

export default {
  FirstActivity_StackNavigator,
  Categories_StackNavigator,
  Aboutus_StackNavigator,
  Contactus_StackNavigator,
  Subscribe_StackNavigator,
};
