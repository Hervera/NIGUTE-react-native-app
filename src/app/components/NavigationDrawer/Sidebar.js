import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Images, sidebarItems} from '../../constants';
import styles from '../../styles/sidebar.style';

class Sidebar extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.drawerTransparent}
        onPress={() => this.props.navigation.goBack()}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.drawer}
          disable={false}>
          <ScrollView>
            <View style={styles.header}>
              <Image source={Images.sidebarLogo} style={styles.headerImage} />
            </View>
            <View style={styles.line} />
            {sidebarItems.map(item => {
              return (
                <TouchableHighlight
                  underlayColor={'rgba(0,0,0,0.2)'}
                  onPress={() =>
                    this.props.navigation.navigate(item.navigationId)
                  }>
                  <View style={styles.row}>
                    <Image source={item.icon} style={styles.iconImage} />
                    <Text style={styles.text}>{item.title}</Text>
                  </View>
                </TouchableHighlight>
              );
            })}
          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

export default Sidebar;
