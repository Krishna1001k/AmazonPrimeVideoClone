import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TopMoviesList from './TopMovieListView'
import TrendingMovie from './TrendingMovie'
import { SliderBox } from "react-native-image-slider-box"

const { height, width } = Dimensions.get('screen')

function Kids() {

  const { topMovies, trendingMovies } = useSelector((store) => store.tabHomeReducer)
  // const store = useSelector()
  // console.log(store)


  let newArr = topMovies.map((obj) => {
      let URL = `https://image.tmdb.org/t/p/w780${obj.backdrop_path}`
      return URL
    })
    newArr = newArr.slice(4, 12)

  return (
    <ScrollView contentContainerStyle={styles.main} bounces={'false'}>
      <SliderBox images={newArr}
                    autoplay
                    circleLoop
                    ImageLoader
                    ImageComponentStyle={styles.sliderImage}
                    inactiveDotColor='grey'
                    dotStyle={styles.dot}
                    dotColor="white"
                    resizeMode="cover"
                  />

      <Text style={styles.title} >{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies}/>

      <Text style={styles.title}>{'Trending Movies'}</Text>
      <TrendingMovie trendingMovies={trendingMovies}/>
      <Text style={styles.title} >{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies}/>

      <Text style={styles.title} >{'Top Movies'}</Text>

      <TopMoviesList topMovies={topMovies}/>

      <Text style={styles.title} >{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies}/>

      <Text style={styles.title} >{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies}/>

      <Text style={styles.title} >{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies}/>

      <Text style={styles.title} >{'Top Movies'}</Text>
      <TrendingMovie trendingMovies={trendingMovies}/>

      <Text style={styles.title} >{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies}/>

    </ScrollView>
  )
}

export default Kids

const styles = StyleSheet.create({
  main: {
    // flex:1,
    backgroundColor: '#1d242e',
    // paddingTop: 40,
    // backgroundColor:'white'

  },
  display: {
    height: height / 7,
    backgroundColor: '#1d242e',
    // borderWidth: 1,
    marginBottom: 4,

  },
  sliderImage: {
    height: height / 5,
    width: width,


  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 10,
  },


})