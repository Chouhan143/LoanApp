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
import {LoanFormProps, submitLoanForm} from '../../Hooks/submitLoanForm';
import DocumentPicker from 'react-native-document-picker';
import Toast from 'react-native-toast-message';

const LoanForm: React.FC<{selectedLoan: string}> = ({
  selectedLoan,
}: {
  selectedLoan: string;
}) => {
  const [firm_name, setFirm_name] = useState('');
  const [loan_category, setLoan_Category] = useState('');
  const [mobile, setMobile] = useState('');
  const [contact_person, setContact_Person] = useState('');
  const [email, setEmail] = useState('');
  const [date_of_corporate, setDate_Of_Corporate] = useState('');
  const [pan_number, setPan_Number] = useState('');
  const [current_fy, setCurrent_Fy] = useState('');
  const [loan_required, setLoan_Required] = useState('');
  const [img, setImg] = useState('dfkjahdfkhakfhakhdfk.png');
  const [pan_image, setPan_Image] = useState('adfhakdflklfjaldf.png');
  const [gst_number, setGst_Number] = useState('');
  const [last_fy, setLast_Fy] = useState('');
  // console.log('loan type', selectedLoan);

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

  const handleSumbitLoanForm = async () => {
    let payload: LoanFormProps = {
      loan_category: selectedLoan,
      firm_name: firm_name,
      mobile: mobile,
      contact_person: contact_person,
      email: email,
      date_of_corporate: date_of_corporate,
      pan_number: pan_number,
      pan_image: pan_image,
      current_fy: current_fy,
      loan_required: loan_required,
      img: img,
      gst_number: gst_number,
      last_fy: last_fy,
    };

    let data = await submitLoanForm(payload);
    console.log('submit form response >>>>>>',data);
    if (data.errors) {
      Toast.show({
        type: 'error',
        text1: 'Failed to submit',
        text2: 'failed to submit your loan application',
        text1Style: {
          fontSize: responsiveFontSize(2),
          fontWeight: '700',
          color: 'red',
        },
        text2Style: {
          fontSize: responsiveFontSize(1.8),
          fontWeight: '500',
          color: 'black',
        },
      });
    }
  };

  const selectSelfie = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images], // specify the type of files to pick (optional)
      });

      // res.uri is the URI of the selected image
      setImg(res[0].uri);
      console.log('URI of selected image:', res[0].uri);

      // Handle the selected image URI here (e.g., set it to state, pass it to another function, etc.)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log('User cancelled the picker');
      } else {
        // Error occurred while picking the file
        console.log('Error picking file:', err);
      }
    }
  };
  const selectPanPhoto = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images], // specify the type of files to pick (optional)
      });

      // res.uri is the URI of the selected image
      setPan_Image(res[0].uri);
      console.log('URI of selected image:', res[0].uri);

      // Handle the selected image URI here (e.g., set it to state, pass it to another function, etc.)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log('User cancelled the picker');
      } else {
        // Error occurred while picking the file
        console.log('Error picking file:', err);
      }
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Firm Name <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="enter campany name"
          onChangeText={text => setFirm_name(text)}
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Contact Person <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="enter contact person"
          style={styles.textInput}
          onChangeText={text => setContact_Person(text)}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Mobile No. <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="enter mobile no."
          onChangeText={text => setMobile(text)}
          style={styles.textInput}
        />
        {/* <RadioGroup
          radioButtons={gender}
          onPress={() => setGenderSelect}
          selectedId={genderSelect}
          containerStyle={{flexDirection: 'row'}}
        /> */}
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Email ID <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="enter email id"
          onChangeText={text => setEmail(text)}
          style={styles.textInput}
        />
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
          Date of Incorporation <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="enter date of incorporation"
          style={styles.textInput}
          onChangeText={text => setDate_Of_Corporate(text)}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Pan No <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="enter pancard no."
          onChangeText={text => setPan_Number(text)}
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Gst No (optional)
        </Text>
        <TextInput
          placeholder="enter gst no."
          onChangeText={text => setGst_Number(text)}
          style={styles.textInput}
        />
      </View>

      <Text
        style={{
          marginVertical: responsiveWidth(5),
          marginLeft: responsiveWidth(0),
          fontSize: responsiveFontSize(2.2),
          fontWeight: '700',
          color: COLORS.black,
        }}>
        Finance Details :
      </Text>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Current FY sales Tax | IT Returns{' '}
          <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="enter current FY sales tax"
          style={styles.textInput}
          onChangeText={text => setCurrent_Fy(text)}
        />
      </View>

      {/* <View style={styles.inputFieldContainer}>
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
      </View> */}

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Last FY Sales Tax | IT Returns <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="enter last FY IT return"
          style={styles.textInput}
          onChangeText={text => setLast_Fy(text)}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Loan Required <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="enter loan requirement"
          style={styles.textInput}
          onChangeText={text => setLoan_Required(text)}
        />
      </View>

      {/* photo selfie */}
      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Photo/Selfie <Text style={{color: 'red'}}>*</Text>
        </Text>

        <TouchableOpacity onPress={selectSelfie} style={styles.selectPhoto}>
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
          Pan Card Photo <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TouchableOpacity onPress={selectPanPhoto} style={styles.selectPhoto}>
          <Font5
            name="camera"
            size={responsiveWidth(12)}
            color={COLORS.Primary}
          />
        </TouchableOpacity>
      </View>

      {/* Adhar card */}
      {/* <View style={styles.inputFieldContainer}>
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
      </View> */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSumbitLoanForm}
          style={styles.formButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoanForm;

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
    gap: responsiveHeight(1.5),
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
    height: responsiveHeight(6),
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
