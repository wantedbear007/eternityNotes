import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AboutContents from '../../assets/AppsContent/AboutContents';
import colors from '../../assets/Colors';
import Content from './Content';

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
        icon={'github'}
        icons={['github', 'user-circle', 'linkedin-square', 'telegram']}
      />
      <Text style={styles.endNote}>
        {'App ' + '</>' + ' with ❤️ by Bhanupratap.'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  endNote: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Cookie-Regular',
    textAlign: 'center',
    marginTop: 7,
  },
});
