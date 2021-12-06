import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/Colors';
import ContentSection from '../components/About/ContentSection';
import Card from '../components/UI/Card';

export default About = ({navigation}) => {
  return (
    <Card title="About" style={{marginHorizontal: 20}}>
      <View style={styles.parentContainer}>
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
