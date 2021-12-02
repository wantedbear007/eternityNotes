import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../assets/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default Content = props => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>{props.detail}</Text>
        {props.appVersion && (
          <View>
            <Text style={styles.detail}>{props.appVersion}</Text>
            <Text style={styles.detail}>{props.feedback}</Text>
          </View>
        )}
        {props.icons ? <CustomIcons icons={props.icons} /> : null}
      </View>
    </View>
  );
};

// Custom Icons
const CustomIcons = props => {
  return (
    <View style={styles.iconContainer}>
      {props.icons.map((icon, id) => (
        <TouchableOpacity key={id} onPress={() => console.log(icon)}>
          <FontAwesome name={icon} size={28} color={colors.white} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginVertical: 10,
    marginHorizontal: 7,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 18,
  },
  detailContainer: {
    marginTop: 7,
    backgroundColor: colors.transparentGray,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 14,
  },
  detail: {
    fontSize: 15,
    color: colors.grey,
    fontFamily: 'JosefinSans-Regular',
  },
  iconContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
});
