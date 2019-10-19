import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Categories extends Component {
  //Categories Component
  static navigationOptions = {
    drawerLabel: 'Categories',
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> Categories </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
