import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/Colors';
import Search from '../components/Home/Search';

export default Home = () => {
  return (
    <LinearGradient
      colors={[colors.blue, colors.black]}
      style={styles.parentContainer}>
      <Text style={styles.heading}>Eternity Notes</Text>
      <Search />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  heading: {
    color: colors.white,
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'JosefinSans-SemiBold',
    marginVertical: 95,
  },
});
