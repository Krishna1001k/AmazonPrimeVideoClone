import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MovieDisplay from './MovieDisplay';

import Channels from '../modules/Channels';


const Stack=createNativeStackNavigator();

const ChannelNav = () => {
  return (
      
          <Stack.Navigator screenOptions={{headerShown:false}}>
              
              <Stack.Screen name='ChannelNav' component={Channels} />
              <Stack.Screen name='MovieDisplay' component={MovieDisplay}/>
          </Stack.Navigator>
     
  )
    
}

export default ChannelNav

