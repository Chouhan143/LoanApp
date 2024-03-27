import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import MenuIcon from 'react-native-vector-icons/Entypo';
import Font6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../../themes/COLORS';
import {getLoanApplication} from '../../Hooks/getLoanApplication';
import {useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {fetchUserDetails} from '../../Hooks/fetchUserDetails';

const LoanApplication = () => {
  const [applications, setApplications] = useState([]);
  const [userDetails, setUserDetails] = useState('');

  let details = useSelector(state => state.ReduxStore.localstorageUserDetails);
  useFocusEffect(
    React.useCallback(() => {
      allAvailableLoanApplications();
    }, []),
  );

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let payload = {
      user_id: details?.user_id,
    };
    let data = await fetchUserDetails(payload);
    setUserDetails(data);
    // console.log('user details loan application >>>>', data);
  };

  const allAvailableLoanApplications = async () => {
    let payload = {
      user_id: details.user_id,
    };
    let data = await getLoanApplication(payload);
    setApplications(data);
    // console.log();
  };

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.headingContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('userProfile')}
          style={styles.userImg}>
          {userDetails.img ? (
            <Image source={{uri: userDetails.img}} style={styles.userImg} />
          ) : (
            <Image
              source={require('../../assets/profile.png')}
              style={styles.userImg}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.5, alignItems: 'center'}}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: COLORS.black,
            fontWeight: '700',
          }}>
          Loan Application
        </Text>
      </View>

      <View
        style={{
          flex: 12,
          // backgroundColor:'red',
          // alignItems: 'center',
          marginTop: responsiveHeight(5),
        }}>
        {applications.length > 0 ? (
          <View style={{flex: 1, alignItems: 'center'}}>
            <FlatList
              data={applications}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.applicationContainer}>
                    <View style={styles.loanProductContainer}>
                      <Text style={styles.loanProductText}>Loan Product</Text>
                      <Text style={styles.loanProductStatusText}>Status</Text>
                    </View>

                    <View style={styles.nameContainer}>
                      <Text style={styles.loanProductStatusText}>
                        {item.loan_category}
                      </Text>

                      {item.status === 'pending' && (
                        <Text style={styles.loanProductStatusPendingText}>
                          {item.status}
                        </Text>
                      )}
                      {item.status === 'success' && (
                        <Text style={styles.loanProductStatusSuccessText}>
                          {item.status}
                        </Text>
                      )}
                      {item.status === 'reject' && (
                        <Text style={styles.loanProductStatusRejectText}>
                          {item.status}
                        </Text>
                      )}
                    </View>
                  </View>
                );
              }}
            />
          </View>
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.noApplicationFoundText}>
              No Application Available
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default LoanApplication;

const styles = StyleSheet.create({
  headingContainer: {
    flex: 0.5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: responsiveHeight(2),
    marginHorizontal: responsiveWidth(3),
  },
  userImg: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    backgroundColor: COLORS.graylight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    borderColor: COLORS.graylight,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(1),
  },
  applicationContainer: {
    width: responsiveWidth(96),
    height: responsiveHeight(10),
    borderColor: COLORS.Primary,
    margin: responsiveWidth(1),
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.5),
    shadowColor: COLORS.black,
    justifyContent: 'center',
    marginVertical: responsiveHeight(1),
    gap: responsiveHeight(2),
  },
  loanProductContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(3),
  },
  loanProductText: {
    fontSize: responsiveFontSize(2),
    color: COLORS.Primary,
    fontWeight: '700',
  },
  loanProductStatusPendingText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: 'orange',
  },
  loanProductStatusSuccessText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: 'green',
  },
  loanProductStatusRejectText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: 'red',
  },
  loanProductStatusText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: COLORS.black,
  },
  nameContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(3),
  },
  noApplicationFoundText: {
    fontSize: responsiveScreenFontSize(2.2),
    color: COLORS.Primary,
    fontWeight: '700',
  },
});
