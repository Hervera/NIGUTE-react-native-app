import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Home extends Component {
  //Home Component

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> Home </Text>
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
