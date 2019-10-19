import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Aboutus extends Component {
  //Aboutus Component
  static navigationOptions = {
    drawerLabel: 'About us',
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> About us </Text>
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
