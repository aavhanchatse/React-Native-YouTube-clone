//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Left,
  Right,
  Body,
  Content,
} from 'native-base';
import MiniCard from '../components/MiniCard';
import {useSelector, useDispatch} from 'react-redux';

// create a component
const SearchScreen = ({navigation}) => {
  const [value, setvalue] = useState('');
  const [loading, setloading] = useState(false);

  // const [query, setquery] = useState([]);

  const dispatch = useDispatch();

  const query = useSelector((state) => {
    return state;
  });

  const fetchData = () => {
    setloading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDEv7zuS4wXvTgtX2U6rf2ooy6hnHvDf2s`,
    )
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        console.log(data);
        // setquery(data.items);
        dispatch({type: 'add', payload: data.items});
      });
  };

  return (
    <Container>
      <Header
        searchBar
        style={{backgroundColor: 'white', height: 45, marginBottom: 5}}>
        <Item>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon
              type="AntDesign"
              name="arrowleft"
              style={{color: 'black', marginLeft: 4}}
            />
          </Button>

          <Input
            value={value}
            onChangeText={(text) => setvalue(text)}
            style={{backgroundColor: '#c8cbcf', height: 30, paddingVertical: 0}}
            returnKeyType="search"
            onSubmitEditing={() => fetchData()}
          />
          <Button transparent>
            <Icon type="AntDesign" name="close" style={{color: 'black'}} />
          </Button>
        </Item>
      </Header>
      <Content>
        {loading ? <ActivityIndicator size="large" color="#7797f2" /> : null}

        <FlatList
          data={query}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({item}) => {
            return (
              <MiniCard
                id={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
        />
      </Content>
    </Container>
  );
};

//make this component available to the app
export default SearchScreen;
