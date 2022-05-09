import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const TopH = getStatusBarHeight();
const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('start');
  }, 1000);
  return (
    <View style={styles.main}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../assets/images/icons/prime-video-1.png')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#12212d',
    paddingTop: TopH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView:{
      height: '30%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  image: {
    height: '40%',
    width: '80%',
  },
});
