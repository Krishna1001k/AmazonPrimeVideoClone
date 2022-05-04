
import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import TopMoviesView from '../../../component/TopMoviesView'
import React from 'react'
import PopularTvShow from '../../../component/PopularTvShow'

const { height, width } = Dimensions.get('window')


const render = (item) => {
  return (
      <PopularTvShow item={item}/>
  )
}

const TopShows = (props) => {
    // const { topMovies ,trendingMovies} = useSelector((store) => store.TabHomeReducer)
  return (
    <View style={styles.display}>

        <FlatList
          data={props.show}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          renderItem={({ item }) =>render(item)}
        />
      </View>
  )
}

export default TopShows

const styles = StyleSheet.create({
    display: {
        height: height /7.9,
        // backgroundColor:'grey',
        backgroundColor: '#1d242e',
        // borderWidth: 1,
        // borderColor:'white',
        // marginBottom: 4,
       padding:3,
    
      },
})