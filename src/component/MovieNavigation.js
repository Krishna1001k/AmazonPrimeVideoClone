import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MovieDisplay from './MovieDisplay';

import Home from '../modules/Home/FirstHomeScreen';

const Stack = createNativeStackNavigator();

const MovieNavigation = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="HomeNav" component={Home} />
      <Stack.Screen
        name="MovieDisplay"
        component={MovieDisplay}
      />
    </Stack.Navigator>
  );
};

export default MovieNavigation;
