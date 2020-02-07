import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Card} from 'react-native-elements';
import {Col, Row, Grid} from 'react-native-easy-grid';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SliderEntry from './SlideEntry';
import {topArticles, articlesList, bottomArticles} from '../dummy/articles';
import styles, {colors} from '../styles/index.style';
import {sliderWidth, itemWidth} from '../styles/SliderEntry.style';

const SLIDER_1_FIRST_ITEM = 1;

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: articlesList,
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    };
  }

  _renderItem({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderLightItem({item, index}) {
    return <SliderEntry data={item} even={false} />;
  }

  topCarousel() {
    const {slider1ActiveSlide} = this.state;

    return (
      <View style={styles.exampleContainer}>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={topArticles}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
        />
        <Pagination
          dotsLength={topArticles.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={'rgba(255, 255, 255, 0.92)'}
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }

  listArticles(title) {
    return (
      <View style={styles.articleList}>
        <Text style={[styles.title, {marginTop: 0}]}>{title}</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item: rowData}) => {
            return (
              <Card containerStyle={styles.cardStyle}>
                <View style={styles.touchCard}>
                  <View style={{width: '35%'}}>
                    <TouchableOpacity>
                      <Image
                        source={{uri: rowData.imageUrl}}
                        style={styles.cardImage}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{width: '65%', flexDirection: 'column'}}>
                    <TouchableOpacity>
                      <Text style={styles.articleTitle}>{rowData.title}</Text>
                    </TouchableOpacity>
                    <View style={styles.bottomIcons}>
                      <Grid>
                        <Row>
                          <Col>
                            <TouchableOpacity style={styles.viewIcon}>
                              <Text>24</Text>
                              <Image
                                source={require('../assets/images/view-icon.png')}
                                style={styles.iconStyle}
                              />
                            </TouchableOpacity>
                          </Col>
                          <Col>
                            <TouchableOpacity style={styles.commentIcon}>
                              <Text>12</Text>
                              <Image
                                source={require('../assets/images/comment-icon.png')}
                                style={styles.iconStyle}
                              />
                            </TouchableOpacity>
                          </Col>
                          <Col style={{alignItems: 'flex-end'}}>
                            <TouchableOpacity>
                              <Image
                                source={require('../assets/images/share-icon.png')}
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
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  bottomCarousel(title) {
    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Carousel
          data={bottomArticles}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={1}
          enableMomentum={true}
          activeSlideAlignment={'start'}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          activeAnimationType={'spring'}
          activeAnimationOptions={{
            friction: 4,
            tension: 40,
          }}
        />
      </View>
    );
  }

  get gradient() {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{x: 1, y: 0}}
        endPoint={{x: 0, y: 1}}
        style={styles.gradient}
      />
    );
  }

  render() {
    const carouselTop = this.topCarousel();
    const articleInFlatList = this.listArticles('Featured Articles');
    const carouselBottom = this.bottomCarousel('Most Viewed');
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor={'rgba(0, 0, 0, 0.3)'}
            barStyle={'light-content'}
          />
          {this.gradient}
          <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            directionalLockEnabled={true}>
            {carouselTop}
            {articleInFlatList}
            {carouselBottom}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
