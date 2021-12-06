import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import Search from '../components/Home/Search';
import colors from '../assets/Colors';
import Card from '../components/UI/Card';

export default Home = ({navigation}) => {
  return (
    <Card title='Eternity Notes'>
      {/* <Text style={commonStyles.heading}>Eternity Notes</Text> */}
      <Search navigation={navigation} />
    </Card>
  );
};

const styles = StyleSheet.create({});
