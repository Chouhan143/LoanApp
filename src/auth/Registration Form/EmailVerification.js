import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import logo from '../../assets/logo.png';
import {COLORS} from '../../themes/COLORS';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const EmailVerification = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View style={styles.logoView}>
          <Image
            source={logo}
            style={{width: responsiveWidth(28), height: responsiveWidth(28)}}
          />
        </View>
      </View>
      {/* login ui  */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: responsiveWidth(3),
        }}>
        <View
          style={{
            marginTop: responsiveHeight(3),
          }}>
          <Text style={styles.Heading}>Email Verification</Text>
          <Text
            style={{
              color: COLORS.black,
              fontSize: responsiveFontSize(2.5),
              fontWeight: '400',
              marginHorizontal: responsiveWidth(3),
              marginVertical: responsiveWidth(3),
            }}>
            Kindly inpute 6 digit code we have send to your email
          </Text>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: responsiveWidth(4),
            }}>
            <TextInput
              style={styles.inputeViewStyle}
              placeholder="name@example.com"
              // placeholderTextColor={COLORS.black}
            />
            <Text
              style={{
                color: COLORS.black,
                fontSize: responsiveFontSize(2),
                fontWeight: '400',
              }}>
              Did not recieved code?
            </Text>
            <Text
              style={{
                color: COLORS.Secondry,
                fontSize: responsiveFontSize(2),
                fontWeight: '700',
              }}>
              Resend code
            </Text>
          </View>
        </View>
      </View>

      {/* Sign In button  */}
      <View
        style={{
          flex: 0.5,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: responsiveFontSize(2.5),
                fontWeight: '700',
              }}>
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EmailVerification;

const styles = StyleSheet.create({
  container: {
   width:responsiveScreenWidth(100),
   height:responsiveScreenHeight(100),
    backgroundColor: COLORS.white,
  },
  logoView: {
    borderWidth: responsiveWidth(0.5),
    borderColor: COLORS.Primary,
    width: responsiveWidth(38),
    height: responsiveWidth(38),
    borderRadius: responsiveWidth(19),
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dotted',
  },
  Heading: {
    fontSize: responsiveFontSize(4),
    fontWeight: '700',
    paddingLeft: responsiveWidth(2),
    marginBottom: responsiveHeight(2),
    color: COLORS.Secondry,
  },
  inputeViewStyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(2),
    borderColor: COLORS.graylight,
    borderWidth: responsiveWidth(0.2),
  },

  loginBtn: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: COLORS.Primary,
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
