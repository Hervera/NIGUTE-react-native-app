import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default class HeaderRight extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{marginHorizontal: 10}}
        onPress={() => this.props.navigation.navigate('Search')}>
        <Image
          source={require('../../assets/images/search-icon-white.png')}
          style={{width: 22, height: 22}}
        />
      </TouchableOpacity>
    );
  }
}
