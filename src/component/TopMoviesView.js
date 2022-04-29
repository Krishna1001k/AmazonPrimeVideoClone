import { View, Text , Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'

const {height,width}=Dimensions.get('screen')

export default function TopMoviesView(props) {

  return (
    <TouchableOpacity style={styles.renderView}>

    
    
    <View style={styles.imageView}>
      <Image
        
        // resizeMethod='auto'
        
        style={styles.moviesImage}
        source={{ uri: `https://image.tmdb.org/t/p/w780${props.item.poster_path}` }}
      />
    </View>
    <View style={styles.titleView} ><Text style={styles.titleText}>{props.item.original_title}</Text>
    </View>


  </TouchableOpacity>
)
}
const styles = StyleSheet.create({
renderView:{
    // backgroundColor:'#1d242e',
    backgroundColor:'white',
    // marginRight:10,
    // maxHeight:height/10,
    // maxWidth: width/2.3 ,
    // minHeight:height/9,
    // minWidth:width/2.2,
    width:width/2.2,
    height:height/9,
    marginLeft:20,
    borderRadius:4,
    // borderWidth:1,
    // borderColor:'yellow',
    overflow:'hidden'
   
    
    // justifyContent:'flex-start',
    // alignContent:'center', 
    // alignItems:'center'
    // 
    // paddingLeft:10,
  },
  titleView:{
    flex:1,
     width:'100%',
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center',
      overflow:'hidden',
      height:'10%',
    
  },
  titleText:{ 
      color: 'white', 
      fontSize: 10,
     },


  imageView:{
overflow:'hidden',
      height:"86%",
      width:'100%',
      backgroundColor:'#1d242e'
    },

  moviesImage:{
    width:'100%',
    aspectRatio:1,
//    height:'100%',
   
    
  }
})