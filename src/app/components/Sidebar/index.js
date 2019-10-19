import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

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
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.headerImage}
              />
            </View>
            <View style={styles.line} />
            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0.2)'}
              onPress={() => this.props.navigation.navigate('Home')}>
              <View style={styles.row}>
                <Image
                  source={require('../../assets/images/home-icon-white-png-1.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.text}>Home</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0.2)'}
              onPress={() => this.props.navigation.navigate('Categories')}>
              <View style={styles.row}>
                <Image
                  source={require('../../assets/images/categories.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.text}>Categories</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0.2)'}
              onPress={() => this.props.navigation.navigate('Aboutus')}>
              <View style={styles.row}>
                <Image
                  source={require('../../assets/images/about-us-white.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.text}>About us</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0.2)'}
              onPress={() => this.props.navigation.navigate('Contactus')}>
              <View style={styles.row}>
                <Image
                  source={require('../../assets/images/makefg2.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.text}>Contact us</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0.2)'}
              onPress={() => this.props.navigation.navigate('Subscribe')}>
              <View style={styles.row}>
                <Image
                  source={require('../../assets/images/white-bell-icon.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.text}>Subscribe</Text>
              </View>
            </TouchableHighlight>
          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  drawerTransparent: {},
  drawer: {},
  header: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#fff',
  },
  touchableHighlight: {
    backgroundColor: 'orange',
    paddingVertical: 20,
    paddingHorizontal: 50,
    margin: 10,
  },
  headerImage: {
    marginTop: 40,
  },
  iconImage: {
    borderRadius: 100,
    width: 25,
    height: 25,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 10,
  },
  line: {
    width: '90%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: '#fff',
    margin: 15,
  },
});

export default Sidebar;
