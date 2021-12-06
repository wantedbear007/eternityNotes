import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import commonStyles from './commonStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/Colors';
import ContentSection from '../components/About/ContentSection';
import Card from '../components/UI/Card';

export default About = ({navigation}) => {
  return (
    <Card>
      <View style={styles.parentContainer}>
        <Text style={commonStyles.heading}>About</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons
            name="chevron-back-outline"
            size={25}
            color={colors.white}
          />
        </TouchableOpacity>
        <ContentSection />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 20,
  },
});
