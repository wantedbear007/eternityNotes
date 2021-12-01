import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import commonStyles from './commonStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/Colors';
import ContentSection from '../components/About/ContentSection';

export default About = props => {
  return (
    <View style={styles.parentContainer}>
      <Text style={commonStyles.heading}>About</Text>
      <TouchableOpacity onPress={() => console.log('clicked')}>
        <Ionicons name="chevron-back-outline" size={25} color={colors.white} />
      </TouchableOpacity>
      <ContentSection />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 20,
  },
});
