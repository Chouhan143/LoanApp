import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import UserICon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import styles from './styles';
import {COLORS} from '../../../themes/COLORS';
import {fetchUserDetails} from '../../../Hooks/fetchUserDetails';
import {updateDetails} from '../../../Hooks/updateDetails';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {da} from 'date-fns/locale';

const PersonalInforScreen: React.FC = () => {
  const [userDetails, setUserDetails] = useState();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [img, setImg] = useState('');
  const [editable, setEditable] = useState(false);
  const [userId, setUserId] = useState();
  const [loader, setLoader] = useState(false);
  const [mobile, setMobile] = useState('');
  const details = useSelector(
    state => state.ReduxStore.localstorageUserDetails,
  );
  // console.log('details', details);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    let payload = {
      user_id: details.user_id,
    };
    let data = await fetchUserDetails(payload);
    setName(data.name);
    setLocation(data.location);
    setAddress(data.address);
    setUserDetails(data);
    setImg(data.img);
    setMobile(data.mobile);
    setUserId(data.id);
    // console.log('user details>>>>', data);
  };

  const editProfileDetails = () => {
    setEditable(!editable);
  };

  const updateProfileDetails = async () => {
    setLoader(true);
    let formdata = new FormData();
    formdata.append('name', name);
    formdata.append('user_id', userId);
    formdata.append('location', location);
    formdata.append('mobile', mobile);

    if (img) {
      const imgName = img.split('/').pop(); // Get image name from URI
      formdata.append('img', {
        uri: img,
        name: imgName,
        type: 'image/jpeg', // Adjust according to your image type
      });
    }

    try {
      let data = await updateDetails(formdata);
      console.log('profile update data >>>>>', data);

      if (data.status === 'success') {
        setLoader(false);
        setEditable(false);
      } else {
        setLoader(false);
        setEditable(false);
      }
    } catch (error) {
      console.log('Error updating profile:', error);
      // Handle error here
    }
  };

  const selectPhoto = async () => {
    await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImg(image.path);
      // console.log(image);
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* profile image container  */}
      <View style={styles.profileContainer}>
        <View style={styles.userImgIcon}>
          {img ? (
            <Image
              source={{uri: img}}
              style={styles.userImgIcon}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={require('../../../assets/profile.png')}
              resizeMode="contain"
              style={styles.userImgIcon}
            />
          )}

          {editable && (
            <TouchableOpacity
              onPress={selectPhoto}
              style={styles.editProfileImageButton}>
              <FontAwesome6 name="pen" size={20} color={COLORS.Primary} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* information */}
      <View style={styles.informationContainer}>
        <View style={styles.userView}>
          <View style={styles.serviceIcon}>
            <FontAwesome6
              name={'circle-user'}
              size={responsiveFontSize(3.5)}
              color={'gray'}
            />
          </View>
          <View style={{flex: 5, justifyContent: 'center'}}>
            <TextInput
              style={styles.serviceText}
              value={`Role : ${userDetails?.role}`}
              editable={false}
            />
          </View>
        </View>

        <View style={styles.userView}>
          <View style={styles.serviceIcon}>
            <FontAwesome6
              name={'user-tie'}
              size={responsiveFontSize(3.5)}
              color={'gray'}
            />
          </View>
          <View style={{flex: 5, alignItems: 'center', flexDirection: 'row'}}>
            <Text style={styles.serviceText}>Name :</Text>
            <TextInput
              style={editable ? styles.inputStyle : styles.serviceText}
              onChangeText={text => setName(text)}
              placeholder="Enter name"
              placeholderTextColor={'gray'}
              value={name}
              editable={editable}
            />
          </View>
        </View>

        <View style={styles.userView}>
          <View style={styles.serviceIcon}>
            <UserICon
              name={'envelope'}
              size={responsiveFontSize(3.4)}
              color={'gray'}
            />
          </View>
          <View style={{flex: 5, alignItems: 'center', flexDirection: 'row'}}>
            <Text style={styles.serviceText}>Email :</Text>
            {/* <Text>
              {details.verified ? (
                <Text style={styles.varifiedText}>(verified)</Text>
              ) : (
                <Text style={styles.notVarifiedText}>(not verified)</Text>
              )}
            </Text> */}
            <TextInput
              style={styles.serviceText}
              value={userDetails?.email}
              editable={false}
            />
          </View>
        </View>

        <View style={styles.userView}>
          <View style={styles.serviceIcon}>
            <FontAwesome6
              name={'phone'}
              size={responsiveFontSize(3)}
              color={'gray'}
            />
          </View>
          <View style={{flex: 5, alignItems: 'center', flexDirection: 'row'}}>
            <Text style={styles.serviceText}>Mobile :</Text>
            <TextInput
              style={editable ? styles.inputStyle : styles.serviceText}
              onChangeText={text => setMobile(text)}
              placeholder="Enter mobile number"
              placeholderTextColor={'gray'}
              maxLength={10}
              keyboardType="number-pad"
              value={mobile}
              editable={editable}
            />
          </View>
        </View>

        <View
          style={[
            styles.userView,
            {
              borderBottomWidth: responsiveWidth(0.4),
              borderBottomColor: 'gray',
            },
          ]}>
          <View style={styles.serviceIcon}>
            <MaterialIcons
              name={'location-on'}
              size={responsiveFontSize(3.5)}
              color={'gray'}
            />
          </View>
          <View style={{flex: 5, alignItems: 'center', flexDirection: 'row'}}>
            <Text style={styles.serviceText}>Location :</Text>
            <TextInput
              style={editable ? styles.inputStyle : styles.serviceText}
              value={location}
              placeholder="Enter address"
              placeholderTextColor={'gray'}
              onChangeText={text => setLocation(text)}
              editable={editable}
            />
          </View>
        </View>
      </View>

      <View style={styles.btnContainer}>
        {editable ? (
          <TouchableOpacity
            onPress={updateProfileDetails}
            style={styles.updateButton}>
            {loader ? (
              <ActivityIndicator size={'large'} color={'white'} />
            ) : (
              <Text style={styles.updateButtonText}>Update Details</Text>
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={editProfileDetails}
            style={styles.editButton}>
            <FontAwesome6 name="edit" size={30} color={'white'} />
          </TouchableOpacity>
        )}
        {/* <TouchableOpacity
          onPress={editProfileDetails}
          style={styles.editButton}>
       
          <FontAwesome6 name="edit" size={30} color={'white'} />
        </TouchableOpacity> */}
      </View>

      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.logOutButton}>
          <MaterialIcons
            name={'logout'}
            size={responsiveFontSize(3)}
            color={COLORS.white}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
};

export default PersonalInforScreen;
