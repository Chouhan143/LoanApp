import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
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
import {useFocusEffect} from '@react-navigation/native';

const LoanApplication = () => {
  const [applications, setApplications] = useState([]);
  const Loan_Status = [
    {
      id: 1,
      Applicant_name: 'Suraj',
      Status: 'pending',
    },
    {
      id: 2,
      Applicant_name: 'Mukesh',
      Status: 'pending',
    },
    {
      id: 3,
      Applicant_name: 'Raj',
      Status: 'Active',
    },
    {
      id: 4,
      Applicant_name: 'Mahesh',
      Status: 'pending',
    },
    {
      id: 5,
      Applicant_name: 'Govind',
      Status: 'Active',
    },
  ];

  let details = useSelector(state => state.ReduxStore.localstorageUserDetails);
  useFocusEffect(
    React.useCallback(() => {
      allAvailableLoanApplications();
    }, []),
  );

  const allAvailableLoanApplications = async () => {
    let payload = {
      user_id: details.user_id,
    };
    let data = await getLoanApplication(payload);
    setApplications(data);
    // console.log();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginVertical: responsiveHeight(2),
          marginHorizontal: responsiveWidth(3),
        }}>
        <View style={styles.userImg}>
          <Font6
            name={'circle-user'}
            size={responsiveFontSize(4.5)}
            color={COLORS.white}
          />
        </View>

        <MenuIcon
          name={'menu'}
          size={responsiveFontSize(3)}
          color={COLORS.black}
        />
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
              No ApplicationAvailable
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default LoanApplication;

const styles = StyleSheet.create({
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
