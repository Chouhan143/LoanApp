import {View, Text, Image} from 'react-native';
import React from 'react';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import {COLORS} from '../themes/COLORS';

const Noconnection = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image source={require('../assets/nointernet.png')} />
      <Text
        style={{
          fontSize: responsiveScreenFontSize(2.2),
          color: COLORS.Primary,
          fontWeight: '500',
        }}>
        No connection found please check...
      </Text>
    </View>
  );
};

export default Noconnection;
