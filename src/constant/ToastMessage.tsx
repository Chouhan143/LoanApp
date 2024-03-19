import {View, Text} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

// Type for successful registration response
interface SuccessfulRegistrationResponse {
  message: string;
  result: true;
  status: 200;
  user: {
    address: string;
    created_at: string;
    email: string;
    id: number;
    location: string;
    mobile: string;
    name: string;
    role: number;
    updated_at: string;
  };
}

// Type for failed registration response
interface FailedRegistrationResponse {
  errors: {
    address: string[];
    email: string[];
    location: string[];
    mobile: string[];
    name: string[];
    password: string[];
    role: number[];
    // You can include other fields here if they can result in errors
  };
  message: string;
  result: false;
  status: 422;
}

type RegistrationResponse =
  | SuccessfulRegistrationResponse
  | FailedRegistrationResponse;

const ToastMessage: React.FC<{data: RegistrationResponse}> = ({data}) => {
  if (data.result) {
    const successData = data as SuccessfulRegistrationResponse;
    Toast.show({
      type: 'success',
      text1: 'Registration Success',
      text2: `${successData.message}`,
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
  } else {
    const errorData = data as FailedRegistrationResponse;
    Toast.show({
      type: 'error',
      text1: 'Registration failed',
      text2: `${
        errorData.errors.email ||
        errorData.errors.name ||
        errorData.errors.password ||
        errorData.errors.mobile ||
        errorData.errors.location ||
        errorData.errors.address ||
        errorData.message
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

  return null;
};

export default ToastMessage;
