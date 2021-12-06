import React from 'react';
import Home from './screens/Home';
import LinearGradient from 'react-native-linear-gradient';
import About from './screens/About';
import colors from './assets/Colors';
import ApplicationNav from './navigation/ApplicationNav';

export default function () {
  return <ApplicationNav />
  
  // return (
  //   <LinearGradient colors={[colors.blue, colors.black]} style={{flex: 1}}>
  //     <About />
  //   </LinearGradient>
  // );
}
