import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import Search from '../components/Home/Search';
import commonStyles from './commonStyles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/Colors';
import Card from '../components/UI/Card';

export default Home = ({navigation}) => {
  return (
    <Card>
      <View style={styles.parentContainer}>
        <Text style={commonStyles.heading}>Eternity Notes</Text>
        <Search navigation={navigation} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
});
