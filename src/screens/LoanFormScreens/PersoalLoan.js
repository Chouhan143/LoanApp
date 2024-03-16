import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import MenuIcon from 'react-native-vector-icons/Entypo';
import UserICon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../themes/COLORS';
import {SelectList} from 'react-native-dropdown-select-list';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
const PersoalLoan = () => {
  const [selected, setSelected] = React.useState('');
  const [genderSelect, setGenderSelect] = useState();
  const [MaritalSelect, setMaritalSelect] = useState();

  const data = [
    {key: '1', value: 'Personal loan'},
    {key: '2', value: 'Business Loan'},
    {key: '3', value: 'Car Loan'},
  ];

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

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
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
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: COLORS.black,
            fontWeight: '700',
          }}>
          Apply Now
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: responsiveWidth(5),
          marginBottom: responsiveHeight(1),
          marginTop: responsiveHeight(4),
        }}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Loan Product
        </Text>
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          boxStyles={{
            borderRadius: responsiveWidth(1),
            marginTop: responsiveHeight(2),
            borderColor: COLORS.graylight,
          }}
          inputStyles={{color: COLORS.black, fontSize: responsiveFontSize(1.8)}}
        />
        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Full Name (As per pan)
          </Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Date of Birth
          </Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Gender
          </Text>
          <RadioGroup
            radioButtons={gender}
            onPress={setGenderSelect}
            selectedId={genderSelect}
            containerStyle={{flexDirection: 'row'}}
          />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Marital Status
          </Text>
          <RadioGroup
            radioButtons={marital_Status}
            onPress={setMaritalSelect}
            selectedId={MaritalSelect}
            borderColor={COLORS.Primary}
            containerStyle={{flexDirection: 'row'}}
          />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Spouse Name
          </Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Spouse Phone No
          </Text>
          <TextInput style={styles.textInput} />
        </View>
        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Father Name
          </Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Father Phone No
          </Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Loan Requirement
          </Text>
          <TextInput style={styles.textInput} />
        </View>
      </View>
    </ScrollView>
  );
};

export default PersoalLoan;

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
});
