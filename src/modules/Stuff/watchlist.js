import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Watchlist = () => {
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require('../../assets/images/icons/empty_list_watchlist_new.png')}/>
      <Text style={styles.text}>{"Browse now, watch later"}</Text>
    </View>
  )
}

export default Watchlist

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor: '#12212d',
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    height:'30%',
    width:'50%'
  },
  text:{
    color:'white',
    fontSize:17,
    fontWeight:'900'
  }
})