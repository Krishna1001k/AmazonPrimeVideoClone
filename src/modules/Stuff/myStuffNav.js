import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Download from './download'
import Watchlist from './watchlist'
import Purchases from './purchases'


const MyStuffNav = () => {
    const Tab=createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{
        swipeEnabled:false,
        tabBarLabelStyle: { fontSize: 13,fontWeight:'600', },
        tabBarStyle: { backgroundColor:'#1d242e' },
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'grey'
    }  
    }
    >
        <Tab.Screen  name='Download' component={Download}></Tab.Screen>
        <Tab.Screen name='Watchlist' component={Watchlist}></Tab.Screen>
        <Tab.Screen name='Purchases' component={Purchases}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default MyStuffNav

const styles = StyleSheet.create({})