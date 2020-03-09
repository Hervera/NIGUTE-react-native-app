import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  drawerTransparent: {},
  drawer: {},
  header: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#fff',
  },
  touchableHighlight: {
    backgroundColor: 'orange',
    paddingVertical: 20,
    paddingHorizontal: 50,
    margin: 10,
  },
  headerImage: {
    marginTop: 40,
  },
  iconImage: {
    borderRadius: 100,
    width: 25,
    height: 25,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 10,
  },
  line: {
    width: '90%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: '#fff',
    margin: 15,
  },
});
