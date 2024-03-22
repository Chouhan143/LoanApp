import {Alert} from 'react-native';
import {BaseUrl} from '../constant/BaseUrl';

export type LoanFormProps = {
  loan_category: string;
  firm_name: string;
  mobile: string;
  contact_person: string;
  email: string;
  date_of_corporate: string;
  pan_number: string;
  current_fy: string;
  loan_required: string;
  img: string;
  pan_image: string;
  gst_number?: string;
  last_fy: string;
  user_id: string;
};

export const submitLoanForm = async (formDetails: LoanFormProps) => {
  // console.log('final loan details?>>>>>', formDetails);

  try {
    const response = await fetch(`${BaseUrl}/customer_loan`, {
      method: 'POST',
      body: formDetails,
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    if (response.ok) {
      let data = await response.json();
      //   console.log('form response data >>>>', data);
      return data;
    } else {
      let data = await response.json();
      //   console.log('form response data >>>>', data);
      return data;
    }
  } catch (error) {
    Alert.alert(
      'Failed to submit',
      'unexpeted error occurred while submitting form',
      [
        {
          text: 'OK',
          onPress: () => {},
        },
      ],
    );
    console.log('failed to submit form>>>>', error);
    return error;
  }
};
