import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../../themes/COLORS';

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    backgroundColor: COLORS.white,
  },
  header: {
    width: responsiveHeight(100),
    height: responsiveHeight(10),
    // backgroundColor: 'green',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    backgroundColor: COLORS.graylight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: responsiveWidth(29.5),
    height: responsiveHeight(14),
    backgroundColor: 'white',
    // borderColor: COLORS.graylight,
    margin: responsiveWidth(1),
    borderRadius: responsiveWidth(2),
    // borderWidth: responsiveWidth(0.3),
    // shadowColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  loanProductText: {
    fontSize: responsiveFontSize(2.5),
    color: COLORS.black,
    marginVertical: responsiveWidth(2),
    marginLeft: responsiveWidth(3),
    alignSelf: 'flex-start',
    fontWeight: '700',
  },
  loanCategoryText: {
    fontSize: responsiveFontSize(1.7),
    marginVertical: responsiveWidth(2),
    color: COLORS.black,
  },
});

export default styles;
