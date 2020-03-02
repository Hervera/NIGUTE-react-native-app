import React, {Component} from 'react';
import {View, StatusBar, KeyboardAvoidingView} from 'react-native';
import {Block, Text, Input, Button} from 'galio-framework';
import {niguteTheme} from '../constants';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../styles/index.style';

export default class Subscribe extends Component {
  render() {
    return (
      <ScrollView middle>
        <StatusBar hidden />
        <View style={styles.container}>
          <Block middle>
            <Block style={[styles.formContainer, {marginTop: 20}]}>
              <Block middle style={styles.heading}>
                <Text size={16} style={{padding: 20}}>
                  Subscribe to Stay Updated
                </Text>
              </Block>
              <Block style={styles.formBlock}>
                <Block center>
                  <KeyboardAvoidingView behavior="padding" enabled>
                    <Block style={styles.blockInput}>
                      <Input
                        placeholder="Enter your Email*"
                        style={styles.input}
                      />
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.sendButton}>
                        <Text bold size={14} color={niguteTheme.COLORS.WHITE}>
                          Subscribe
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </View>
      </ScrollView>
    );
  }
}
