import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Video from 'react-native-video';
import PiP from './src/components/PiP';

import {TestIds, BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import {enterPictureInPictureMode} from 'nelumbo-react-native-picture-in-picture';

const App = () => {
  const urlVideo = require('./videos/ForBiggerBlazes.mp4');
  const {width, height} = Dimensions.get('window');

  const onclick = () => {
    enterPictureInPictureMode();
  };

  const eliment = (
    //    VIDEO
    /*
    <Video
      ref={VideoRef}
      //paused
      source={urlVideo}
      style={{width: 290, height: 290}}
      resizeMode={'cover'}
      muted
      repeat
      playInBackground
    />
*/
    /*
      //    IMAGE
    
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 290, height: 290}}
        resizeMode={'cover'}
      />
    
  */
    /*
    //    TEXT
    
      <Text style={{color: '#000000', fontSize: 20}}>
        You can put anything you want in this window
      </Text>
    
  */

    //      ADS

    // <BannerAd
    //   unitId={TestIds.BANNER}
    //   size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    //   // onAdFailedToLoad={error => console.error(error)}
    // />
    <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.MEDIUM_RECTANGLE} />
  );

  return (
    <PiP start={true} ComponentPiP={eliment}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Text
            style={{
              color: '#3B3486',
              fontSize: 25,
              margin: 10,
              marginHorizontal: 20,
            }}>
            show video{'\n'}
          </Text>

          <View>
            <BannerAd
              unitId={TestIds.BANNER}
              size={BannerAdSize.MEDIUM_RECTANGLE}
            />
          </View>

          <Text
            style={{
              fontSize: 25,
            }}>
            Hello World! I`m Anas Sh{'\n'}
          </Text>
          <Image
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={{width, height: height / 4}}
            resizeMode={'contain'}
          />
          <TouchableOpacity
            style={{backgroundColor: '#7743DB', borderRadius: 10, margin: 50}}
            onPress={onclick}>
            <Text
              style={{
                color: '#FFE9B1',
                fontSize: 25,
                margin: 10,
                marginHorizontal: 20,
              }}>
              PiP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: '#7743DB', borderRadius: 10, margin: 50}}
            onPress={onclick}>
            <Text
              style={{
                color: '#FFE9B1',
                fontSize: 25,
                margin: 10,
                marginHorizontal: 20,
              }}>
              PiP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: '#7743DB', borderRadius: 10, margin: 50}}
            onPress={onclick}>
            <Text
              style={{
                color: '#FFE9B1',
                fontSize: 25,
                margin: 10,
                marginHorizontal: 20,
              }}>
              PiP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: '#7743DB', borderRadius: 10, margin: 50}}
            onPress={onclick}>
            <Text
              style={{
                color: '#FFE9B1',
                fontSize: 25,
                margin: 10,
                marginHorizontal: 20,
              }}>
              PiP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: '#7743DB', borderRadius: 10, margin: 50}}
            onPress={onclick}>
            <Text
              style={{
                color: '#FFE9B1',
                fontSize: 25,
                margin: 10,
                marginHorizontal: 20,
              }}>
              PiP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: '#7743DB', borderRadius: 10, margin: 50}}
            onPress={onclick}>
            <Text
              style={{
                color: '#FFE9B1',
                fontSize: 25,
                margin: 10,
                marginHorizontal: 20,
              }}>
              PiP
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </PiP>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
