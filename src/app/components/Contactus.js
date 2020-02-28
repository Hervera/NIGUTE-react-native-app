import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {Block, Checkbox, Text, Input, Button} from 'galio-framework';
import {Images, niguteTheme, contactInfo} from '../constants';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

export default class Contactus extends Component {
  render() {
    return (
      <ScrollView middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.ContactUsBackground}
          style={{width, height, zIndex: 1}}>
          <Block middle>
            <Block style={[styles.contactUsContainer, {marginTop: 20}]}>
              <Block middle style={styles.heading}>
                <Text size={16} style={{padding: 20}}>
                  Contact Form
                </Text>
              </Block>
              <Block>
                <Block center>
                  <KeyboardAvoidingView behavior="padding" enabled>
                    <Block style={styles.blockInput}>
                      <Input borderless placeholder="Your Name*" />
                    </Block>
                    <Block style={styles.blockInput}>
                      <Input borderless placeholder="Your Email*" />
                    </Block>
                    <Block style={styles.blockInput}>
                      <Input borderless placeholder="Your Phone Number" />
                    </Block>
                    <Block style={styles.blockInput}>
                      <Input borderless placeholder="Subject" />
                    </Block>
                    <Block style={[styles.inputContainer, {marginBottom: 15}]}>
                      <TextInput
                        placeholder="Your Message*"
                        multiline={true}
                        style={styles.input}
                      />
                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3,
                        }}
                        color={niguteTheme.COLORS.PRIMARY}
                        label="Subscribe to our"
                      />
                      <Button
                        style={{width: 100, shadowColor: 'transparent'}}
                        color="tranparent"
                        textStyle={{
                          color: niguteTheme.COLORS.PRIMARY,
                          fontSize: 14,
                        }}>
                        Newsletter
                      </Button>
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton}>
                        <Text bold size={14} color={niguteTheme.COLORS.WHITE}>
                          SEND YOUR MESSAGE
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
            <Block style={{marginTop: 20, marginBottom: 20}}>
              <Block style={styles.contactInfo}>
                <Text color={niguteTheme.COLORS.MUTED} size={16}>
                  Stay in touch
                </Text>
                <Grid style={{marginTop: 10}}>
                  {Object.keys(contactInfo).map(key => {
                    return (
                      <Row>
                        <Col>
                          <Text>{key}</Text>
                        </Col>
                        <Col>
                          <Text>{contactInfo[key]}</Text>
                        </Col>
                      </Row>
                    );
                  })}
                </Grid>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contactInfo: {
    width: width * 0.9,
    height: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 0,
    marginBottom: 20,
    overflow: 'hidden',
    padding: 10,
  },

  contactUsContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: '#F4F5F7',
    borderRadius: 10,
    shadowColor: niguteTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
  },

  heading: {
    backgroundColor: niguteTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#8898AA',
    borderRadius: 10,
  },

  createButton: {
    width: width * 0.5,
    marginTop: 25,
    backgroundColor: niguteTheme.COLORS.PRIMARY,
    shadowColor: 'transparent',
  },

  blockInput: {
    width: width * 0.8,
    marginBottom: 15,
  },

  inputContainer: {
    height: 70,
  },

  input: {
    height: 70,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
  },
});
