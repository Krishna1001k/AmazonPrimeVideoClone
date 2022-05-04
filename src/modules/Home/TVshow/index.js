import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TopMoviesList from './TopMovieListView'
import TrendingMovie from './TrendingMovie'
import TvShowApiCall from './action'
import { SliderBox } from "react-native-image-slider-box"
import TopShows from './PopularShow'

const { height, width } = Dimensions.get('screen')

function TvShow() {

  const { topMovies, trendingMovies } = useSelector((store) => store.tabHomeReducer)
  const {popularShow,topRatedShow}=useSelector((store)=>store.tvShowsReducer)
  // const store = useSelector()
  // console.log(store)
const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(TvShowApiCall)
  },[])

  let newArr = popularShow.map((obj) => {
      let URL = `https://image.tmdb.org/t/p/w780${obj.backdrop_path}`
      return URL
    })
    newArr = newArr.slice(1, 8)



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

      <Text style={styles.title} >{'Popular Tv Shows'}</Text>
      < TopShows show={popularShow}/>

      <Text style={styles.title}>{'Top Rated Shows'}</Text>
      < TopShows show={topRatedShow}/>

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

export default TvShow

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