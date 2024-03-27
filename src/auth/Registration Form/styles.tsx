import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../../themes/COLORS';


const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  InputeFiledView: {
    width: responsiveWidth(92),
    height: responsiveHeight(6),
    // marginVertical: responsiveWidth(4),
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(2),
  },
  formContainer: {
    flexGrow: 1,
    // height: responsiveScreenHeight(50),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
  inputFiled: {
    width: responsiveWidth(92),
    height: responsiveHeight(6),
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(2),
    fontSize: responsiveScreenFontSize(2),
    marginVertical:responsiveScreenWidth(3),
    color:'black'
  },
  loginBtn: {
    width: responsiveWidth(92),
    height: responsiveHeight(6),
    backgroundColor: COLORS.Primary,
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputfieldContainer: {
    flex: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop:responsiveWidth(2)
  },
  buttonContainer: {
    flex: 1.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
  },
});

export default styles;
