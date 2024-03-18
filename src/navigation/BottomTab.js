import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import LoanApplication from '../screens/Loan Application/LoanApplication';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../themes/COLORS';

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          height: responsiveHeight(8),
          // margin: responsiveScreenWidth(2),
          elevation: 2,
          borderTopLeftRadius: responsiveScreenWidth(4),
          borderTopRightRadius: responsiveScreenWidth(4),
          paddingVertical: responsiveScreenWidth(3),
        },
        tabBarActiveTintColor: COLORS.Primary,
        tabBarVisibilityAnimationConfig: 'show',
        tabBarLabelStyle: {fontSize: responsiveScreenFontSize(1.6)},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Loan Application"
        component={LoanApplication}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name="document-text" color={color} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const TabBarIcon = ({name, color, focused}) => (
  <View
    style={[
      styles.tabBarIcon,
      {backgroundColor: focused ? color : 'transparent'},
    ]}>
    <Ionicons name={name} color={focused ? 'white' : color} size={24} />
  </View>
);

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 40, // Adjust the width as needed
    height: 40, // Adjust the height as needed
    borderRadius: 20, // Adjust the border radius as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray', // Adjust the border color as needed
  },
});
