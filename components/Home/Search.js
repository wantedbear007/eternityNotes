import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/Colors';

export default Search = props => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.searchBar}>
        <Feather name="search" color={colors.white} size={25} />
        <TouchableOpacity onPress={() => console.log('search')}>
          <Text style={styles.searchText}>Search Notes</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.optionContainer}>
        <Feather name="menu" size={23} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: colors.GreyBlack,
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 83,
    alignItems: 'center',
    width: '83%',
    elevation: 15,
  },
  searchText: {
    fontSize: 15,
    color: colors.white,
    marginLeft: 20,
  },
  optionContainer: {
    backgroundColor: colors.GreyBlack,
    padding: 12,
    borderRadius: 83,
    elevation: 15,
  },
});
