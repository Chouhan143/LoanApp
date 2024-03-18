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
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import logo from '../../assets/logo.png';
import {COLORS} from '../../themes/COLORS';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleSignupPress = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleForgetPasswordPress = () => {
    navigation.navigate('ResetPassword');
  };

  const handleSignInPress = () => {
    navigation.navigate('BottomTab');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
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
          // paddingHorizontal: responsiveWidth(3),
        }}>
        <View style={styles.inputFormContainer}>
          <Text style={styles.Heading}>Sign In</Text>
          <TextInput
            style={styles.inputeViewStyle}
            placeholder="enter email here"
          />
          <TextInput
            style={styles.inputeViewStyle}
            placeholder="enter password here"
          />
        </View>
      </View>

      {/* Sign In button  */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          // backgroundColor:"red"
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={handleSignInPress} style={styles.loginBtn}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: responsiveFontSize(2.5),
                fontWeight: '700',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            marginHorizontal: responsiveWidth(6),
            flexDirection: 'row',
            marginVertical: responsiveHeight(1),
          }}>
          <Text
            onPress={handleForgetPasswordPress}
            style={{
              color: COLORS.black,
              fontSize: responsiveFontSize(2),
              fontWeight: '400',
            }}>
            Forgot Password?
          </Text>
          <Text
            onPress={handleSignupPress}
            style={{
              color: COLORS.Secondry,
              fontSize: responsiveFontSize(2),
              fontWeight: '700',
            }}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logoContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
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
    margin: responsiveWidth(3),
    color: COLORS.Secondry,
  },
  inputFormContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputeViewStyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(2),
    borderColor: COLORS.graylight,
    borderWidth: responsiveWidth(0.2),
    marginVertical: responsiveWidth(3),
  },

  loginBtn: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: COLORS.Primary,
    borderRadius: responsiveWidth(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
