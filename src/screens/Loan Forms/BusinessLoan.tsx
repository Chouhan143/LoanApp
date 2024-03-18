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
import Font5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../themes/COLORS';
import {SelectList} from 'react-native-dropdown-select-list';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {useNavigation} from '@react-navigation/native';

const BusinessLoan: React.FC = () => {
  const [selected, setSelected] = useState('');
  const [genderSelect, setGenderSelect] = useState();
  const [MaritalSelect, setMaritalSelect] = useState();

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
    <ScrollView>
      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Campany Name
        </Text>
        <TextInput placeholder="enter campany name" style={styles.textInput} />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Contact Person
        </Text>
        <TextInput
          placeholder="enter contact person"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Mobile No.
        </Text>
        <TextInput placeholder="enter mobile no." style={styles.textInput} />
        {/* <RadioGroup
          radioButtons={gender}
          onPress={() => setGenderSelect}
          selectedId={genderSelect}
          containerStyle={{flexDirection: 'row'}}
        /> */}
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Email ID
        </Text>
        <TextInput placeholder="enter email id" style={styles.textInput} />
        {/* <RadioGroup
          radioButtons={marital_Status}
          onPress={() => setMaritalSelect}
          selectedId={MaritalSelect}
          borderColor={COLORS.Primary}
          containerStyle={{flexDirection: 'row'}}
        /> */}
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Date of Incorporation
        </Text>
        <TextInput
          placeholder="enter date of incorporation"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Pan No
        </Text>
        <TextInput placeholder="enter pancard no." style={styles.textInput} />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Gst No
        </Text>
        <TextInput placeholder="enter gst no." style={styles.textInput} />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text
          style={{
            margin: responsiveWidth(2),
            fontSize: responsiveFontSize(2.2),
            fontWeight: '700',
            color: COLORS.black,
          }}>
          Finance Details :
        </Text>
        {/* <TextInput
          placeholder="enter father's number"
          style={styles.textInput}
        /> */}
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Current FY sales Tax
        </Text>
        <TextInput
          placeholder="enter current FY sales tax"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Current FY IT Return
        </Text>
        <TextInput
          placeholder="enter current FY IT return"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Last FY sales Tax Return
        </Text>
        <TextInput
          placeholder="enter last FY sales return"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Last FY IT return
        </Text>
        <TextInput
          placeholder="enter last FY IT return"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Loan Required
        </Text>
        <TextInput
          placeholder="enter loan requirement"
          style={styles.textInput}
        />
      </View>

      {/* photo selfie */}
      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Photo/Selfie
        </Text>

        <TouchableOpacity style={styles.selectPhoto}>
          <Font5
            name="camera"
            size={responsiveWidth(12)}
            color={COLORS.Primary}
          />
        </TouchableOpacity>
      </View>

      {/* pan card photo */}
      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Pan Card
        </Text>
        <TouchableOpacity style={styles.selectPhoto}>
          <Font5
            name="camera"
            size={responsiveWidth(12)}
            color={COLORS.Primary}
          />
        </TouchableOpacity>
      </View>

      {/* Adhar card */}
      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Adhar Card
        </Text>
        <TouchableOpacity style={styles.selectPhoto}>
          <Font5
            name="camera"
            size={responsiveWidth(12)}
            color={COLORS.Primary}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.formButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BusinessLoan;

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
    fontSize: responsiveFontSize(2),
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
