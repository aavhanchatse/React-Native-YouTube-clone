//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderComponent from '../components/Header';

// create a component
const SubscriptionsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderComponent />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default SubscriptionsScreen;
