import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import ExploreScreen from './src/screens/Explore';
import SubscriptionsScreen from './src/screens/Subscriptions';
import VideoPlayer from './src/screens/VideoPlayer';

import {Icon} from 'native-base';
import {Provider, useSelector} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Reducer} from './src/Reducers/Reducer';
import {ThemeReducer} from './src/Reducers/ThemeReducer';

const store = createStore(Reducer);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CoustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: '#7a7d7b',
    iconColor: 'white',
    tabIcon: 'white',
  },
};
const CoustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: 'white',
    iconColor: 'black',
    tabIcon: 'red',
  },
};

function RootTabs() {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'explore';
          } else if (route.name === 'Subscriptions') {
            iconName = 'subscriptions';
          }

          return (
            <Icon type="MaterialIcons" name={iconName} style={{color: color}} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabIcon,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Subscriptions" component={SubscriptionsScreen} />
    </Tab.Navigator>
  );
}

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={CoustomDefaultTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="RootTabs" component={RootTabs} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
