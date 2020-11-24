//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {
  Container,
  Content,
  Header,
  Title,
  Button,
  Icon,
  Right,
  Body,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Text,
} from 'native-base';

import {useNavigation, useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const HeaderComponent = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const myColor = colors.iconColor;
  const dispatch = useDispatch();
 

  return (
    <Header style={{backgroundColor: colors.headerColor}} noLeft>
      <Body style={{flexDirection: 'row'}}>
        <Icon
          type="Entypo"
          name="youtube"
          style={{color: 'red', fontSize: 30}}
        />
        <Title style={{color: myColor}}>YouTube</Title>
      </Body>
      <Right>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon type="AntDesign" name="search1" style={{color: myColor}} />
        </Button>
        <Button
          transparent
          >
          <Icon
            type="MaterialIcons"
            name="account-circle"
            style={{color: myColor, fontSize: 30}}
          />
        </Button>
      </Right>
    </Header>
  );
};

//make this component available to the app
export default HeaderComponent;
