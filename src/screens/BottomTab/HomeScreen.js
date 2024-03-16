import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes/COLORS';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MenuIcon from 'react-native-vector-icons/Entypo';
import UserICon from 'react-native-vector-icons/FontAwesome';
import Carousel from '../../components/Carousel';

const HomeScreen = () => {
  const LoanList = [
    {
      id: 1,
      Loan_Category: 'MSME LOAN',
    },
    {
      id: 2,
      Loan_Category: 'BUSINESS LOAN',
    },
    {
      id: 3,
      Loan_Category: 'CAR LOAN',
    },
    {
      id: 4,
      Loan_Category: 'Home Loan',
    },
    {
      id: 5,
      Loan_Category: 'Home Loan',
    },
    {
      id: 6,
      Loan_Category: 'Home Loan',
    },
    {
      id: 7,
      Loan_Category: 'Home Loan',
    },
    {
      id: 8,
      Loan_Category: 'Home Loan',
    },
    {
      id: 9,
      Loan_Category: 'Home Loan',
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginVertical: responsiveHeight(2),
          marginHorizontal: responsiveWidth(3),
        }}>
        <View style={styles.userImg}>
          <UserICon
            name={'user'}
            size={responsiveFontSize(3)}
            color={COLORS.white}
          />
        </View>

        <MenuIcon
          name={'menu'}
          size={responsiveFontSize(3)}
          color={COLORS.black}
        />
      </View>
      {/* Carosel */}
      <Carousel />

      {/* Loan Produt */}

      <View style={{marginHorizontal: responsiveWidth(3)}}>
        <Text style={{fontSize: responsiveFontSize(2.2), color: COLORS.black}}>
          Loan Products
        </Text>
        <FlatList
          data={LoanList}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: responsiveWidth(29.5),
                  height: responsiveHeight(14),
                  borderColor: COLORS.graylight,
                  margin: responsiveWidth(1),
                  borderRadius: responsiveWidth(2),
                  borderWidth: responsiveWidth(0.3),
                  shadowColor: COLORS.black,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    color: COLORS.black,
                  }}>
                  {item.Loan_Category}
                </Text>
              </View>
            );
          }}
          numColumns={3}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    width: responsiveHeight(100),
    height: responsiveHeight(10),
    backgroundColor: 'green',
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
});
