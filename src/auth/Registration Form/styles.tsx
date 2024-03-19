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
    // width:responsiveScreenWidth(100),
    // height:responsiveScreenHeight(100),
    backgroundColor: COLORS.white,
  },
  InputeFiledView: {
    width: responsiveWidth(92),
    height: responsiveHeight(6),
    marginVertical: responsiveWidth(1),
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(2),
  },
  inputFiled: {
    width: responsiveWidth(92),
    height: responsiveHeight(6),
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(2),
    fontSize: responsiveScreenFontSize(2),
  },
  loginBtn: {
    width: responsiveWidth(90),
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
  },
  buttonContainer: {
    flex: 1.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  buttonText:{
    color: COLORS.white,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
  }
});

export default styles;
