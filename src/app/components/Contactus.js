import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Contactus extends Component {
  //Contactus Component
  static navigationOptions = {
    drawerLabel: 'Contact us',
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> Contact us </Text>
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
