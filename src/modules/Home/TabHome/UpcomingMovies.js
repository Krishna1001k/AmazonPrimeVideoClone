
import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import TopMoviesView from '../../../component/TopMoviesView'
import React from 'react'

const { height, width } = Dimensions.get('screen')


const render = (item) => {
  return (
      <TopMoviesView item={item}/>
  )
}

const  UpcomingMovies = (props) => {
  return (
    <View style={styles.display}>

        <FlatList
          data={props.upcomingMovies}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          renderItem={({ item }) =>render(item)}
        />
      </View>
  )
}

export default  UpcomingMovies

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