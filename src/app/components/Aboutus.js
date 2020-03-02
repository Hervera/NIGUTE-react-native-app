import React, {Component} from 'react';
import {StyleSheet, View, Image, ScrollView, Text} from 'react-native';
import {Images} from '../constants';

export default class Aboutus extends Component {
  render() {
    const aboutusText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    return (
      <ScrollView>
        <View style={styles.logoSection}>
          <Image source={Images.aboutLogo} style={styles.logImage} />
        </View>
        <Text style={styles.paragraph}>{aboutusText}</Text>
        <Text style={styles.paragraph}>{aboutusText}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logImage: {
    marginTop: 20,
    textAlign: 'center',
  },
  logoSection: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    textAlign: 'justify',
    margin: 20,
    fontSize: 18,
  },
});
