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
};

export const submitLoanForm = async (formDetails: LoanFormProps) => {
//   console.log('final loan details?>>>>>', formDetails);

  try {
    const response = await fetch(`${BaseUrl}/customer_loan`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formDetails),
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
    console.log('failed to submit form>>>>', error);
    return error;
  }
};
