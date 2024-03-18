import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes/COLORS';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import UserICon from 'react-native-vector-icons/FontAwesome';
import Security from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const UserProfile = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* profile image container  */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.userImgIcon}>
          <FontAwesome6
            name={'circle-user'}
            size={responsiveFontSize(14)}
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
      </View>

      {/* information */}
      <View style={{flex: 2, justifyContent: 'center'}}>
        <TouchableOpacity style={styles.userView}>
          <UserICon
            name={'user-circle-o'}
            size={responsiveFontSize(3.5)}
            color={COLORS.black}
          />
          <Text style={styles.serviceText}>Personal Information</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.userView}>
          <Security
            name={'security'}
            size={responsiveFontSize(3.5)}
            color={COLORS.black}
          />
          <Text style={styles.serviceText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.userView,
            {
              borderBottomWidth: responsiveWidth(0.4),
              borderBottomColor: 'black',
            },
          ]}>
          <FontAwesome6
            name={'headset'}
            size={responsiveFontSize(3)}
            color={COLORS.black}
          />
          <Text style={styles.serviceText}>Help & Support</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <TouchableOpacity style={styles.logOutButton}>
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
        </TouchableOpacity>
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
    height: responsiveHeight(8),
    alignItems: 'center',
    gap: responsiveWidth(5),
    borderTopColor: COLORS.black,
    borderTopWidth: responsiveWidth(0.4),
    marginHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(1),
  },
  logOutButton: {
    position: 'absolute',
    bottom: responsiveHeight(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(10),
    backgroundColor: COLORS.Primary,
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(2),
    gap: responsiveWidth(3),
  },
  serviceText: {
    fontSize: responsiveFontSize(2),
    color: 'black',
  },
});
