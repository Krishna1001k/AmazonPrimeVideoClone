import { StyleSheet, Text, View,Image,StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabHome from '../TabHome'
import Kids from '../Kids'
import TvShow from '../TVshow'
import Movies from '../Movies'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const HomeNav = (props) => {
  // console.log(props.navigation)
    const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator 
    screenOptions={{
        swipeEnabled:false,
        tabBarLabelStyle: { fontSize: 13,fontWeight:'600' },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor:'#1d242e',justifyContent:'flex-end' },
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'grey',
        
      }}>
        <TopTab.Screen name='Main' component={TabHome}/>
        <TopTab.Screen name='TV Shows' component={TvShow} />
        <TopTab.Screen name='Movies' component={Movies} />
        <TopTab.Screen name='Kids' component={Kids} />
    </TopTab.Navigator>
  )
}

export default HomeNav

const styles = StyleSheet.create({

})