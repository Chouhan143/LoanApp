import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes/COLORS';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MenuIcon from 'react-native-vector-icons/Entypo';
import Font6 from 'react-native-vector-icons/FontAwesome6';
import Carousel from '../../components/Carousel';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-virtualized-view';

const HomeScreen = () => {
  const navigation = useNavigation();

  const LoanList = [
    {
      id: 1,
      icon: 'cast-for-education',
      Loan_Category: 'Education Loan',
    },
    {
      id: 2,
      icon: 'person',
      Loan_Category: 'Personal Loan',
    },
    {
      id: 3,
      icon: 'store-mall-directory',
      Loan_Category: ' MSME Loan',
    },
    {
      id: 4,
      icon: 'home',
      Loan_Category: 'Home Loan',
    },
    {
      id: 5,
      icon: 'business',
      Loan_Category: 'Business Loan',
    },
    {
      id: 6,
      icon: 'attach-money',
      Loan_Category: 'Project Loan',
    },
    {
      id: 7,
      icon: 'assured-workload',
      Loan_Category: 'Working Capital Loan',
    },
    {
      id: 8,
      icon: 'currency-exchange',
      Loan_Category: 'Loan Against Property',
    },
    {
      id: 9,
      icon: 'add-card',
      Loan_Category: 'CV-CE Loan',
    },
    {
      id: 10,
      icon: 'directions-car-filled',
      Loan_Category: 'Car Loan',
    },
    {
      id: 11,
      icon: 'fiber-smart-record',
      Loan_Category: 'Gold Loan',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: responsiveHeight(2),
          marginHorizontal: responsiveWidth(3),
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserProfile')}
          style={styles.userImg}>
          <Font6
            name={'circle-user'}
            size={responsiveFontSize(4.5)}
            color={COLORS.white}
          />
        </TouchableOpacity>

        <Text
          style={{
            // alignSelf:'flex-start',
            textAlign: 'center',
            position: 'absolute',
            left: 60,
            fontSize: responsiveFontSize(2.8),
            color: 'black',
            fontWeight: '700',
          }}>
          User
        </Text>

        <MenuIcon
          name={'menu'}
          size={responsiveFontSize(4)}
          color={COLORS.black}
        />
      </View>
      {/* Carosel */}
      <View style={{width: responsiveWidth(96), alignSelf: 'center'}}>
        <Carousel />
      </View>
      {/* Loan Produt */}
      <View style={{backgroundColor: 'white', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: COLORS.black,
            marginVertical: responsiveWidth(2),
            marginLeft: responsiveWidth(3),
            alignSelf: 'flex-start',
            fontWeight: '700',
          }}>
          Loan Products
        </Text>
        <FlatList
          data={LoanList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('loanFormScreen')}
                style={styles.itemContainer}>
                <MaterialIcons
                  name={`${item.icon}`}
                  size={30}
                  color={COLORS.Primary}
                />
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.7),
                    marginVertical: responsiveWidth(2),
                    color: COLORS.black,
                  }}>
                  {item.Loan_Category}
                </Text>
              </TouchableOpacity>
            );
          }}
          numColumns={3}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
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
});
