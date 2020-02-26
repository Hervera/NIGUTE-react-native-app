import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Search from '../components/search';
import Sidebar from '../components/navigationDrawer/sidebar';
import {Left} from 'native-base';

// stacks
import HomeStack from './homeStack';
import CategoriesStack from './categoriesStack';
import AboutusStack from './aboutusStack';
import ContactusStack from './contactusStack';
import SubscribeStack from './subscribeStack';

const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: HomeStack},
    Categories: {screen: CategoriesStack},
    Aboutus: {screen: AboutusStack},
    Contactus: {screen: ContactusStack},
    Subscribe: {screen: SubscribeStack},
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

export default createAppContainer(RootDrawerNavigator);
