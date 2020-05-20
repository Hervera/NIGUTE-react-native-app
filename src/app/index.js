import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './routes/drawer';
import {YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

YellowBox.ignoreWarnings(['`-[RCTRootView cancelTouches]`']);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
