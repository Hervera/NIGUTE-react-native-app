import {StyleSheet} from 'react-native';

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#ecebe9',
  background2: '#ecebe9',
};

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollview: {
    flex: 1,
  },
  exampleContainer: {
    paddingVertical: 0,
  },
  exampleContainerDark: {
    backgroundColor: colors.black,
  },
  exampleContainerLight: {
    backgroundColor: 'white',
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(0, 0, 0, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  titleDark: {
    color: colors.black,
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  slider: {
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  articleList: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  bottomIcons: {
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: 5,
    marginRight: 0,
    bottom: 0,
    width: '95%',
  },
  row: {
    flexDirection: 'row',
  },
  cardStyle: {
    padding: 0,
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    height: 87,
  },
  touchCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 0,
  },
  cardImage: {
    width: '100%',
    height: 85,
  },
  articleTitle: {
    margin: 5,
    marginBottom: 10,
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
  viewIcon: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  commentIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  categoriesList: {
    flex: 1,
    marginTop: 10,
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  },
  categoryCardStyle: {
    padding: 0,
    width: '46%',
    marginLeft: '2%',
    marginRight: '2%',
    height: 130,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.05)',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  categoryCardImage: {
    width: '100%',
    height: 100,
  },
  categoryTitle: {
    padding: 5,
  },
});
