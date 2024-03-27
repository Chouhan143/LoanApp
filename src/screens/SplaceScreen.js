import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import logo from '../assets/logo.png';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../themes/COLORS';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const SplaceScreen = () => {
  const scaleValue = useSharedValue(0); // Initial scale value

  useEffect(() => {
    // Trigger the animation to scale from 0 to 1
    scaleValue.value = withTiming(1, {
      duration: 1200,
      easing: Easing.inOut(Easing.ease),
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={`${COLORS.Primary}`}
        barStyle={'light-content'}
      />
      <View style={styles.topContainer}>
        {/* <View style={styles.triangelContainer}>
          <View style={styles.triangle} />
        </View>
        <View style={styles.triangelContainer}>
          <View style={styles.triangle} />
        </View> */}
      </View>
      <View style={styles.middleContainer}>
        <Animated.View
          style={[
            styles.logoContainer,
            {
              transform: [{scale: scaleValue}],
            },
          ]}>
          <Image
            source={logo}
            style={{width: responsiveWidth(38), height: responsiveWidth(38)}}
          />
        </Animated.View>
        <Animated.View
          style={[
            {
              transform: [{scale: scaleValue}],
            },
          ]}>
          <Text style={styles.welcomeText}>Welcome</Text>
        </Animated.View>
      </View>
      <View style={styles.bottomContainer}>
        {/* <View style={styles.triangelContainer}>
          <View style={styles.triangleBottomLeft} />
        </View>
        <View style={styles.triangelContainer}>
          <View style={styles.triangleBottomRight} />
        </View> */}

      </View>
    </View>
  );
};

export default SplaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // backgroundColor: '#f5f8fa',
  },
  logoContainer: {
    borderWidth: responsiveWidth(0.5),
    borderColor: '#15549A',
    width: responsiveWidth(48),
    height: responsiveWidth(48),
    borderRadius: responsiveWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dotted',
    backgroundColor: 'white',
  },
  triangelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0, // Adjust as needed
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0, // Adjust thickness to control the triangle size
    borderRightWidth: 100, // Adjust width to control the triangle size
    borderBottomWidth: 100, // Adjust height to control the triangle size
    borderLeftWidth: 100, // Adjust thickness to control the triangle size
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.Primary, // Change this to your desired background color
    borderLeftColor: 'transparent',
    position: 'absolute',
    top: 0,
    transform: [{rotate: '180deg'}],
  },
  triangleBottomLeft: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0, // Adjust thickness to control the triangle size
    borderRightWidth: 100, // Adjust width to control the triangle size
    borderBottomWidth: 100, // Adjust height to control the triangle size
    borderLeftWidth: 100, // Adjust thickness to control the triangle size
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.Primary, // Change this to your desired background color
    borderLeftColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    transform: [{rotate: '360deg'}],
  },
  triangleBottomRight: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0, // Adjust thickness to control the triangle size
    borderRightWidth: 100, // Adjust width to control the triangle size
    borderBottomWidth: 100, // Adjust height to control the triangle size
    borderLeftWidth: 100, // Adjust thickness to control the triangle size
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.Primary, // Change this to your desired background color
    borderLeftColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    transform: [{rotate: '360deg'}],
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  welcomeText: {
    fontSize: responsiveScreenFontSize(5),
    fontWeight: '700',
    color: COLORS.Primary,
    marginTop: responsiveWidth(5),
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'purple',
  },
  designLeftStyle: {
    width: responsiveWidth(30),
    height: responsiveHeight(10),
    backgroundColor: COLORS.Primary,
    borderBottomRightRadius: responsiveScreenHeight(25),
  },
  designRightStyle: {
    width: responsiveWidth(30),
    height: responsiveHeight(10),
    backgroundColor: COLORS.Primary,
    borderBottomLeftRadius: responsiveScreenHeight(25),
  },
  designBottomRightStyle: {
    width: responsiveWidth(30),
    height: responsiveHeight(10),
    backgroundColor: COLORS.Primary,
    borderTopRightRadius: responsiveScreenHeight(25),
  },
  designBottomLeftRightStyle: {
    width: responsiveWidth(30),
    height: responsiveHeight(10),
    backgroundColor: COLORS.Primary,
    borderTopLeftRadius: responsiveScreenHeight(25),
  },
});
