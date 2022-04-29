import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const Download = () => {
    

  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require('../../assets/images/icons/download/blueicons8-download-100.png')}/>
      <Text style={styles.text}>{"No videos downloaded"}</Text>
    </View>
  )
}

export default Download

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#12212d',
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