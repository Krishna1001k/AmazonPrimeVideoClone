import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {height, width} = Dimensions.get('screen');

const TopH = getStatusBarHeight();

//...............................main function............................
const MovieDisplay = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [lines, setLines] = useState(3);

  // const state=useNavigationState(state => state)
  // console.log(state)

  const item = route.params.item;
  console.log(item);

  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={{flex: 1}} bounces={false}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.display}>
          <Image
            resizeMode="cover"
            style={{height: 230, width: '100%'}}
            source={{
              uri: `https://image.tmdb.org/t/p/w780${item.backdrop_path}`,
            }}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.titleText1}>{item.title}</Text>
          <Text style={styles.primeText}>{'prime'}</Text>
          <Text style={styles.text2}>{'Included with Prime'}</Text>
          <TouchableOpacity style={styles.play}>
            <Image
              style={styles.playImage}
              source={require('../assets/images/icons/play-64.png')}
            />
            <Text style={styles.playText}>{'Watch Now'}</Text>
          </TouchableOpacity>
        </View>
        {/* ..............................option....................................... */}
        <View style={styles.option}>
          <TouchableOpacity style={styles.optionBtnView}>
            <View style={styles.optionBtn}>
              <Image
                style={styles.add}
                source={require('../assets/images/icons/add.png')}
              />
            </View>
            <Text style={styles.btnText}>{'Watchlist'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionBtnView}>
            <View style={styles.optionBtn}>
              <Image
                style={styles.download}
                source={require('../assets/images/icons/download/icons8-download-100.png')}
              />
            </View>
            <Text style={styles.btnText}>{'Download'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtnView}>
            <View style={styles.optionBtn}>
              <Image
                style={styles.party}
                source={require('../assets/images/icons/popper.png')}
              />
            </View>
            <Text style={styles.btnText}>{'Watch Party'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtnView}>
            <View style={styles.optionBtn}>
              <Image
                style={styles.share}
                source={require('../assets/images/icons/share.png')}
              />
            </View>
            <Text style={styles.btnText}>{'Share'}</Text>
          </TouchableOpacity>
        </View>

        {/* ...............................detail........................ */}
        <View style={styles.detailView}>
          <TouchableOpacity
            onPress={() => setLines(10)}
            activeOpacity={1}
            style={styles.detail}>
            <Text numberOfLines={lines} style={styles.detailText}>
              {item.overview}
            </Text>
          </TouchableOpacity>

          <Text style={styles.imdbText}>{`IMDb ${item.vote_average}`}</Text>
          <Text style={styles.imdbText}>{`${item.release_date},  151min`}</Text>
          <Text style={styles.imdbText}>{`Language: ${item.original_language}, Subtitles(en)`}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDisplay;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#12212d',
    paddingTop: TopH,
  },
  display: {
    overflow: 'hidden',
    height: '30%',
    width: '100%',
    backgroundColor: 'grey',
  },
  title: {
    // height:height/5,
    // borderWidth:1,
    borderColor: 'grey',
    paddingLeft: 25,
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  titleText1: {
    fontSize: 28,
    color: 'white',
    fontWeight: '700',
  },
  primeText: {
    color: '#02a0d8',
    fontWeight: '800',
    fontSize: 15,
    // marginTop:2,
  },
  text2: {
    // marginVertical:3,
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  play: {
    marginTop: 10,
    height: height / 19,
    width: height / 2.5,
    backgroundColor: '#07a7e1',
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 3,
  },
  playImage: {
    height: '50%',
    width: '7%',
  },
  playText: {
    marginLeft: 12,
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
  },
  option: {
    height: height / 10,
    width: '95%',
    // borderWidth: 1,
    borderColor: 'grey',
    // paddingVertical: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    marginTop: 10,
  },
  optionBtnView: {
    height: '100%',
    width: '20%',
    // borderWidth:1,
    // justifyContent:'center',
    alignItems: 'center',
  },
  optionBtn: {
    height: '50%',
    width: '57%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  add: {
    height: '50%',
    width: '50%',
  },
  download: {
    height: '70%',
    width: '60%',
  },
  party: {
    height: '50%',
    width: '50%',
  },
  share: {
    height: '50%',
    width: '50%',
  },
  btnText: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: '500',
    color: 'grey',
  },
  detailView: {
    // height: height / 4,
    // borderWidth: 1,
    marginTop: 10,
    paddingLeft: 25,
  },
  detail: {
    width: '90%',
    marginVertical:5,
  },
  detailText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'left',
    // textAlignVertical:'center',
    lineHeight: 17,
  },
  imdbText:{
    fontSize:13,
    color:'#8196a4',
    fontWeight:'500',
    marginVertical:3,

  }
});
