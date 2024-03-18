import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import MenuIcon from 'react-native-vector-icons/Entypo';
import Font6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../../themes/COLORS';
import {SelectList} from 'react-native-dropdown-select-list';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {useNavigation} from '@react-navigation/native';
import PersonalLoan from './PersonalLoan';
import BusinessLoan from './BusinessLoan';
import CarLoan from './CarLoan';
const LoanFormScreen = () => {
  const [selected, setSelected] = useState(1);


  const data = [
    {key: 1, value: 'Personal loan'},
    {key: 2, value: 'Business Loan'},
    {key: 3, value: 'Car Loan'},
  ];

  const handleSelectedLoanProduct = val => {
    setSelected(val);
  };

  // console.log(selected);
  // radio button

  const gender = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Male',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Female',
        value: 'option2',
      },
    ],
    [],
  );

  const marital_Status = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Married',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Unmarried',
        value: 'option2',
      },
    ],
    [],
  );

  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      {/* header ui */}
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

        <MenuIcon
          name={'menu'}
          size={responsiveFontSize(4)}
          color={COLORS.black}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={styles.headingText}>Apply Now</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Loan Product
        </Text>

        <SelectList
          setSelected={val => handleSelectedLoanProduct(val)}
          data={data}
          save="key"
          boxStyles={{
            borderRadius: responsiveWidth(2),
            marginTop: responsiveHeight(1.5),
            borderColor: COLORS.black,
          }}
          inputStyles={{color: COLORS.black, fontSize: responsiveFontSize(1.8)}}
        />

        {selected === 1 ? (
          <PersonalLoan />
        ) : selected === 2 ? (
          <BusinessLoan />
        ) : (
          <CarLoan />
        )}
      </View>
    </ScrollView>
  );
};

export default LoanFormScreen;

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
