import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../../themes/COLORS';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {ActivityIndicator} from 'react-native';
import {NavigationProps} from '../../navigation/Navigation';
import {forgetVerifyEmail} from '../../Hooks/forgetVerifyEmail';

const ResetVerifyEmailScreen: React.FC = () => {
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NavigationProps>();

  const handleProceedClick = async () => {
    setLoader(true);
    let data = await forgetVerifyEmail(email);
    console.log(data);

    if (data.result) {
      setLoader(false);
      Toast.show({
        type: 'success',
        text1: 'OTP sent successfully',
        text2: `${data.msg ? data.msg : data.errors.email[0]}`,
        text1Style: {
          fontSize: responsiveFontSize(2),
          fontWeight: '700',
          color: 'green',
        },
        text2Style: {
          fontSize: responsiveFontSize(1.8),
          fontWeight: '500',
          color: 'black',
        },
      });
      navigation.navigate('resetVerifyOtp');
    } else {
      setLoader(false);
      Toast.show({
        type: 'error',
        text1: 'Failed to sent OTP',
        text2: `${data.msg ? data.msg : data.errors.email[0]}`,
        text1Style: {
          fontSize: responsiveFontSize(2),
          fontWeight: '700',
          color: 'red',
        },
        text2Style: {
          fontSize: responsiveFontSize(1.8),
          fontWeight: '500',
          color: 'black',
        },
      });
    }
    // console.log('email verfication>>>', data);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoView}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logoStyle}
          />
        </View>
      </View>
      {/* login ui  */}
      <View style={styles.emailContainer}>
        <View>
          <Text style={styles.Heading}>Enter Email </Text>
          <Text style={styles.alertText}>
            Please check your email we will send OTP on registered email
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputeViewStyle}
              onChangeText={text => setEmail(text)}
              value={email}
              // editable={false}
              placeholder="enter registered email"
              // placeholderTextColor={COLORS.black}a
            />
          </View>
        </View>
      </View>

      {/* Sign In button  */}
      <View
        style={{
          flex: 0.5,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('otpScreen')}
            onPress={handleProceedClick}
            style={styles.loginBtn}>
            {loader ? (
              <ActivityIndicator size={'large'} color={'white'} />
            ) : (
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: responsiveFontSize(2.5),
                  fontWeight: '700',
                }}>
                Proceed
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetVerifyEmailScreen;

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    backgroundColor: COLORS.white,
  },
  logoContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(40.33),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {width: responsiveWidth(28), height: responsiveWidth(28)},
  alertText: {
    color: COLORS.black,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '400',
    marginHorizontal: responsiveWidth(3),
    marginVertical: responsiveWidth(3),
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
  emailContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(33.33),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // paddingHorizontal: responsiveWidth(3),
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // gap: responsiveWidth(4),
  },
  inputeViewStyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(3),
    borderColor: COLORS.graylight,
    borderWidth: responsiveWidth(0.2),
    fontSize: responsiveFontSize(2),
    color: 'black',
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
