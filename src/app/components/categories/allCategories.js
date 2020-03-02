import React, {Component} from 'react';
import styles from '../../styles/index.style';
import {Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {categoriesList} from '../../dummy/articles';
import {Card} from 'react-native-elements';
import {View} from 'react-native-animatable';

const numColumns = 2;
export default class AllCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: categoriesList,
    };
  }

  handleCategoryTap = category => {
    this.props.navigation.navigate('ShowCategory', category);
  };

  renderItem = ({item: rowData}) => {
    return (
      <Card containerStyle={styles.categoryCardStyle}>
        {/* onPress={() => this.handleCategoryTap(rowData)} */}
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ShowCategory', rowData)
          }>
          <Image
            source={{uri: rowData.imageUrl}}
            style={styles.categoryCardImage}
          />
          <Text style={styles.categoryTitle}>{rowData.title}</Text>
        </TouchableOpacity>
      </Card>
    );
  };

  render() {
    return (
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <FlatList
            style={styles.categoriesList}
            data={this.state.data}
            numColumns={numColumns}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ScrollView>
    );
  }
}
