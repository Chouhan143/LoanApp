import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import MenuIcon from 'react-native-vector-icons/Entypo';
import UserICon from 'react-native-vector-icons/FontAwesome';
import Font5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../themes/COLORS';
import {SelectList} from 'react-native-dropdown-select-list';
// import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {useNavigation} from '@react-navigation/native';
import {LoanFormProps, submitLoanForm} from '../../Hooks/submitLoanForm';
import DocumentPicker from 'react-native-document-picker';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {NavigationProps} from '../../navigation/Navigation';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
const LoanForm: React.FC<{selectedLoan: string}> = ({
  selectedLoan,
}: {
  selectedLoan: string;
}) => {
  const [firm_name, setFirm_name] = useState('');
  // const [loan_category, setLoan_Category] = useState(selectedLoan);
  const [mobile, setMobile] = useState('');
  const [contact_person, setContact_Person] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [date_of_corporate, setDate_Of_Corporate] = useState<string>('');
  const [pan_number, setPan_Number] = useState('');
  const [current_fy, setCurrent_Fy] = useState('');
  const [loan_required, setLoan_Required] = useState('');
  const [img, setImg] = useState('');
  const [pan_image, setPan_Image] = useState('');
  const [gst_number, setGst_Number] = useState('');
  const [last_fy, setLast_Fy] = useState('');
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);
  const details = useSelector(
    state => state.ReduxStore.localstorageUserDetails,
  );
  const navigation = useNavigation<NavigationProps>();

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

  useEffect(() => {
    let date = new Date();
    formatDate(date);
  }, []);

  // Function to format date in DD/MM/YYYY format
  const formatDate = date => {
    const newDate = format(date, 'dd/MM/yyyy');
    setDate_Of_Corporate(newDate);
    return newDate;
  };

  const handleSumbitLoanForm = async () => {
    setLoader(true);
    const formdata = new FormData();
    // let payload: LoanFormProps = {
    //   loan_category: selectedLoan,
    //   firm_name: firm_name,
    //   mobile: mobile,
    //   contact_person: contact_person,
    //   email: email,
    //   date_of_corporate: date_of_corporate,
    //   pan_number: pan_number,
    //   pan_image: pan_image,
    //   current_fy: current_fy,
    //   loan_required: loan_required,
    //   img: img,
    //   gst_number: gst_number,
    //   last_fy: last_fy,
    // };

    // Append text data
    formdata.append('user_id', details.user_id);
    formdata.append('loan_category', selectedLoan);
    formdata.append('firm_name', firm_name);
    formdata.append('mobile', mobile);
    formdata.append('contact_person', contact_person);
    formdata.append('email', email);
    formdata.append('date_of_corporate', date_of_corporate);
    formdata.append('pan_number', pan_number);
    formdata.append('current_fy', current_fy);
    formdata.append('loan_required', loan_required);
    formdata.append('gst_number', gst_number);
    formdata.append('last_fy', last_fy);
    // formdata.append('code', details.code);

    // console.log("loan category",selectedLoan);

    // Append image URIs
    if (img) {
      const imgName = img.split('/').pop(); // Get image name from URI
      formdata.append('img', {
        uri: img,
        name: imgName,
        type: 'image/jpeg', // Adjust according to your image type
      });
    }

    if (pan_image) {
      const panImageName = pan_image.split('/').pop(); // Get image name from URI
      formdata.append('pan_image', {
        uri: pan_image,
        name: panImageName,
        type: 'image/jpeg', // Adjust according to your image type
      });
    }

    let data = await submitLoanForm(formdata);
    // console.log('submit form response >>>>>>', data);
    if (data.result) {
      setTimeout(() => {
        setLoader(false);
        Toast.show({
          type: 'success',
          text1: 'Successfully submitted',
          text2: `${data.message}`,
          text1Style: {
            fontSize: responsiveFontSize(2),
            fontWeight: '700',
            color: 'green',
          },
          text2Style: {
            fontSize: responsiveFontSize(1.8),
            fontWeight: '500',
            color: 'black',
          },
        });
      }, 2000);
    } else if (data.errors) {
      setLoader(false);
      setTimeout(() => {
        Toast.show({
          type: 'error',
          text1: 'Failed to submit',
          text2: `${
            data.errors.contact_person
              ? data.errors.contact_person[0]
              : data.errors.current_fy
              ? data.errors.contact_person[0]
              : data.errors.date_of_corporate
              ? data.errors.date_of_corporate[0]
              : data.errors.email
              ? data.errors.email[0]
              : data.errors.firm_name
              ? data.errors.firm_name[0]
              : data.errors.img
              ? data.errors.img[0]
              : data.errors.last_fy
              ? data.errors.last_fy[0]
              : data.errors.loan_required
              ? data.errors.loan_required[0]
              : data.errors.mobile
              ? data.errors.mobile[0]
              : data.errors.pan_image
              ? data.errors.pan_image[0]
              : data.errors.pan_number
              ? data.errors.pan_number[0]
              : data.errors.loan_category
              ? data.errors.loan_category[0]
              : data.errors.message
          }`,
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
        setLoader(false);
      }, 1000);
    } else {
      setLoader(false);
    }
  };
  // console.log('selected date >>>>', date_of_corporate);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Firm Name <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="Enter campany name"
          onChangeText={text => setFirm_name(text)}
          style={styles.textInput}
          placeholderTextColor={'gray'}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Contact Person <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="Enter contact person"
          style={styles.textInput}
          onChangeText={text => setContact_Person(text)}
          placeholderTextColor={'gray'}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Mobile No. <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="Enter mobile no."
          onChangeText={text => setMobile(text)}
          style={styles.textInput}
          keyboardType="number-pad"
          maxLength={10}
          placeholderTextColor={'gray'}
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
          placeholder="Enter email id"
          onChangeText={text => setEmail(text)}
          style={styles.textInput}
          placeholderTextColor={'gray'}
        />
        {/* <RadioGroup
          radioButtons={marital_Status}
          onPress={() => setMaritalSelect}
          selectedId={MaritalSelect}
          borderColor={COLORS.Primary}
          containerStyle={{flexDirection: 'row'}}
        /> */}
      </View>

      {/* date picker container */}
      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Date of Incorporation <Text style={{color: 'red'}}>*</Text>
        </Text>
        {/* <TextInput
          placeholder="Enter date dd/mm/yyyy formate"
          style={styles.textInput}
          onChangeText={text => setDate_Of_Corporate(text)}
          placeholderTextColor={'gray'}
        /> */}
        <View style={styles.datePickerContainer}>
          <View style={{flex: 2.8, justifyContent: 'center'}}>
            <Text style={styles.dateText}>{date_of_corporate}</Text>
          </View>
          <TouchableOpacity
            onPress={() => setOpen(!open)}
            style={styles.pickDateButton}>
            <Text style={styles.pickDateBtnText}>Select</Text>
          </TouchableOpacity>

          {/* date picker */}
          <DatePicker
            modal
            open={open}
            date={date}
            mode="date" // Set mode to "date" to select only the date
            onConfirm={selectedDate => {
              formatDate(selectedDate);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Pan No <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="Enter pancard no."
          onChangeText={text => setPan_Number(text)}
          style={styles.textInput}
          maxLength={10}
          placeholderTextColor={'gray'}
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Gst No (optional)
        </Text>
        <TextInput
          placeholder="Enter gst no."
          onChangeText={text => setGst_Number(text)}
          style={styles.textInput}
          placeholderTextColor={'gray'}
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
          placeholder="Enter current FY sales tax"
          style={styles.textInput}
          onChangeText={text => setCurrent_Fy(text)}
          placeholderTextColor={'gray'}
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
          placeholder="Enter last FY IT return"
          style={styles.textInput}
          onChangeText={text => setLast_Fy(text)}
          placeholderTextColor={'gray'}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Loan Required <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="Enter loan requirement"
          style={styles.textInput}
          onChangeText={text => setLoan_Required(text)}
          placeholderTextColor={'gray'}
          keyboardType="number-pad"
        />
      </View>

      {/* photo selfie */}
      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Photo/Selfie <Text style={{color: 'red'}}>*</Text>
        </Text>
        {img ? (
          <TouchableOpacity onPress={selectSelfie} style={styles.selectPhoto}>
            <Font5
              name="check-circle"
              size={responsiveWidth(12)}
              color={'green'}
            />
            <Text style={styles.selectedImgText}>image is selected</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={selectSelfie} style={styles.selectPhoto}>
            <Font5
              name="camera"
              size={responsiveWidth(12)}
              color={COLORS.Primary}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* pan card photo */}
      <View style={styles.inputFieldContainer}>
        <Text style={{fontSize: responsiveFontSize(2), color: COLORS.black}}>
          Pan Card Photo <Text style={{color: 'red'}}>*</Text>
        </Text>
        {pan_image ? (
          <TouchableOpacity onPress={selectPanPhoto} style={styles.selectPhoto}>
            <Font5
              name="check-circle"
              size={responsiveWidth(12)}
              color={'green'}
            />
            <Text style={styles.selectedImgText}>image is selected</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={selectPanPhoto} style={styles.selectPhoto}>
            <Font5
              name="camera"
              size={responsiveWidth(12)}
              color={COLORS.Primary}
            />
          </TouchableOpacity>
        )}
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
          {loader ? (
            <ActivityIndicator size={'large'} color={'white'} />
          ) : (
            <Text style={styles.buttonText}>Submit</Text>
          )}
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
    color: 'black',
  },
  dateText: {
    fontSize: responsiveFontSize(2.1),
    color: 'black',
    fontWeight: '500',
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
  selectedImgText: {
    fontSize: responsiveScreenFontSize(1.8),
    marginVertical: responsiveWidth(2),
    color: 'green',
  },
  datePickerContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    paddingLeft: responsiveWidth(3),
    borderColor: COLORS.graylight,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    color: 'black',
    flexDirection: 'row',
  },
  pickDateButton: {
    flex: 1.5,
    margin: 2,
    backgroundColor: COLORS.Primary,
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickDateBtnText: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    fontWeight: '500',
  },
});
