import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import logo from '../assets/logo.png';
import {responsiveWidth} from 'react-native-responsive-dimensions';
const SplaceScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white"
      }}>
      <View
        style={{
          borderWidth: responsiveWidth(0.5),
          borderColor: '#15549A',
          width: responsiveWidth(38),
          height: responsiveWidth(38),
          borderRadius: responsiveWidth(19),
          justifyContent: 'center',
          alignItems: 'center',
          borderStyle: 'dotted',
        }}>
        <Image
          source={logo}
          style={{width: responsiveWidth(28), height: responsiveWidth(28)}}
        />
      </View>
    </View>
  );
};

export default SplaceScreen;

const styles = StyleSheet.create({});
