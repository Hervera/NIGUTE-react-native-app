import React, {Component} from 'react';
import {View, Switch} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../styles/index.style';
import {notifications} from '../constants';

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      switchAds: true,
      notifs: notifications.categories,
    };
  }
  changeState = category => {
    let notifs = [...this.state.notifs];
    let currentCategory = notifs.findIndex(item => item.name === category.name);
    notifs[currentCategory].state = !category.state;
    this.setState({notifs});
  };

  adsControl = () => {
    return (
      <View style={styles.mTop20}>
        <Text style={styles.settingsTitle}>Advertisement</Text>
        <Card containerStyle={styles.card}>
          <View style={[styles.row, styles.settingsItem]}>
            <Text style={styles.settingsText}>Ads</Text>
            <Switch
              value={this.state.switchAds}
              onValueChange={value => this.setState({switchAds: value})}
            />
          </View>
        </Card>
      </View>
    );
  };

  notifsControl = notifsCategories => {
    return (
      <View style={styles.mTop20}>
        <Text style={styles.settingsTitle}>Push notifications</Text>
        <Card containerStyle={styles.card}>
          {notifsCategories.map(category => {
            return (
              <View style={[styles.row, styles.settingsItem]}>
                <Text style={styles.settingsText}>{category.name}</Text>
                <Switch
                  value={category.state}
                  onValueChange={() => this.changeState(category)}
                />
              </View>
            );
          })}
        </Card>
      </View>
    );
  };
  render() {
    const {notifs} = this.state;
    const adsControl = this.adsControl();
    const notifsControl = this.notifsControl(notifs);
    return (
      <ScrollView style={styles.container2}>
        {adsControl}
        {notifsControl}
      </ScrollView>
    );
  }
}
