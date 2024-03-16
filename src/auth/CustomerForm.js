import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../themes/COLORS';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const CustomerForm = () => {
  return (
    <View style={styles.conatainer}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: responsiveHeight(2),
          marginTop: responsiveWidth(8),
        }}>
        <TextInput style={styles.InputeFiledView} placeholder="Your Name" />
        <TextInput style={styles.InputeFiledView} placeholder="Phone No." />
        <TextInput
          style={styles.InputeFiledView}
          placeholder="name@example.com"
        />
        <TextInput style={styles.InputeFiledView} placeholder="******" />
        <TextInput style={styles.InputeFiledView} placeholder="Location" />
        <TextInput style={styles.InputeFiledView} placeholder="Address" />
      </View>
      {/* button */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: responsiveFontSize(2.5),
              fontWeight: '700',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerForm;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: responsiveWidth(5),
  },
  InputeFiledView: {
    width: responsiveWidth(90),
    height: responsiveHeight(5),
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(1),
    paddingLeft: responsiveWidth(2),
  },
  loginBtn: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: COLORS.Primary,
    borderRadius: responsiveWidth(1),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: responsiveHeight(15),
  },
});
