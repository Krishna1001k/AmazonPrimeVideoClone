import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../modules/Home/FirstHomeScreen/index'
import Channels from '../modules/Channels'
import Search from '../modules/Search'
import Stuff from '../modules/Stuff'
import MyStore from '../modules/PrimeStore/index'
import MovieNavigation from '../component/MovieNavigation'
import ChannelNav from '../component/ChannelNav'
import StoreNav from '../component/StoreNav'


const Navig = () => {
  
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={

        {
          headerShown: false,
          tabBarStyle: {
          backgroundColor: 'black',
          },
        }
      } >
        


 {/*....................................HOME.......................................*/}
        <Tab.Screen name="Home" component={MovieNavigation} options={{

          tabBarActiveTintColor: '#3498DB',
          tabBarInactiveTintColor: '#CCCCCC',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <Image source={require('../assets/images/icons/HomeBlue/icons8-home-72(@3x).png')}
                  resizeMode={'contain'}
                  style={{ height: 25, width: 25 }}
                />
              )
            }
            else {
              return (
                <Image source={require('../assets/images/icons/Home/icons8-home-72(@3x).png')}
                  resizeMode={'contain'}
                  style={{ height: 25, width: 25 }}
                />
              )
            }
          }
        }} />

   
{/* ....................................store....................................... */}
<Tab.Screen name="Store" component={StoreNav} options={{

tabBarActiveTintColor: '#3498DB',
tabBarInactiveTintColor: '#CCCCCC',
tabBarIcon: ({ focused, color, size }) => {
  if (focused) {
    return (
      <Image source={require('../assets/images/icons/shopingBlue/Blueshoppin.png')}
        resizeMode={'contain'}
        style={{ height: 25, width: 25 }}
      />
    )
  }
  else {
    return (
      <Image source={require('../assets/images/icons/shopingGrey/icons8-shopping.png')}
        resizeMode={'contain'}
        style={{ height: 25, width: 25 }}
      />
    )
  }
}
}} />     

  {/*................................Channels.......................................*/}
        <Tab.Screen name="Channels" component={ChannelNav} options={{

          tabBarActiveTintColor: '#3498DB',
          tabBarInactiveTintColor: '#CCCCCC',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <Image source={require('../assets/images/icons/menuBlue/icons8-hamburger-menu-144(@3x).png')}
                  resizeMode={'contain'}
                  style={{ height: 25, width: 25 }}
                />
              )
            }
            else {
              return (
                <Image source={require('../assets/images/icons/Menu/icons8-hamburger-menu-144(@3x).png')}
                  resizeMode={'contain'}
                  style={{ height: 25, width: 25 }}
                />
              )
            }
          }
        }} />

 {/*....................................Search.......................................*/}
        <Tab.Screen name="Find" component={Search} options={{

          tabBarActiveTintColor: '#3498DB',
          tabBarInactiveTintColor: '#CCCCCC',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <Image source={require('../assets/images/icons/search/blueSearch.png')}
                  resizeMode={'contain'}
                  style={{ height: 25, width: 25 }}
                />
              )
            }
            else {
              return (
                <Image source={require('../assets/images/icons/search/icons8-search-90.png')}
                  resizeMode={'contain'}
                  style={{ height: 25, width: 25 }}
                />
              )
            }
          }
        }} />


{/*....................................MyStuff.......................................*/}        
        <Tab.Screen name="My Stuff" component={Stuff} options={{

          tabBarActiveTintColor: '#3498DB',
          tabBarInactiveTintColor: '#CCCCCC',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <Image source={require('../assets/images/icons/userIcons/icons8-male-user-96.png')}
                  resizeMode={'contain'}
                  style={{ height: 25, width: 25 }}
                />
              )
            }
            else {
              return (
                <Image source={require('../assets/images/icons/userIcons/icons8-male-user-96.png')}
                  resizeMode={'contain'}
                  style={{ height: 25, width: 25 }}
                />
              )
            }
          }
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navig

const styles = StyleSheet.create({})