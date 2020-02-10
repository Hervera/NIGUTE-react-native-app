import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import styles from '../../styles/index.style';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class ArticleCard extends Component {
  render() {
    return (
      <Card containerStyle={styles.cardStyle}>
        <View style={styles.touchCard}>
          <View style={{width: '35%'}}>
            <TouchableOpacity>
              <Image
                source={{uri: this.props.article.imageUrl}}
                style={styles.cardImage}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '65%', flexDirection: 'column'}}>
            <TouchableOpacity>
              <Text style={styles.articleTitle}>
                {this.props.article.title}
              </Text>
            </TouchableOpacity>
            <View style={styles.bottomIcons}>
              <Grid>
                <Row>
                  <Col>
                    <TouchableOpacity style={styles.viewIcon}>
                      <Text>24</Text>
                      <Image
                        source={require('../../assets/images/view-icon.png')}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.commentIcon}>
                      <Text>12</Text>
                      <Image
                        source={require('../../assets/images/comment-icon.png')}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                  </Col>
                  <Col style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/images/share-icon.png')}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                  </Col>
                </Row>
              </Grid>
            </View>
          </View>
        </View>
      </Card>
    );
  }
}
