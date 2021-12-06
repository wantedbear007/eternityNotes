import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/Colors';

const Card = props => {
  return (
    <LinearGradient
      {...props}
      colors={[colors.blue, colors.black]}
      style={{flex: 1}}>
      {props.children}
    </LinearGradient>
  );
};

export default Card;
