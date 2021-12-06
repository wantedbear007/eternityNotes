import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/Colors';

const Card = props => {
  return (
    <LinearGradient
    style={styles.parentContainer}
      colors={[colors.blue, colors.black]} >
      <Text style={styles.heading}>{props.title}</Text>
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: colors.white,
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'JosefinSans-SemiBold',
    marginVertical: 95,
  },
  parentContainer: {
      flex :1
  }
});

export default Card;
