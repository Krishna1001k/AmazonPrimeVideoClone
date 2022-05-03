import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyStore from '../modules/PrimeStore';
import MovieDisplay from './MovieDisplay';
const Stack=createNativeStackNavigator();
const StoreNav = () => {

   
      return (
          
              <Stack.Navigator screenOptions={{headerShown:false}}>
                  
                  <Stack.Screen name='StoreNav' component={MyStore} />
                  <Stack.Screen name='MovieDisplay' component={MovieDisplay}/>
              </Stack.Navigator>
         
      )
        
    }
    

export default StoreNav