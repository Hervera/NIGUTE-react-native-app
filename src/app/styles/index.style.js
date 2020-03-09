import {StyleSheet, Dimensions} from 'react-native';
import {niguteTheme} from '../constants';

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#ecebe9',
  background2: '#efeff3',
  background3: '#fafafa',
  background4: '#ffffff',
};

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background1,
    width: width,
    height: height,
  },
  container2: {
    flex: 1,
    backgroundColor: colors.background2,
    width: width,
    height: height,
  },
  scrollview: {
    flex: 1,
  },
  mainContainer: {
    paddingVertical: 0,
  },
  mainContainerDark: {
    backgroundColor: colors.black,
  },
  mainContainerLight: {
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
    justifyContent: 'space-between',
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

  formBlock: {
    backgroundColor: '#fff',
  },

  formContainer: {
    width: width * 0.9,
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

  heading: {
    backgroundColor: niguteTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#8898AA',
    borderRadius: 10,
  },

  sendButton: {
    width: width * 0.5,
    marginTop: 15,
    marginBottom: 25,
    backgroundColor: niguteTheme.COLORS.PRIMARY,
    shadowColor: 'transparent',
  },

  blockInput: {
    width: width * 0.8,
    marginTop: 15,
  },

  input: {
    borderColor: '#ccc',
  },

  textInput: {
    height: 100,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 4,
  },

  checkbox: {
    width: width * 0.75,
    marginTop: 15,
  },

  btnLetter: {
    width: 100,
    shadowColor: 'transparent',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 0.5,
    width: '100%',
    margin: 0,
    padding: 0,
  },

  settingsTitle: {
    paddingBottom: 10,
    color: '#555',
    paddingHorizontal: 10,
    textTransform: 'uppercase',
  },

  settingsItem: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 0.5,
    width: '100%',
    paddingVertical: 10,
    paddingRight: 20,
    marginLeft: 10,
  },

  settingsText: {
    fontSize: 16,
    paddingTop: 5,
  },

  mTop20: {
    marginTop: 20,
  },
});
