//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderComponent from '../components/Header';
import CardComponent from '../components/Card';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

// create a component
const HomeScreen = () => {
  const data = useSelector((state) => {
    return state;
  });
  return (
    <View style={{flex: 1}}>
      <HeaderComponent />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({item}) => {
          return (
            <CardComponent
              id={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
      />
    </View>
  );
};

//make this component available to the app
export default HomeScreen;
