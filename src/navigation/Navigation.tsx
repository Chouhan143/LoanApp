import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import LoginScreen from '../auth/Login/LoginScreen';
import ResetPassword from '../auth/ResetPassword';
import SplaceScreen from '../screens/SplaceScreen';
import SignUpScreen from '../auth/SignUpScreen';
import EmailVerification from '../auth/Registration Form/EmailVerification';
import PersoalLoan from '../screens/Loan Forms/LoanFormScreen';
const Stack = createStackNavigator();
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {COLORS} from '../themes/COLORS';
import UserRoleTab from '../auth/Registration Form/UserRoleTab';
import LoanApplication from '../screens/Loan Application/LoanApplication';
import HomeScreen from '../screens/Home/HomeScreen';
import UserProfile from '../screens/Profile/UserProfile';
import {BottomTab} from './BottomTab';
import LoanFormScreen from '../screens/Loan Forms/LoanFormScreen';
import OtpScreen from '../auth/OTP/OtpScreen';
import Filter from '../Filter';

export type StackNavigationPropList = {
  loginScreen: undefined;
  homeScreen: undefined;
  userProfile: undefined;
  loanFormScreen: undefined;
  emailVerification: undefined;
  signUpScreen: undefined;
  resetPassword: undefined;
  bottomTab:undefined
  
};

export type NavigationProps = StackNavigationProp<StackNavigationPropList>;

export default function Navigation() {
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('loginScreen');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
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
        name="filter"
        component={Filter}
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
      <Stack.Screen
        name="resetPassword"
        component={ResetPassword}
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
        name="bottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
