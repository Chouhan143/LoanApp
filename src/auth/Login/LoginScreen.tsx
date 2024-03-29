import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  BackHandler,
  DevSettings
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../../themes/COLORS';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {userLogin} from '../../Hooks/loginUser';
import {StackNavigationPropList} from '../../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';

type NavigationProps = StackNavigationProp<StackNavigationPropList>;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProps>();
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const handleSignupPress = () => {
    navigation.navigate('signUpScreen');
  };

  const handleForgetPasswordPress = () => {
    navigation.navigate('resetVerifyEmail');
  };

  useEffect(() => {
    // AsyncStorage.clear();
    BackHandler.addEventListener('hardwareBackPress', backHandler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
    };
  }, []);

  const handleSignInPress = async () => {
    setLoader(true);
    // navigation.navigate('BottomTab');
    let payload = {
      email: email,
      password: password,
    };
    let data = await userLogin(payload);
    // console.log("login response >>>>>",data);
    if (data.data) {
      await AsyncStorage.setItem('loginUserDetails', JSON.stringify(data.data));
      setLoader(false);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: `${data.message}`,
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

      // navigation based on role
      console.log(data.data.role);

      switch (data.data.role) {
        case 'customer':
          navigation.navigate('homeScreen');
          break;
        case 'partner':
          console.log('navigate to partner');
          navigation.navigate('bottomTab');
          break;
        case 'associate':
          navigation.navigate('bottomTab');
          break;
        default:
          navigation.navigate('homeScreen');
      }
    } else {
      setLoader(false);
      Toast.show({
        type: 'error',
        text1: 'Failed',
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

  const backHandler = () => {
    if (navigation.isFocused()) {
      // Alert.alert('Exit App', 'do you want to exit app ?', [
      //   {
      //     text: 'cancel',
      //     onPress: () => {},
      //   },
      //   {
      //     text: 'Exit',
      //     onPress: () => BackHandler.exitApp(),
      //     // onPress: () => navigation.goBack(),
      //   },
      // ]);
      BackHandler.exitApp();
      return true;
    } else {
      return false;
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoView}>
          <Image
            source={require('../../assets/logo.png')}
            style={{width: responsiveWidth(38), height: responsiveWidth(38)}}
          />
        </View>
      </View>

      {/* login ui  */}
      <View
        style={{
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(33.33),
        }}>
        <View style={styles.inputFormContainer}>
          <Text style={styles.Heading}>Sign In</Text>
          <View style={styles.inputeViewStyle}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'gray'}
              onChangeText={text => setEmail(text)}
              style={styles.inputStyle}
            />
          </View>

          <View style={styles.inputeViewStyle}>
            <View style={{flex: 5}}>
              <TextInput
                placeholder="Password "
                placeholderTextColor={'gray'}
                secureTextEntry={showPassword}
                style={styles.inputStyle}
                // maxLength={6}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeButton}>
              {showPassword ? (
                <FontAwesome5 name="eye-slash" size={20} color={'black'} />
              ) : (
                <FontAwesome5 name="eye" size={20} color={'black'} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Sign In button  */}
      <View
        style={{
          width: responsiveScreenWidth(100),
          // height: responsiveScreenHeight(33.33),
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={handleSignInPress} style={styles.loginBtn}>
            {loader ? (
              <ActivityIndicator size={'large'} color={'white'} />
            ) : (
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: responsiveFontSize(2.5),
                  fontWeight: '700',
                }}>
                Sign In
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.forgotContainer}>
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
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: responsiveScreenWidth(100),
    // height: responsiveScreenHeight(80),
    backgroundColor: COLORS.white,
  },
  logoContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(33.33),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    // borderWidth: responsiveWidth(0.5),
    // borderColor: COLORS.Primary,
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(19),
    justifyContent: 'center',
    alignItems: 'center',
    // borderStyle: 'dotted',
  },
  Heading: {
    fontSize: responsiveFontSize(4),
    fontWeight: '700',
    paddingLeft: responsiveWidth(2),
    marginBottom: responsiveHeight(2),
    margin: responsiveWidth(3),
    color: COLORS.Secondry,
    // justifyContent:"flex-start"
    alignSelf: 'flex-start',
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
    fontSize: responsiveFontSize(2),
    color: 'black',
    flexDirection: 'row',
  },
  inputStyle: {
    flex:1,
    color:"black",
    fontSize: responsiveFontSize(2),
  },
  loginBtn: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: COLORS.Primary,
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotContainer: {
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(6),
    flexDirection: 'row',
    marginVertical: responsiveHeight(1),
  },
  eyeButton: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
