import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../themes/COLORS';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import UserICon from 'react-native-vector-icons/FontAwesome';
import Security from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const UserProfile = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.userImgIcon}>
        <UserICon
          name={'user'}
          size={responsiveFontSize(10)}
          color={COLORS.white}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: responsiveHeight(1)}}>
        <Text
          style={{
            fontSize: responsiveFontSize(4),
            color: COLORS.black,
            fontWeight: '700',
          }}>
          Umesh
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(2.2),
            color: COLORS.black,
            fontWeight: '400',
          }}>
          Customer
        </Text>
      </View>
      {/* information */}
      <View style={[styles.userView, {marginTop: responsiveHeight(5)}]}>
        <UserICon
          name={'user'}
          size={responsiveFontSize(3)}
          color={COLORS.black}
        />
        <Text>Personal Information</Text>
      </View>

      <View style={[styles.userView, {marginTop: responsiveHeight(2)}]}>
        <Security
          name={'security'}
          size={responsiveFontSize(3)}
          color={COLORS.black}
        />
        <Text>Change Password</Text>
      </View>

      <View
        style={[
          styles.userView,
          {
            marginTop: responsiveHeight(2),
            borderBottomWidth: responsiveWidth(0.4),
            paddingBottom: responsiveHeight(1),
          },
        ]}>
        <Entypo
          name={'help'}
          size={responsiveFontSize(3)}
          color={COLORS.black}
        />
        <Text>Help & Support</Text>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: responsiveHeight(10),
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: responsiveWidth(10),
          backgroundColor: COLORS.Primary,
          width: responsiveWidth(80),
          height: responsiveHeight(6),
          borderRadius: responsiveWidth(2),
          gap: responsiveWidth(3),
        }}>
        <MaterialIcons
          name={'logout'}
          size={responsiveFontSize(3)}
          color={COLORS.white}
        />
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: COLORS.white,
            fontWeight: '700',
          }}>
          Logout
        </Text>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  userImgIcon: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    backgroundColor: COLORS.graylight,
    borderRadius: responsiveWidth(15),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(10),
  },
  userView: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveWidth(5),
    borderTopColor: COLORS.black,
    borderTopWidth: responsiveWidth(0.4),
    marginHorizontal: responsiveWidth(10),
    paddingTop: responsiveHeight(1),
  },
});
