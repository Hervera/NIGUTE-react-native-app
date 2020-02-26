import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

export default class HeaderLeft extends Component {
  openDrawer = () => {
    this.props.navigationProps.openDrawer();
  };

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.openDrawer.bind(this)}>
          <Image
            source={require('../../assets/images/menu-icon-white.png')}
            style={{width: 25, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
