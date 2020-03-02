import React, {Component} from 'react';
import {StatusBar, KeyboardAvoidingView, TextInput, View} from 'react-native';
import {Block, Checkbox, Text, Input, Button} from 'galio-framework';
import {niguteTheme, contactInfo} from '../constants';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../styles/index.style';

export default class Contactus extends Component {
  render() {
    return (
      <ScrollView middle>
        <StatusBar hidden />
        <View style={styles.container}>
          <Block middle>
            <Block style={[styles.formContainer, {marginTop: 20}]}>
              <Block middle style={styles.heading}>
                <Text size={16} style={{padding: 20}}>
                  Contact Form
                </Text>
              </Block>
              <Block style={styles.formBlock}>
                <Block center>
                  <KeyboardAvoidingView behavior="padding" enabled>
                    <Block style={styles.blockInput}>
                      <Input placeholder="Your Name*" style={styles.input} />
                    </Block>
                    <Block style={styles.blockInput}>
                      <Input placeholder="Your Email*" style={styles.input} />
                    </Block>
                    <Block style={styles.blockInput}>
                      <Input
                        placeholder="Your Phone Number"
                        style={styles.input}
                      />
                    </Block>
                    <Block style={styles.blockInput}>
                      <Input placeholder="Subject" style={styles.input} />
                    </Block>
                    <Block style={styles.blockInput}>
                      <TextInput
                        placeholder="Your Message*"
                        multiline={true}
                        style={styles.textInput}
                      />
                    </Block>
                    <Block row style={styles.checkbox}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3,
                        }}
                        color={niguteTheme.COLORS.PRIMARY}
                        label="Subscribe to our"
                      />
                      <Button
                        style={styles.btnLetter}
                        color="tranparent"
                        textStyle={{
                          color: niguteTheme.COLORS.PRIMARY,
                          fontSize: 14,
                        }}>
                        Newsletter
                      </Button>
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.sendButton}>
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
        </View>
      </ScrollView>
    );
  }
}
