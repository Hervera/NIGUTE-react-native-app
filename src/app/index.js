import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Search from '../app/components/Search';
import Sidebar from '../app/components/NavigationDrawer/Sidebar';
import {Left} from 'native-base';
import nav from '../app/components/NavigationDrawer';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: nav.FirstActivity_StackNavigator},
    Categories: {screen: nav.Categories_StackNavigator},
    Aboutus: {screen: nav.Aboutus_StackNavigator},
    Contactus: {screen: nav.Contactus_StackNavigator},
    Subscribe: {screen: nav.Subscribe_StackNavigator},
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
