//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

// create a component
const MiniCard = ({id, title, channel}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('VideoPlayer', {id: id})}>
      <Card
        style={{
          elevation: 0,
          marginLeft: 0,
          marginBottom: 0,
          marginTop: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}>
        {/* <CardItem> */}
        <CardItem>
          <Image
            source={{
              uri: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
            }}
            style={{height: 90, width: '45%'}}
          />
          <CardItem style={{width: '60%'}}>
            <Body>
              <Text numberOfLines={2}>{title}</Text>
              <Text numberOfLines={1} note>
                {channel}
              </Text>
            </Body>
          </CardItem>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default MiniCard;
