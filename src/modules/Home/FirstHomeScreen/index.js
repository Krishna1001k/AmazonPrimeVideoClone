import { StyleSheet, Text, View,Image, Dimensions,ScrollView,StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import HomeNav from '../HomeRouter/index'

const Home = () => {


  return (

    <View style={styles.main}  >
        {/* ......................Header.................................. */}
        <View style={styles.header}>
          <Image
            resizeMode='contain'
            style={styles.hImage} source={require('../../../assets/images/icons/prime-video-1.png')} />

        </View>
{/* .............................TOP Tab Navigation.................................... */}
 <HomeNav/> 
   
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#1d242e',
        // backgroundColor:'gray',
      // paddingVertical:40,
      
    },
    header:{
      height: '10%',
      // borderWidth:1,
      // borderColor:'white',
      backgroundColor:'#1d242e',
      justifyContent:"flex-end",
      alignItems:'center',
    },
  hImage:{
      height:'40%',
      width:'70%',
      alignSelf:"center"
      // position:'absolute',
      // marginTop:40,
    },
    // firstScreen:{
    //   height:'100%',
    //   borderWidth:1,
    // },

})