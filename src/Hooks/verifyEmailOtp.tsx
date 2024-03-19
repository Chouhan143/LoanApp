import {BaseUrl} from '../constant/BaseUrl';

type Details = {
  user_id: string;
  otp: string;
};
export const verifyEmailOtp = async (details: Details) => {
  try {
    const payload = {
      user_id: details.user_id,
      otp: details.otp,
    };
    let response = await fetch(`${BaseUrl}/checkotp`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      let data = await response.json();
      //   console.log('otp sended on given email', data);
      return data;
    } else {
      let data = await response.json();
        // console.log('otp sended on given email', data);
      return data;
    }
  } catch (error) {
    console.log('failed to verify email catch error >>>>', error);
  }
};
