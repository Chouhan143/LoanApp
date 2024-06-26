import Toast from 'react-native-toast-message';
import {BaseUrl} from '../constant/BaseUrl';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
export type ChangePasswordProps = {
  old_password: string;
  password: string;
  confirm_password: string;
  user_id: any;
};

const changePassword = async (details: ChangePasswordProps) => {
  const navigation = useNavigation();
  try {
    let response = await fetch(`${BaseUrl}/change_password`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(details),
    });
    if (response.ok) {
      let data = await response.json();
      //   console.log('password updated>>>>>', data);
      if (data.message) {
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
      //   console.log('password updated>>>>>', data);
      Toast.show({
        type: 'error',
        text1: 'Failed',
        text2: `${
          data.errors.old_password
            ? data.errors.old_password[0]
            : data.errors.password
            ? data.errors.password[0]
            : data.errors.user_id
            ? data.errors.user_id[0]
            : data.errors.confirm_password
            ? data.errors.confirm_password[0]
            : 'faile to update password'
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
      return data;
    }
  } catch (error) {
    console.log('failed to update password>>>>', error);
  }
};

export default changePassword;
