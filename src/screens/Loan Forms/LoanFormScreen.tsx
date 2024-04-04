import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import MenuIcon from 'react-native-vector-icons/Entypo';
import Font6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../../themes/COLORS';
import {SelectList} from 'react-native-dropdown-select-list';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationPropList} from '../../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import LoanForm from './LoanForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchUserDetails} from '../../Hooks/fetchUserDetails';

type NavigationProps = StackNavigationProp<
  StackNavigationPropList,
  'userProfile'
>;

type LocalStorageDetailsProps = {
  email: string;
  role: string;
  status: string;
  user_id: number;
  user_name: string;
  is_verify: number;
  img?: string;
};

const LoanFormScreen = () => {
  const [selected, setSelected] = useState<string>('');
  const navigation = useNavigation<NavigationProps>();
  const [details, setDetails] = useState<LocalStorageDetailsProps | null>();

  useEffect(() => {
    getUserDetails();
  }, []);

  const data = [
    {key: 1, value: 'Education Loan'},
    {key: 2, value: 'Car Loan New'},
    {key: 3, value: 'Car Loan Used'},
    {key: 4, value: 'Commercial Vehical Loan New'},
    {key: 5, value: 'Commercial Vehical Loan Used'},
    {key: 6, value: 'Personal Loan'},
    {key: 7, value: 'Home Loan'},
    {key: 8, value: 'Loan Against Property'},
    {key: 9, value: 'Business Loan'},
    {key: 10, value: 'MSME Loan'},
    {key: 11, value: 'Working Capital Loan(CC-OD)'},
    {key: 12, value: 'Project Loan'},
  ];

  const handleSelectedLoanProduct = (val: string) => {
    setSelected(val);
  };

  const getUserDetails = async () => {
    let details: LocalStorageDetailsProps | null = await AsyncStorage.getItem(
      'loginUserDetails',
    ).then((data: string | null) => (data ? JSON.parse(data) : null));

    // fetch complete user details based on user id
    let payload = {
      user_id: details?.user_id,
    };
    let data = await fetchUserDetails(payload);
    setDetails(data);
    // console.log('user details from api >>>>>', data);
  };

  // const gender = useMemo(
  //   () => [
  //     {
  //       id: '1', // acts as primary key, should be unique and non-empty string
  //       label: 'Male',
  //       value: 'option1',
  //     },
  //     {
  //       id: '2',
  //       label: 'Female',
  //       value: 'option2',
  //     },
  //   ],
  //   [],
  // );

  // const marital_Status = useMemo(
  //   () => [
  //     {
  //       id: '1', // acts as primary key, should be unique and non-empty string
  //       label: 'Married',
  //       value: 'option1',
  //     },
  //     {
  //       id: '2',
  //       label: 'Unmarried',
  //       value: 'option2',
  //     },
  //   ],
  //   [],
  // );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: '#fff'}}>
      {/* header ui */}
      <View style={styles.headingContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('userProfile')}
          style={styles.userImg}>
          {details?.img ? (
            <Image source={{uri: details?.img}} style={styles.userImg} />
          ) : (
            <Image
              source={require('../../assets/profile.png')}
              style={styles.userImg}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={styles.headingText}>Apply Now</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Loan Product <Text style={{color: 'red'}}>*</Text>
        </Text>

        <SelectList
          setSelected={(val: string) => handleSelectedLoanProduct(val)}
          data={data}
          save="value"
          boxStyles={styles.selectLoanTypeStyle}
          inputStyles={{color: COLORS.black, fontSize: responsiveFontSize(1.8)}}
          dropdownTextStyles={{
            fontSize: responsiveFontSize(1.8),
            color: 'black',
          }}
        />

        {/* loan form */}
        <LoanForm selectedLoan={selected} />
      </View>
    </ScrollView>
  );
};

export default LoanFormScreen;

const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(2),
    marginHorizontal: responsiveWidth(3),
  },
  userImg: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(14),
    backgroundColor: COLORS.graylight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    paddingLeft: responsiveWidth(3),
    borderColor: COLORS.graylight,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(2),
  },
  headingText: {
    fontSize: responsiveFontSize(3.5),
    color: COLORS.black,
    fontWeight: '700',
  },
  formContainer: {
    marginHorizontal: responsiveWidth(5),
    marginBottom: responsiveHeight(1),
    marginTop: responsiveHeight(4),
  },
  inputFieldContainer: {
    marginTop: responsiveWidth(2),
    gap: responsiveHeight(2),
  },
  selectPhoto: {
    width: responsiveWidth(90),
    height: responsiveHeight(20),
    backgroundColor: COLORS.PrimaryLite,
    borderRadius: responsiveWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectLoanTypeStyle: {
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(1.5),
    borderColor: COLORS.black,
  },
  buttonContainer: {
    height: responsiveHeight(10),
    marginVertical: responsiveWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  formButton: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(3),
    backgroundColor: COLORS.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: responsiveFontSize(2.2),
    color: 'white',
    fontWeight: '700',
  },
});
