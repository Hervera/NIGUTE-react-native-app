import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Aboutus extends Component {
  //About us Component
  static navigationOptions = {
    drawerLabel: 'About us',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 23}}> About us </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
