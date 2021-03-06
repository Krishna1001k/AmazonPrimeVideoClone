import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FirstApiCall from './action';
import {SliderBox} from 'react-native-image-slider-box';
import TopMoviesList from './TopMovieListView';
import TrendingMovie from './TrendingMovie';
import UpcomingMovies from './UpcomingMovies';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

const TabHome = () => {
  const navigation = useNavigation();
  // console.log("Home ka nav ", navigation)

  const {topMovies, trendingMovies, upcomingMovies} = useSelector(
    store => store.tabHomeReducer,
  );
  const dispatch = useDispatch();
  // console.log(topMovies)
  // const {}

  useEffect(() => {
    dispatch(FirstApiCall());
  }, []);

  let newArr = topMovies.map(obj => {
    let URL = `https://image.tmdb.org/t/p/w780${obj.backdrop_path}`;
    return URL;
  });
  newArr = newArr.slice(4, 12);

  return (
    <ScrollView contentContainerStyle={styles.main} bounces="false">
      <SliderBox
        images={newArr}
        autoplay
        circleLoop
        ImageLoader
        onCurrentImagePressed={img_indx => {
          const item = topMovies.findIndex(ele => {
            return (
              newArr[img_indx] ===
              `https://image.tmdb.org/t/p/w780${ele.backdrop_path}`
            );
          });

          return navigation.navigate('MovieDisplay', {item: topMovies[item]});
        }}
        ImageComponentStyle={styles.sliderImage}
        inactiveDotColor="grey"
        dotStyle={styles.dot}
        dotColor="white"
        // resizeMode='stretch'
        // resizeMode="cover"
      />

      <Text style={styles.title}>{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies} />

      <Text style={styles.title}>{'Trending Movies'}</Text>
      <TrendingMovie trendingMovies={trendingMovies} />

      <Text style={styles.title}>{'Upcoming Movies'}</Text>
      <UpcomingMovies upcomingMovies={upcomingMovies} />

      <Text style={styles.title}>{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies} />

      <Text style={styles.title}>{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies} />

      <Text style={styles.title}>{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies} />

      <Text style={styles.title}>{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies} />

      <Text style={styles.title}>{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies} />

      <Text style={styles.title}>{'Top Movies'}</Text>
      <TopMoviesList topMovies={topMovies} />
    </ScrollView>
  );
};

export default TabHome;

const styles = StyleSheet.create({
  main: {
    // flex:1,
    backgroundColor: '#1d242e',
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
});
