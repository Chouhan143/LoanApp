import {createStackNavigator} from '@react-navigation/stack';
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
import { BottomTab } from './BottomTab';
import LoanFormScreen from '../screens/Loan Forms/LoanFormScreen';
export default function Navigation() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Stack.Navigator
      initialRouteName="SplaceScreen"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: COLORS.white,
        headerStyle: {backgroundColor: COLORS.Primary},
      }}>
      <Stack.Screen
        name="SplaceScreen"
        component={SplaceScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={UserRoleTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
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
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
