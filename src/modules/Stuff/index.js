import { StyleSheet, Text, View,Image,SafeAreaView ,Dimensions,TouchableOpacity,StatusBar} from 'react-native'
import Modal from "react-native-modal"
import React from 'react'
import MyStuffNav from './myStuffNav'
import { useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const {height,width}=Dimensions.get('screen')

const Menu= () => {
  
  const tabBarHeight = useBottomTabBarHeight()
const [modalVisible,setModalVisible]=useState(false)
  return (
    <View style={styles.main}>
      <Modal 
      style={{bottom:height/3.006,right:20,}}
      transparent={true}
      visible={modalVisible}
      animationInTiming={30000}
      animationOut="slideOutDown"
      onBackdropPress={()=>setModalVisible(false)}
      >

        <View style={styles.modalView}>

          <TouchableOpacity
          activeOpacity={true}
           style={styles.modalUser} onPress={()=>{setModalVisible(false)}}>
          <Image style={styles.modlaUserImage} source={require('../../assets/images/icons/userIcons/icons8-male-user-96.png')} /> 
        <Text style={styles.modalName}>{'Krishna'}</Text>
        <Image style={styles.modalArrow} source={require('../../assets/images/icons/up.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalkidView}>
            <Image style={styles.kidImage} source={require('../../assets/images/icons/kid-1.png')}/>
            <Text style={styles.kidText}>{'Kids'}</Text>
          </TouchableOpacity>

          <View style={styles.option}>
            <TouchableOpacity style={styles.optionList} >
              <Image style={styles.iconImage} source={require('../../assets/images/icons/add.png')}/>
              <Text style={styles.optionText}>{'Create profile'}</Text>
              </TouchableOpacity>

            <TouchableOpacity style={styles.optionList} >
              <Image style={styles.iconImage} source={require('../../assets/images/icons/pencil.png')}/>
              <Text style={styles.optionText}>{'Create profile'}</Text>
              </TouchableOpacity>

            <TouchableOpacity style={styles.optionList}>
              <Image style={styles.iconImage} source={require('../../assets/images/icons/i.png')}/>
              <Text style={styles.optionText}>{'Create profile'}</Text>
              </TouchableOpacity>

          </View>

        </View>

      </Modal>


      <View style={styles.header}>
        <TouchableOpacity 
        onPress={()=>{setModalVisible(true)}}
        activeOpacity={true}
        style={styles.user}
        > 
        <Image style={styles.userImage} source={require('../../assets/images/icons/userIcons/icons8-male-user-96.png')} /> 
        <Text style={styles.userName}>{'Krishna'}</Text>
        <Image style={styles.downArrow} source={require('../../assets/images/icons/Down-arrow-96.png')}/>
        </TouchableOpacity>
        <View style={styles.settingView}><Image style={styles.setImage} source={require('../../assets/images/icons/icons8-setting-64.png')}/></View>
      </View>
      <MyStuffNav />


    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#1d242e',
    paddingTop:height/21,
  },
  header:{
    height:height/14,
    width:width,
    // borderWidth:1,
    padding:width/100,
    flexDirection:'row',
  },
  user:{
    overflow:'hidden',
    flexDirection:'row',
    height:'100%',
    width:'80%',
    // justifyContent:'center',
    alignItems:'center',
    // borderWidth:1, 
  },
  userImage:{
    height:'100%',
    width: '18%',
    marginHorizontal:width/40,
  },
  userName:{
    fontSize:20,
    color:'white',
    fontWeight:'800',
  },
  downArrow:{
    height:'50%',
    width:'10%',
  },
  settingView:{
    height:'100%',
    width:'20%',
    // borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'white'

  },
  setImage:{
    height:'50%',
    width:'35%'
  },
  modalView:{
    backgroundColor:'#12212d',
    // backgroundColor:'white',
    height:'40%',
    width:width,
    paddingTop:height/14.75,

  },
  modalUser:{
    flexDirection:'row',
    alignItems:'center',
    height:'25%',
    // borderWidth:1,
    borderColor:'grey',
    paddingHorizontal:4.4,
    // paddingBottom:15,
  
  },
  modlaUserImage:{
    height:'77%',
    width: '14.4%',
    marginHorizontal:width/40,
  },
  modalName:{
    fontSize:20,
    color:'white',
    fontWeight:'800',

  },
  modalArrow:{
    height:'20%',
    width:'8%',
    // marginHorizontal:width/90,
  },
  modalkidView:{
    flexDirection:'row',
    // borderWidth:1,
    // borderColor:'grey',
    height:'16%',
    // justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
  },
  kidImage:{
    height:'73%',
    width:'8%',
    marginHorizontal:15,
  },
  kidText:{
    color:'white',
    fontWeight:'500',
    fontSize:15,
  },
  option:{
    borderTopWidth:1,
    borderColor:'grey',
    height:'56%',
    paddingVertical:8,
    // marginTop:10,
    justifyContent:'space-around',
  },

  optionList:{
    overflow:'hidden',
    flexDirection:'row',
    marginTop:10,
    height:'23%',
    // borderWidth:1,
    // borderColor:'grey',
    paddingHorizontal:20,
    alignItems:'center',
  
  },
  iconImage:{
    height:'80%',
    width:'7%',
  },
  optionText:{
    marginLeft:18,
    color:'white',
    fontSize:16,
    fontWeight:'600'

  },
})