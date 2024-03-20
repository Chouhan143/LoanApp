import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../themes/COLORS';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationPropList} from '../../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {UserDetails, registerUser} from '../../Hooks/registerUser';
import Toast from 'react-native-toast-message';
import ToastMessage from '../../constant/ToastMessage';
import {addRegistrationData} from '../../redux/Slice';
import {useDispatch} from 'react-redux';
import styles from './styles';

type NavigationProps = StackNavigationProp<
  StackNavigationPropList,
  'emailVerification'
>;

const AssociateForm: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const dispatch = useDispatch();

  const RegisterUser = async () => {
    const details: UserDetails = {
      name: name,
      email: email,
      mobile: phone,
      password: password,
      location: location,
      address: address,
      role: 3,
    };
    // console.log("payload >>>",details);

    const data = await registerUser(details);
    // console.log('register user data>>>>', data);
    if (data.result) {
      dispatch(addRegistrationData(data));
      Toast.show({
        type: 'success',
        text1: 'Registration Success',
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

      navigation.navigate('emailVerification');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Registration failed',
        text2: `${
          data.errors.email
            ? data.errors.email
            : data.errors.name
            ? data.errors.name
            : data.errors.password
            ? data.errors.password
            : data.errors.mobile
            ? data.errors.mobile
            : data.errors.location
            ? data.errors.location
            : data.errors.address
            ? data.errors.address
            : data.message
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
    }
  };

  return (
    <View style={styles.conatainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.formContainer}
        keyboardShouldPersistTaps="handled">
        {/* input filed container */}
        <View style={styles.inputfieldContainer}>
          <TextInput
            style={styles.inputFiled}
            onChangeText={text => setName(text)}
            placeholder="enter your name"
          />
          <TextInput
            style={styles.inputFiled}
            onChangeText={text => setPhone(text)}
            placeholder="enter phone no."
            keyboardType="number-pad"
            maxLength={10}
          />
          <TextInput
            style={styles.inputFiled}
            onChangeText={text => setEmail(text)}
            placeholder="enter your email"
          />
          <TextInput
            style={styles.inputFiled}
            onChangeText={text => setPassword(text)}
            placeholder="create password"
          />
          <TextInput
            style={styles.inputFiled}
            onChangeText={text => setLocation(text)}
            placeholder="enter your location"
          />
          <TextInput
            style={styles.inputFiled}
            onChangeText={text => setAddress(text)}
            placeholder="enter your address"
          />
        </View>

        {/* button  */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={RegisterUser} style={styles.loginBtn}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AssociateForm;

// const styles = StyleSheet.create({
//   conatainer: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
//   InputeFiledView: {
//     width: responsiveWidth(92),
//     height: responsiveHeight(6),
//     marginVertical: responsiveWidth(1),
//     borderWidth: responsiveWidth(0.2),
//     borderRadius: responsiveWidth(2),
//     paddingLeft: responsiveWidth(2),
//   },
//   inputFiled: {
//     width: responsiveWidth(92),
//     height: responsiveHeight(6),
//     borderWidth: responsiveWidth(0.2),
//     borderRadius: responsiveWidth(2),
//     paddingLeft: responsiveWidth(2),
//     fontSize: responsiveScreenFontSize(2),
//   },
//   loginBtn: {
//     width: responsiveWidth(90),
//     height: responsiveHeight(6),
//     backgroundColor: COLORS.Primary,
//     borderRadius: responsiveWidth(2),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputfieldContainer: {
//     flex: 5,
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     flex: 1.2,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     // backgroundColor: 'yellow',
//   },
// });
