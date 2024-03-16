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
const BusinessPage = () => {
  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'Personal loan'},
    {key: '2', value: 'Business Loan'},
    {key: '3', value: 'Car Loan'},
  ];

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
            Company Name
          </Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Contact Person
          </Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Mobile No.
          </Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Email Id
          </Text>
          <TextInput style={styles.textInput} />
        </View>
        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Date of Incorporation
          </Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Pan No
          </Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Gst No
          </Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{marginTop: responsiveHeight(1), gap: responsiveHeight(2)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
            Finance Details
          </Text>
          <TextInput style={styles.textInput} />
        </View>
      </View>
    </ScrollView>
  );
};

export default BusinessPage;

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
