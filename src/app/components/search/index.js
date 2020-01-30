import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const listItems = [
  'Development',
  'Businees',
  'IT & Software',
  'office',
  'Productivity',
  'Personal Development',
  'Design',
  'Marketing',
  'LifeStyle',
  'Photography',
  'Health & Fitness',
  'Teacher Training',
  'Music',
];

export default class Search extends Component {
  state = {
    searchBarFocused: false,
  };

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardWillShow = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardWillHide = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide,
    );
  }

  keyboardDidShow = () => {
    this.setState({searchBarFocused: true});
  };

  keyboardWillShow = () => {
    this.setState({searchBarFocused: true});
  };

  keyboardWillHide = () => {
    this.setState({searchBarFocused: false});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.searchView}>
          <Animatable.View
            animation="slideInRight"
            duration={1000}
            style={styles.alignIcons}>
            <Animatable.View
              animation={
                this.state.searchBarFocused ? 'fadeInLeft' : 'fadeInRight'
              }
              duration={1000}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../assets/images/back-arrow-icon.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
            </Animatable.View>
            <TextInput
              placeholder="Search"
              style={{fontSize: 16, marginLeft: 15, flex: 1}}
            />
          </Animatable.View>
        </View>
        <FlatList
          style={{
            backgroundColor: this.state.searchBarFocused
              ? 'rgba(0,0,0,0.3)'
              : 'white',
          }}
          data={listItems}
          renderItem={({item}) => (
            <Text style={{padding: 20, fontSize: 20}}> {item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchView: {
    height: 80,
    backgroundColor: '#46c1bd',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  alignIcons: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
});
