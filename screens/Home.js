import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import Search from '../components/Home/Search';
import colors from '../assets/Colors';
import Card from '../components/UI/Card';
import NotesSection from '../components/Home/NotesSection';

export default Home = ({navigation}) => {
  return (
    <Card title="Eternity Notes">
      <Search navigation={navigation} />
      <NotesSection />
    </Card>
  );
};

const styles = StyleSheet.create({});
