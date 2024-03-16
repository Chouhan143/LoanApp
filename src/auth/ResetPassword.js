import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import logo from '../assets/Logo.png';
import {COLORS} from '../themes/COLORS';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View style={styles.logoView}>
          <Image
            source={logo}
            style={{width: responsiveWidth(28), height: responsiveWidth(28)}}
          />
        </View>
      </View>
      {/* login ui  */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: responsiveWidth(3),
        }}>
        <View
          style={{
            marginTop: responsiveHeight(3),
          }}>
          <Text style={styles.Heading}>ResetPassword </Text>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: responsiveWidth(4),
            }}>
            <TextInput
              style={styles.inputeViewStyle}
              placeholder="name@example.com"
              placeholderTextColor={COLORS.black}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: responsiveWidth(90),
                height: responsiveHeight(6),
                borderRadius: responsiveWidth(1),
                borderWidth: responsiveWidth(0.2),
                paddingRight: responsiveWidth(2),
              }}>
              <TextInput
                style={{
                  width: responsiveWidth(80),
                  height: responsiveHeight(6),
                  paddingLeft: responsiveWidth(2),
                  borderColor: COLORS.graylight,
                }}
                placeholder="***********"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!showPassword} // Toggle password visibility
              />
              {/* Toggle password visibility */}
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{paddingRight: responsiveWidth(3)}}>
                <FontAwesome5
                  name={showPassword ? 'eye' : 'eye-slash'}
                  size={24}
                  color={COLORS.graylight}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.inputeViewStyle}
              placeholder="***********"
              placeholderTextColor={COLORS.black}
              secureTextEntry // Toggle password visibility
            />
          </View>
        </View>
      </View>

      {/* Sign In button  */}
      <View
        style={{
          flex: 0.5,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: responsiveFontSize(2.5),
                fontWeight: '700',
              }}>
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            marginHorizontal: responsiveWidth(6),
            flexDirection: 'row',
            marginVertical: responsiveHeight(1),
          }}>
          <Text
            style={{
              color: COLORS.Secondry,
              fontSize: responsiveFontSize(2),
              fontWeight: '700',
            }}>
            Sign In
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  Heading: {
    fontSize: responsiveFontSize(4),
    fontWeight: '700',
    paddingLeft: responsiveWidth(2),
    marginBottom: responsiveHeight(2),
    color: COLORS.Secondry,
  },
  inputeViewStyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(1),
    paddingLeft: responsiveWidth(2),
    borderColor: COLORS.graylight,
    borderWidth: responsiveWidth(0.2),
  },

  loginBtn: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: COLORS.Primary,
    borderRadius: responsiveWidth(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
