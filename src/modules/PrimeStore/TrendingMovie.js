import { StyleSheet, Text, View,Dimensions,FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import TopMoviesView from '../../component/TopMoviesView'

const {height,width}=Dimensions.get('window');

const render = (item) => {
    return(
        <TopMoviesView item={item} />
    )
    
}

export default  TrendingMovie = (props) => {
    // const { topMovies,trendingMovies } = useSelector((store) => store.TabHomeReducer)

  return (
      

    <View style={styles.display}>

        <FlatList
          data={props.trendingMovies}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          renderItem={({ item }) =>render(item)}
        />
      </View>
  )
}



const styles = StyleSheet.create({
    display: {
        height: height/7.9 ,
        backgroundColor: '#1d242e',
        // borderWidth: 1,
        // marginBottom: 4,
        padding:3,
    
      },
})