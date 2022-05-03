import { View, Text , Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation,useNavigationState } from '@react-navigation/native'
import { useRoute,getFocusedRouteNameFromRoute } from '@react-navigation/native'
const {height,width}=Dimensions.get('screen')

export default function TopMoviesView(props) {
const navigation=useNavigation();
// const state=useNavigationState(state => state)
// // const routeName=getFocusedRouteNameFromRoute();
// console.log(state)
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('MovieDisplay',{item:props.item})} style={styles.renderView}>

    
    
    <View style={styles.imageView}>
      <Image
        
        // resizeMethod='auto'
        
        style={styles.moviesImage}
        source={{ uri: `https://image.tmdb.org/t/p/w780${props.item.backdrop_path}` }}
      />
    </View>
    <View style={styles.titleView} ><Text style={styles.titleText}>{props.item.original_title}</Text>
    </View>


  </TouchableOpacity>
)
}
const styles = StyleSheet.create({
  renderView: {
    backgroundColor: '#1d242e',
    width: width / 2.2,
    height: height / 9,
    marginLeft: 10,
    borderRadius: 4,
    overflow: 'hidden',
  },
  titleView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    // height:'10%',
  },
  titleText: {
    color: 'white',
    fontSize: 10,
  },

  imageView: {
    overflow: 'hidden',
    // maxHeight: '89%',
    // minHeight: '85%',
    aspectRatio:2.2,
    width: '100%',
    backgroundColor: '#1d242e',
  },

  moviesImage: {
    width: '100%',
    // aspectRatio:1,
    height: '100%',
  },
});