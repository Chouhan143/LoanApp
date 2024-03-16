import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomerForm from './CustomerForm';
import PartnerForm from './PartnerForm';
import AssociateForm from './AssociateForm';
const Tab = createMaterialTopTabNavigator();
import {Text, View, Image, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../themes/COLORS';
import logo from '../assets/Logo.png';

export default function UserRoleTab() {
  return (
    <>
      <View style={{backgroundColor: COLORS.white}}>
        <View
          style={{
            borderWidth: responsiveWidth(0.5),
            borderColor: COLORS.Primary,
            width: responsiveWidth(28),
            height: responsiveWidth(28),
            borderRadius: responsiveWidth(14),
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'dotted',
            alignSelf: 'center',
            marginVertical: responsiveHeight(2),
          }}>
          <Image
            source={logo}
            style={{width: responsiveWidth(20), height: responsiveWidth(20)}}
          />
        </View>
        <Text
          style={{
            fontSize: responsiveFontSize(3),
            fontWeight: '700',
            color: COLORS.Secondry,
            margin: responsiveWidth(3),
          }}>
          Sign Up
        </Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.containerStyle,
          tabBarIndicatorStyle: styles.Indicator,
          tabBarLabelStyle: styles.lable,
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: COLORS.graylight,
        }}>
        <Tab.Screen
          name="Customer"
          component={CustomerForm}
          options={{
            tabBarIndicatorStyle: [
              styles.Indicator,
              {
                marginLeft: 10,
              },
            ],
          }}
        />
        <Tab.Screen name="Partner" component={PartnerForm} />
        <Tab.Screen
          name="Associate"
          component={AssociateForm}
          options={{
            tabBarIndicatorStyle: [
              styles.Indicator,
              {
                width: responsiveWidth(29),
              },
            ],
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    // backgroundColor: 'gray',
    borderColor: COLORS.Primary,
    borderWidth: responsiveWidth(0.3),
    width: responsiveWidth(95),
    height: responsiveHeight(6.5),
    alignSelf: 'center',
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(1),
  },
  Indicator: {
    backgroundColor: COLORS.Primary,
    position: 'absolute',
    zIndex: -1,
    bottom: '10%',
    height: '80%',
    borderRadius: responsiveWidth(1),
  },
});
