import {
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

const PersonalInforScreen: React.FC = () => {
  const [userDetails, setUserDetails] = useState();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [editable, setEditable] = useState(false);
  const details = useSelector(
    state => state.ReduxStore.localstorageUserDetails,
  );
  // console.log("details",details);
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
    // console.log('user details>>>>', data);
  };

  const editProfileDetails = () => {
    setEditable(!editable);
  };

  const updateProfileDetails = async () => {
    let payload = {
      user_name: name,
      user_id: details.user_id,
      location: location,
      address: address,
      img: '',
    };
    let data = await updateDetails(payload);
    if (data.status === 'success') {
      setEditable(false);
    } else {
      setEditable(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* profile image container  */}
      <View style={styles.profileContainer}>
        <View style={styles.userImgIcon}>
          <FontAwesome6
            name={'circle-user'}
            size={responsiveFontSize(24)}
            color={'gray'}
          />
        </View>
        {/* <View style={{alignItems: 'center', marginTop: responsiveHeight(1)}}>
          <Text style={styles.userName}>{details.user_name}</Text>
          <Text style={styles.userRole}>{details.role}</Text>
        </View> */}
      </View>

      {/* information */}
      <View
        style={{
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(40),
        }}>
        <View style={styles.userView}>
          <FontAwesome6
            name={'circle-user'}
            size={responsiveFontSize(3.5)}
            color={'gray'}
          />
          {/* <Text style={styles.serviceText}>
            Role : <Text>{userDetails?.role}</Text>
          </Text> */}
          <TextInput
            style={styles.serviceText}
            value={`Role : ${userDetails?.role}`}
            editable={false}
          />
        </View>

        <View style={styles.userView}>
          <FontAwesome6
            name={'user-tie'}
            size={responsiveFontSize(3.5)}
            color={'gray'}
          />
          {/* <Text style={styles.serviceText}>
            Name : <Text>{userDetails?.name}</Text>
          </Text> */}
          <Text style={styles.serviceText}>Name : </Text>
          <TextInput
            style={editable ? styles.inputStyle : styles.serviceText}
            onChangeText={text => setName(text)}
            value={name}
            editable={editable}
          />
        </View>

        <View style={styles.userView}>
          <UserICon
            name={'envelope'}
            size={responsiveFontSize(3.4)}
            color={'gray'}
          />

          <TextInput
            style={styles.serviceText}
            value={`Email : ${userDetails?.email}`}
            editable={false}
          />
          <Text>
            {details.verified ? (
              <Text style={styles.varifiedText}>(varified)</Text>
            ) : (
              <Text style={styles.notVarifiedText}>(not varified)</Text>
            )}
          </Text>
        </View>

        <View style={styles.userView}>
          <FontAwesome6
            name={'location-crosshairs'}
            size={responsiveFontSize(3.5)}
            color={'gray'}
          />

          <Text style={styles.serviceText}>Location :</Text>
          <TextInput
            style={editable ? styles.inputStyle : styles.serviceText}
            onChangeText={text => setLocation(text)}
            value={location}
            editable={editable}
          />
        </View>

        <View
          style={[
            styles.userView,
            {
              borderBottomWidth: responsiveWidth(0.4),
              borderBottomColor: 'gray',
            },
          ]}>
          <MaterialIcons
            name={'location-on'}
            size={responsiveFontSize(3.5)}
            color={'gray'}
          />
          <Text style={styles.serviceText}>Address :</Text>
          <TextInput
            style={editable ? styles.inputStyle : styles.serviceText}
            value={address}
            placeholder="enter address"
            onChangeText={text => setAddress(text)}
            editable={editable}
          />
        </View>
      </View>

      <View style={styles.btnContainer}>
        {editable ? (
          <TouchableOpacity
            onPress={updateProfileDetails}
            style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update Details</Text>
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
