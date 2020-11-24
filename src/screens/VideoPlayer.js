//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

// create a component
const VideoPlayer = ({route}) => {
  const {id} = route.params
  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', height: 200}}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: `https://www.youtube.com/embed/${id}`}}
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default VideoPlayer;
