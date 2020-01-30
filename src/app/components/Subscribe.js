import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Subscribe extends Component {
  //Subscribe Component
  static navigationOptions = {
    drawerLabel: 'Subscribe',
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> Subscribe </Text>
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
