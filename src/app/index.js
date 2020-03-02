import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './routes/drawer';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['`-[RCTRootView cancelTouches]`']);

export default function App() {
  return <Navigator />;
}
