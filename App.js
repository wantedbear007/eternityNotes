import React from 'react';
import Home from './screens/Home';
import LinearGradient from 'react-native-linear-gradient';
import About from './screens/About';
import colors from './assets/Colors';

export default function () {
  return (
    <LinearGradient colors={[colors.blue, colors.black]} style={{flex: 1}}>
      <About />
    </LinearGradient>
  );
}
