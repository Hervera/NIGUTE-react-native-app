import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


class Home extends Component{
  state = {
    myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  }

  updateState = () => {
    this.setState({ myState: 'The state is updated' })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress = {this.updateState}>{this.state.myState}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Home;