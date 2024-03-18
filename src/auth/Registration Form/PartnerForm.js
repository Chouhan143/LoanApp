import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes/COLORS';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const PartnerForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatainer}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.inputfieldContainer}>
          <TextInput style={styles.inputFiled} placeholder="Your Name" />
          <TextInput style={styles.inputFiled} placeholder="Phone No." />
          <TextInput style={styles.inputFiled} placeholder="name@example.com" />
          <TextInput style={styles.inputFiled} placeholder="******" />
          <TextInput style={styles.inputFiled} placeholder="Location" />
          <TextInput style={styles.inputFiled} placeholder="Address" />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EmailVerification')}
            style={styles.loginBtn}>
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
    </View>
  );
};

export default PartnerForm;
const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  InputeFiledView: {
    width: responsiveWidth(92),
    height: responsiveHeight(6),
    marginVertical: responsiveWidth(1),
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(2),
  },
  inputFiled: {
    width: responsiveWidth(92),
    height: responsiveHeight(6),
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(2),
  },
  loginBtn: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: COLORS.Primary,
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputfieldContainer: {
    flex: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
});
