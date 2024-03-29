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
//   import logo from '../../../assets/logo.png';
import {COLORS} from '../../../themes/COLORS';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../navigation/Navigation';
import {useSelector} from 'react-redux';
import {fetchUserDetails} from '../../../Hooks/fetchUserDetails';
import changePassword from '../../../Hooks/changePassword';
import {ActivityIndicator} from 'react-native';

const ChangePasswordScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loader, setLoader] = useState(false);

  let uid = useSelector(
    state => state.ReduxStore.localstorageUserDetails.user_id,
  );

  const handleProceedPress = async () => {
    setLoader(true);
    // let data = await fetchUserDetails(uid);
    let payload = {
      email: email,
      password: oldPassword,
      new_password: newPassword,
      user_id: uid,
    };
    let data = await changePassword(payload);
    // console.log('details>>>>>', data);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  return (
    <ScrollView style={styles.container}>
      {/*  */}
      <View style={styles.logoContainer}>
        <View style={styles.logoView}>
          <Image
            source={require('../../../assets/logo.png')}
            style={{width: responsiveWidth(28), height: responsiveWidth(28)}}
          />
        </View>
      </View>

      {/* login ui  */}
      <View style={styles.inputfiledContainer}>
        <View
          style={{
            marginTop: responsiveHeight(3),
          }}>
          <Text style={styles.Heading}>Change Password </Text>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: responsiveWidth(4),
            }}>
            <TextInput
              style={styles.inputeViewStyle}
              placeholder="Enter your email"
              onChangeText={text => setEmail(text)}
              placeholderTextColor={"gray"}
              // placeholderTextColor={COLORS.black}
            />

            <TextInput
              style={styles.inputeViewStyle}
              placeholder="Enter password"
              onChangeText={text => setOldPassword(text)}
              maxLength={6}
              placeholderTextColor={"gray"}
              // placeholderTextColor={COLORS.black}
            />

            <TextInput
              style={styles.inputeViewStyle}
              placeholder="Enter new password"
              onChangeText={text => setNewPassword(text)}
              maxLength={6}
              placeholderTextColor={"gray"}
              // placeholderTextColor={COLORS.black}
              secureTextEntry // Toggle password visibility
            />
          </View>
        </View>
      </View>

      {/* Sign In button  */}
      <View style={styles.buttonContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={handleProceedPress}
            style={styles.loginBtn}>
            {loader ? (
              <ActivityIndicator size={'large'} color={'white'} />
            ) : (
              <Text style={styles.buttonText}>Change Password</Text>
            )}
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};
export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: responsiveWidth(38),
    height: responsiveWidth(38),
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
    color: COLORS.Secondry,
  },
  inputfiledContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(33.33),
    paddingHorizontal: responsiveWidth(3),
  },
  inputeViewStyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(2),
    borderColor: COLORS.graylight,
    borderWidth: responsiveWidth(0.2),
    marginVertical: responsiveScreenWidth(1),
    fontSize: responsiveFontSize(2),
    color:"black"
  },
  buttonContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(15),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  loginBtn: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: COLORS.Primary,
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  singUpTextContainer: {
    justifyContent: 'flex-end',
    marginHorizontal: responsiveWidth(6),
    flexDirection: 'row',
    marginVertical: responsiveHeight(1),
  },
  buttonText: {
    color: COLORS.white,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
  },
});
