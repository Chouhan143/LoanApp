import {BaseUrl} from '../constant/BaseUrl';

export const forgetVerifyEmail = async (email: string) => {
  try {
    const payload = {
      email: email,
    };
    let response = await fetch(`${BaseUrl}/forget-password`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      let data = await response.json();
      console.log('otp sended on given email', data);
      return data;
    } else {
      let data = await response.json();
    //   console.log('otp sended on given email', data);
      return data;
    }
  } catch (error) {
    console.log('failed to verify email catch error >>>>', error);
  }
};
