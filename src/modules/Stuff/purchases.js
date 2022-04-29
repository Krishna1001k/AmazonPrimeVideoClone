import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Purchases = () => {
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require('../../assets/images/icons/purchases_new.png')} />
      <Text style={styles.text}>{'Rent & buy your favorites'}</Text>
    </View>
  )
}

export default Purchases

const styles = StyleSheet.create({
main:{
  flex:1,
  backgroundColor:'#12212d',
  justifyContent:'center',
  alignItems:'center',
},
image:{
  height:'30%',
  width:'40%'
},
text:{
  color:'white',
  fontSize:17,
  fontWeight:'900'
}
})