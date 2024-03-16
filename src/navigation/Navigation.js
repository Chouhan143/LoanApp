import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../auth/LoginScreen';
import ResetPassword from '../auth/ResetPassword';
import SplaceScreen from '../screens/SplaceScreen';
import SignUpScreen from '../auth/SignUpScreen';
import EmailVerification from '../auth/EmailVerification';
import PersoalLoan from '../screens/LoanFormScreens/PersoalLoan';
import BusinessPage from '../screens/LoanFormScreens/BusinessPage';
const Stack = createStackNavigator();
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {COLORS} from '../themes/COLORS';
import UserRoleTab from '../auth/UserRoleTab';
import LoanApplication from '../screens/LoanApplication';
import HomeScreen from '../screens/BottomTab/HomeScreen';
import UserProfile from '../screens/UserProfile';
export default function Navigation() {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('UserProfile');
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
        name="PersonalLoan"
        component={PersoalLoan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BusinessLoan"
        component={BusinessPage}
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
        name="SignUpScreen"
        component={UserRoleTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
