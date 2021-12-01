import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import AboutContents from '../../assets/AppsContent/AboutContents';
import colors from '../../assets/Colors';

export default ContentSection = props => {
  return (
    <View>
      <Content
        title={AboutContents[0].title}
        detail={AboutContents[0].detail}
        appVersion={AboutContents[0].appVersion}
        feedback={AboutContents[0].feedback}
      />
      <Content
        title={AboutContents[1].title}
        detail={AboutContents[1].detail}
      />
    </View>
  );
};

const Content = props => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>{props.detail}</Text>
        <Text style={styles.detail}>{props.appVersion}</Text>
        <Text style={styles.detail}>{props.feedback}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginVertical: 20,
    marginHorizontal: 7,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 23,
  },
  detailContainer: {
    marginTop: 10,
    backgroundColor: 'rgba(41,35,35, 0.5)',
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderRadius: 14,
  },
  detail: {
    fontSize: 17,
    color: colors.grey,
    fontFamily: 'JosefinSans-Regular',
  },
});
