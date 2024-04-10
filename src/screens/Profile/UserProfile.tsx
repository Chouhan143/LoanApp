import {
  Alert,
  BackHandler,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../themes/COLORS';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import UserICon from 'react-native-vector-icons/FontAwesome';
import NotificationIcon from 'react-native-vector-icons/MaterialIcons';
import Security from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationProps} from '../../navigation/Navigation';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {clearLocalStorageUserDetails} from '../../redux/Slice';
import {fetchUserDetails} from '../../Hooks/fetchUserDetails';
import FastImage from 'react-native-fast-image';

const UserProfile: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const [userDetails, setUserDetails] = useState({});
  const dispatch = useDispatch();
  const details = useSelector(
    state => state.ReduxStore.localstorageUserDetails,
  );

  // console.log(userDetails.is_verify);

  useFocusEffect(
    React.useCallback(() => {
      getUserDetails();
      BackHandler.addEventListener('hardwareBackPress', backHandler);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', backHandler);
      };
    }, [details]),
  );

  const getUserDetails = async () => {
    let payload = {
      user_id: details.user_id,
    };
    let data = await fetchUserDetails(payload);
    console.log('data check', data);
    setUserDetails(data);
    // console.log('user details personal info screen >>>>', data);
  };

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to log out', [
      {
        text: 'cancel',
        onPress: () => {},
      },
      {
        text: 'logout',
        onPress: async () => {
          await AsyncStorage.clear();
          dispatch(clearLocalStorageUserDetails({}));
          navigation.navigate('loginScreen');

          BackHandler.exitApp();
        },
      },
    ]);
    // await AsyncStorage.clear();
  };

  const backHandler = () => {
    if (navigation.isFocused()) {
      switch (details.role) {
        case 'customer':
          navigation.navigate('homeScreen');
          break;
        case 'partner':
          // console.log('navigation to partner screen');
          navigation.navigate('bottomTab');
          break;
        case 'associate':
          navigation.navigate('bottomTab');
          break;
        default:
          navigation.navigate('homeScreen');
          break;
      }
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* profile image container  */}
      <View style={styles.profileContainer}>
        <View style={styles.userImgIcon}>
          {userDetails.img ? (
            <FastImage
              source={{uri: userDetails.img}}
              style={styles.userImgIcon}
            />
          ) : (
            <FastImage
              source={require('../../assets/profile.png')}
              style={styles.userImgIcon}
            />
          )}
        </View>
        <View style={{alignItems: 'center', marginTop: responsiveHeight(1)}}>
          <Text
            style={{
              fontSize: responsiveFontSize(4),
              color: COLORS.black,
              fontWeight: '700',
            }}>
            {userDetails?.name}
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              color: COLORS.black,
              fontWeight: '400',
            }}>
            {details?.role}
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: COLORS.black,
              fontWeight: '400',
            }}>
            {userDetails.role !== 'customer' && userDetails.id_code}
          </Text>
        </View>
      </View>

      {/* information */}
      <View style={{flex: 1.5, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('personalDetails')}
          style={styles.userView}>
          <UserICon
            name={'user-circle-o'}
            size={responsiveFontSize(3.5)}
            color={'gray'}
          />
          <Text style={styles.serviceText}>Personal Information</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          style={styles.userView}>
          <NotificationIcon
            name={'notifications-active'}
            size={responsiveFontSize(3.5)}
            color={'gray'}
          />
          <Text style={styles.serviceText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('changePasswordScreen')}
          style={styles.userView}>
          <Security
            name={'security'}
            size={responsiveFontSize(3.5)}
            color={'gray'}
          />
          <Text style={styles.serviceText}>Change Password</Text>
        </TouchableOpacity>

        {/* {details.verified} */}
        {userDetails.is_verify === 1 ? (
          <TouchableOpacity disabled style={styles.userView}>
            <MaterialCommunityIcon
              name={'email-check'}
              size={responsiveFontSize(3.5)}
              color={'green'}
            />
            <Text style={[styles.serviceText, {color: 'green'}]}>
              Email is verified
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('emailVerification', {screenName: ''})
            }
            style={styles.userView}>
            <MaterialCommunityIcon
              name={'email-check'}
              size={responsiveFontSize(3.5)}
              color={'red'}
            />
            <Text style={[styles.serviceText, {color: 'red'}]}>
              Verify your email
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[
            styles.userView,
            {
              borderBottomWidth: responsiveWidth(0.4),
              borderBottomColor: 'black',
            },
          ]}>
          <FontAwesome6
            name={'headset'}
            size={responsiveFontSize(3)}
            color={'gray'}
          />
          <Text style={styles.serviceText}>Help & Support</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logOutButton}>
          <MaterialIcons
            name={'logout'}
            size={responsiveFontSize(3)}
            color={COLORS.white}
          />
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: COLORS.white,
              fontWeight: '700',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  userImgIcon: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(40),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userView: {
    flexDirection: 'row',
    // justifyContent: 'center',
    height: responsiveHeight(8),
    alignItems: 'center',
    gap: responsiveWidth(5),
    borderTopColor: COLORS.black,
    borderTopWidth: responsiveWidth(0.4),
    marginHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(1),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  logOutButton: {
    // position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: responsiveWidth(10),
    backgroundColor: COLORS.Primary,
    width: responsiveWidth(92),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(2),
    gap: responsiveWidth(3),
  },
  serviceText: {
    fontSize: responsiveFontSize(2),
    color: 'black',
  },
});
