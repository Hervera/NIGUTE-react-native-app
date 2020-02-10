import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import AllCategories from '../components/categories/allCategories';
import ShowCategory from '../components/categories/showCategory';
import HeaderLeft from '../components/shared/headerLeft';
import HeaderRight from '../components/shared/headerRight';

const screens = {
  AllCategories: {
    screen: AllCategories,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Categories',
      headerLeft: <HeaderLeft navigationProps={navigation} />,
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },

  ShowCategory: {
    screen: ShowCategory,
    navigationOptions: {
      title: 'Category Articles',
    },
  },
};

const CategoriesStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#46c1bd',
    },
    headerTintColor: '#fff',
  },
});

export default CategoriesStack;
