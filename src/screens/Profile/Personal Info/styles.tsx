import {StyleSheet} from 'react-native';
import {COLORS} from '../../../themes/COLORS';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    backgroundColor: COLORS.white,
  },
  profileContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  userImgIcon: {
    width: responsiveWidth(50),
    height: responsiveWidth(50),
    // backgroundColor: COLORS.graylight,
    borderRadius: responsiveWidth(50),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:COLORS.Primary,
    borderWidth:1
    // marginTop: responsiveHeight(10),
  },
  userView: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    height: responsiveHeight(8),
    // alignItems: 'center',
    borderTopColor: 'gray',
    borderTopWidth: responsiveWidth(0.4),
    marginHorizontal: responsiveWidth(4),
    // paddingTop: responsiveHeight(1),
  },
  userName: {
    fontSize: responsiveFontSize(4),
    color: COLORS.black,
    fontWeight: '700',
  },
  userRole: {
    fontSize: responsiveFontSize(2.2),
    color: COLORS.black,
    fontWeight: '400',
  },
  informationContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(40),
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
    fontWeight: '500',
    color: 'black',
  },
  logoutText: {
    fontSize: responsiveFontSize(2),
    color: COLORS.white,
    fontWeight: '700',
  },
  editButton: {
    width: responsiveScreenWidth(20),
    height: responsiveScreenWidth(20),
    borderRadius: responsiveScreenWidth(10),
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.Primary,
    position: 'absolute',
    bottom: responsiveWidth(10),
    right: responsiveWidth(5),
  },
  btnContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(15),
    // backgroundColor:'red'
  },
  varifiedText: {
    color: 'green',
    fontWeight: '600',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  notVarifiedText: {
    color: 'red',
    fontWeight: '600',
    position: 'absolute',
    right: 0,
    top: 5,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: COLORS.Primary,
    backgroundColor: 'white',
    // width:responsiveScreenWidth(50),
    flex: 1,
    borderRadius: responsiveScreenWidth(2),
    fontSize: responsiveFontSize(2),
    // fontWeight: '700',
    color: COLORS.Primary,
    paddingLeft: responsiveScreenWidth(3),
    // marginBottom: responsiveScreenWidth(2),
  },
  updateButton: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(6),
    borderRadius: responsiveScreenWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: COLORS.Primary,
    position: 'absolute',
    bottom: responsiveWidth(10),
    right: responsiveWidth(5),
  },
  updateButtonText: {
    fontSize: responsiveFontSize(2),
    color: COLORS.white,
    fontWeight: '700',
  },
  editProfileImageButton: {
    width: responsiveScreenWidth(10),
    height: responsiveScreenWidth(10),
    borderRadius: responsiveScreenWidth(10),
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 15,
  },
  serviceIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
