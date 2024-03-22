import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
// import {request, PERMISSIONS} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';
// import {useSelector, useDispatch} from 'react-redux';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../../themes/COLORS';
import OtpInputs from 'react-native-otp-inputs';
// import useNetInfo from '../OtherScreens/useNetInfo';
// import NoConnection from '../OtherScreens/NoConnection';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationPropList} from '../../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {verifyEmailOtp} from '../../Hooks/verifyEmailOtp';
import Toast from 'react-native-toast-message';
import {TextInput} from 'react-native-gesture-handler';
import {Details, forgetOldPassword} from '../../Hooks/forgetOldPassword';

type NavigationProps = StackNavigationProp<
  StackNavigationPropList,
  'homeScreen',
  'loginScreen'
>;

const ResetVerifyOtpScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [otp, setOtp] = useState('');

  const [buttonIndicator, setButttonIndicator] = useState(false);
  //   const details = useSelector(state => state.ReduxStore.registrationData.user);
  // console.log("details>>>",details);

  const handleVerifyOtpClick = async () => {
    const payload: Details = {
      newPassword: newPassword,
      confirmPassword: confirmNewPassword,
      otp: otp,
    };
    let data = await forgetOldPassword(payload);
    if (data.result) {
      Toast.show({
        type: 'success',
        text1: 'OTP Varified',
        text2: `${data.data}`,
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

      navigation.navigate('loginScreen');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Verification failed',
        text2: `${data.message}`,
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
  };
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.logoView}>
          <Image
            source={require('../../assets/logo.png')}
            style={{
              width: responsiveWidth(28),
              height: responsiveWidth(28),
            }}
          />
        </View>
      </View>
      {/* otp view */}
      <View style={styles.view2}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Text style={styles.headingText}>Create New Password</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputeViewStyle}
            placeholder="enter new password"
            onChangeText={text => setNewPassword(text)}
            // placeholderTextColor={COLORS.black}
          />

          <TextInput
            style={styles.inputeViewStyle}
            placeholder="confirm new password"
            onChangeText={text => setConfirmNewPassword(text)}
            // placeholderTextColor={COLORS.black}
            secureTextEntry // Toggle password visibility
          />
        </View>

        {/* otp input view container */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <OtpInputs
            //   style={styles.otpContainer}
            style={styles.otpContainer}
            inputContainerStyles={styles.otpInputContainer}
            autofillFromClipboard
            handleChange={(code: string) => setOtp(code)}
            numberOfInputs={4}
            inputStyles={{
              fontSize: responsiveFontSize(3),
              color: COLORS.Primary,
            }}
          />
        </View>

        {/* button container */}
        <View style={styles.submitButtonContainer}>
          <TouchableOpacity
            onPress={handleVerifyOtpClick}
            // onPress={() => navigation.navigate('loginScreen')}
            style={styles.submitButton}>
            {buttonIndicator ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Text style={styles.submitButtonText}>Verify OTP</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* resend otp container */}
        {/* <View
          style={{
            flex: 1,
            alignItems: 'center',
            gap: responsiveWidth(2),
          }}>
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
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    backgroundColor: 'white',
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: responsiveFontSize(3),
    fontWeight: '700',
    color: COLORS.Primary,
    margin: responsiveWidth(5),
    marginLeft: responsiveWidth(5),
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
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
  image: {
    width: responsiveWidth(80),
    height: responsiveHeight(35),
    marginTop: responsiveWidth(8),
  },
  view2: {
    flex: 3,
    // backgroundColor: '#EAFFEA',
    borderTopLeftRadius: responsiveWidth(8),
    borderTopRightRadius: responsiveWidth(8),
    // alignItems: 'center',
  },
  otpContainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(10),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  otpInputContainer: {
    width: responsiveWidth(18),
    height: responsiveHeight(9),
    borderRadius: responsiveWidth(3),
    borderWidth: 1,
    borderColor: COLORS.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpTitle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    color: '#8F0592',
    width: responsiveWidth(90),
  },
  inputeViewStyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(6.5),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(2),
    borderColor: COLORS.Primary,
    borderWidth: responsiveWidth(0.2),
    marginVertical: responsiveScreenWidth(1),
    fontSize: responsiveFontSize(2),
  },

  submitButtonContainer: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  submitButton: {
    width: responsiveWidth(90),
    height: responsiveHeight(6.5),
    backgroundColor: COLORS.Primary,
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
  },
});

export default ResetVerifyOtpScreen;
