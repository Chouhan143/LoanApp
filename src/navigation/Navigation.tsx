import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import LoginScreen from '../auth/Login/LoginScreen';
// import ResetPassword from '../screens/Profile/Change Password/ResetPassword';
import SplaceScreen from '../screens/SplaceScreen';
import EmailVerification from '../auth/Registration Form/EmailVerification';
import PersoalLoan from '../screens/Loan Forms/LoanFormScreen';
const Stack = createStackNavigator();
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {COLORS} from '../themes/COLORS';
import UserRoleTab from '../auth/Registration Form/UserRoleTab';
import LoanApplication from '../screens/Loan Application/LoanApplication';
import HomeScreen from '../screens/Home/HomeScreen';
import UserProfile from '../screens/Profile/UserProfile';
import {BottomTab} from './BottomTab';
import LoanFormScreen from '../screens/Loan Forms/LoanFormScreen';
import OtpScreen from '../auth/OTP/OtpScreen';
import Filter from '../Filter';
import PersonalInforScreen from '../screens/Profile/Personal Info/PersonalInfoScreen';
import ResetVerifyOtpScreen from '../auth/Reset Password/ResetVerifyOtpScreen';
import ResetVerifyEmailScreen from '../auth/Reset Password/ResetVerifyEmailScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChangePasswordScreen from '../screens/Profile/Change Password/ChangePasswordScreen';
import VerifyEmailOtp from '../screens/Profile/Verify Email/VerifyEmailOtp';
import {Image, Text, View} from 'react-native';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import useCheckConnection from '../Hooks/useCheckConnection';
import Noconnection from '../components/Noconnection';
import Notification from '../screens/Profile/Notification/Notification';

export type StackNavigationPropList = {
  loginScreen: undefined;
  homeScreen: undefined;
  userProfile: undefined;
  loanFormScreen: undefined;
  emailVerification: undefined;
  signUpScreen: undefined;
  resetPassword: undefined;
  bottomTab: undefined;
  personalDetails: undefined;
  resetVerifyEmail: undefined;
  otpScreen: undefined;
  resetVerifyOtp: undefined;
  changePasswordScreen: undefined;
  verifyEmailOtp: undefined;
  Notification: undefined;
};

export type NavigationProps = StackNavigationProp<StackNavigationPropList>;

export default function Navigation() {
  const navigation = useNavigation<NavigationProps>();
  const [status, setStatus] = useState<string | null>('');
  const [role, setRole] = useState<string | null>('');
  const isConnected = useCheckConnection();

  useEffect(() => {
    getLoginStatus();
  }, []);

  const getLoginStatus = async () => {
    try {
      const status = await AsyncStorage.getItem('loginStatus');
      const userDetails = await AsyncStorage.getItem('loginUserDetails');
      if (status && userDetails) {
        const {role} = JSON.parse(userDetails);
        setStatus(status);
        setRole(role);
        // console.log(typeof status);
        // console.log(typeof role);
      }
    } catch (error) {
      console.error('Error retrieving login status:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'true') {
        switch (role) {
          case 'customer':
            console.log('login as customer');
            navigation.navigate('homeScreen');
            break;
          case 'partner':
            console.log('login as partner');
            navigation.navigate('bottomTab');
            break;
          case 'associate':
            console.log('login as associate');
            navigation.navigate('bottomTab');
            break;
          default:
            navigation.navigate('loginScreen');
            break;
        }
      } else {
        navigation.navigate('loginScreen');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation, status, role]);

  return (
    <>
      {isConnected ? (
        <Stack.Navigator
          initialRouteName="splaceScreen"
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: COLORS.white,
            headerStyle: {backgroundColor: COLORS.Primary},
          }}>
          <Stack.Screen
            name="splaceScreen"
            component={SplaceScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="loginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="signUpScreen"
            component={UserRoleTab}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
    name="resetPassword"
    component={ResetPassword}
    options={{headerShown: false}}
  /> */}
          <Stack.Screen
            name="resetVerifyEmail"
            component={ResetVerifyEmailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="resetVerifyOtp"
            component={ResetVerifyOtpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="emailVerification"
            component={EmailVerification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="otpScreen"
            component={OtpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="verifyEmailOtp"
            component={VerifyEmailOtp}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="homeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="loanFormScreen"
            component={LoanFormScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoanStatus"
            component={LoanApplication}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="userProfile"
            component={UserProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="personalDetails"
            component={PersonalInforScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="changePasswordScreen"
            component={ChangePasswordScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="bottomTab"
            component={BottomTab}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Noconnection />
      )}
    </>
  );
}
