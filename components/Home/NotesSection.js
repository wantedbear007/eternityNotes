import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/Colors';
import DummyNotes from '../../DummyNotes';
import ScreenDimension from '../../assets/Dimensions';

const NotesSection = () => {
  //Flat list render
  const renderList = ({item}) => (
    <TouchableOpacity activeOpacity={0.4} style={styles.cardContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
    // <Text>{item.title}/</Text>
  );

  return (
    <View style={styles.parentContainer}>
      <Text>This is Notes </Text>
      <FlatList
        data={DummyNotes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderList}
        // numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: 'JosefinSans-SemiBold',
    color: colors.white,
  },
  description: {
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
    color: colors.grey,
  },
  cardContainer: {
    backgroundColor: colors.transparentGray,
    borderRadius: 20,
    paddingVertical: 15,
    marginVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
});

export default NotesSection;
