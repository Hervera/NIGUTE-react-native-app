import React, {Component} from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styles from '../../styles/index.style';
import {articlesList} from '../../dummy/articles';
import ArticleCard from '../shared/articleCard';

export default class ShowCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: articlesList,
    };
  }

  listArticles(title) {
    const categoryId = this.props.navigation.getParam('id');
    return (
      <View style={styles.articleList}>
        <Text style={[styles.title, {marginTop: 0}]}>{title}</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item: rowData}) => {
            if (rowData.categoryId === categoryId) {
              return <ArticleCard article={rowData} />;
            }
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  render() {
    const categoryTitle = this.props.navigation.getParam('title', 'no title');
    const articleInFlatList = this.listArticles(categoryTitle);
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor={'rgba(0, 0, 0, 0.3)'}
            barStyle={'light-content'}
          />
          <View
            style={styles.View}
            scrollEventThrottle={200}
            directionalLockEnabled={true}>
            {articleInFlatList}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
