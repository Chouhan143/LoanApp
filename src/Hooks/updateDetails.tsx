import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {BaseUrl} from '../constant/BaseUrl';
import Toast from 'react-native-toast-message';
import {Alert} from 'react-native';

type UpdateProfileDetailsProps = {
  user_name: string;
  user_id: number;
  location: string;
  address: string;
  img: string;
};
export const updateDetails = async (details: UpdateProfileDetailsProps) => {
  try {
    let response = await fetch(`${BaseUrl}/update-profile`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(details),
    });
    if (response.ok) {
      let data = await response.json();
      if (data.status === 'success') {
        Toast.show({
          type: 'success',
          text1: 'Success',
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
      }

      return data;
    } else {
      let data = await response.json();
      if (data.errors) {
        Toast.show({
          type: 'error',
          text1: 'Failed',
          text2: `${
            data.errors
              ? data.errors.user_id[0]
              : 'unable to update profile details'
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
      //   console.log('update profile data >>>>', data);
      return data;
    }
  } catch (error) {
    console.log('failed to update profile catch>>>>>', error);
    Alert.alert('Failed', 'failed to update profile due unknown error', [
      {
        text: 'OK',
        onPress: () => {},
      },
    ]);
  }
};
