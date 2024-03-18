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
import UserICon from 'react-native-vector-icons/FontAwesome';
import Font5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../themes/COLORS';
import {SelectList} from 'react-native-dropdown-select-list';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {useNavigation} from '@react-navigation/native';

const CarLoan: React.FC = () => {
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
          Full Name (As per pan)
        </Text>
        <TextInput
          placeholder="enter name as per pancard"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Date of Birth
        </Text>
        <TextInput placeholder="enter date of birth" style={styles.textInput} />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Gender
        </Text>
        <RadioGroup
          radioButtons={gender}
          onPress={() => setGenderSelect}
          selectedId={genderSelect}
          containerStyle={{flexDirection: 'row'}}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Marital Status
        </Text>
        <RadioGroup
          radioButtons={marital_Status}
          onPress={() => setMaritalSelect}
          selectedId={MaritalSelect}
          borderColor={COLORS.Primary}
          containerStyle={{flexDirection: 'row'}}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Spouse Name
        </Text>
        <TextInput placeholder="enter spouse name" style={styles.textInput} />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Spouse Phone No
        </Text>
        <TextInput
          placeholder="enter spouse's number"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Father Name
        </Text>
        <TextInput placeholder="enter father name" style={styles.textInput} />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Father Phone No
        </Text>
        <TextInput
          placeholder="enter father's number"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Loan Requirement
        </Text>
        <TextInput
          placeholder="enter required amount"
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

export default CarLoan;

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
