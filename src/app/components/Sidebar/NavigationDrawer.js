import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Home';
import Categories from '../Categories';
import Aboutus from '../Aboutus';
import Contactus from '../Contactus';
import Subscribe from '../Subscribe';
import Search from '../search';
import Sidebar from '../Sidebar';
import {Left} from 'native-base';

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
          {/* <Icon name="ios-menu" /> */}
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

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: FirstActivity_StackNavigator},
    Categories: {screen: Categories_StackNavigator},
    Aboutus: {screen: Aboutus_StackNavigator},
    Contactus: {screen: Contactus_StackNavigator},
    Subscribe: {screen: Subscribe_StackNavigator},
    Search: {screen: Search},
  },
  {
    hideStatusBar: false,
    initialRouteName: 'Home',
    drawerWidth: 300,
    drawerPosition: Left,
    drawerBackgroundColor: '#46c1bd',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
    contentComponent: Sidebar,
  },
);

export default createAppContainer(DrawerNavigator);
