import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './Splash';
import Navig from '../router';
import {NavigationContainer} from '@react-navigation/native';

const SplashNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="start" component={Navig} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SplashNav;
