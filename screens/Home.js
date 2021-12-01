import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Search from '../components/Home/Search';
import commonStyles from './commonStyles';

export default Home = () => {
  return (
    <View style={styles.parentContainer}>
      <Text style={commonStyles.heading}>Eternity Notes</Text>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
});
