import {BaseUrl} from '../constant/BaseUrl';
export type Details = {
  newPassword: string;
  confirmPassword: string;
  otp: string;
};

export const forgetOldPassword = async (details: Details) => {
  try {
    const payload = {
      password: details.newPassword,
      confirm_password: details.confirmPassword,
      otp: details.otp,
    };
    let response = await fetch(`${BaseUrl}/reset-password`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      let data = await response.json();
      console.log('password forget successfully', data);
      return data;
    } else {
      let data = await response.json();
      console.log('faile to forget password', data);
      return data;
    }
  } catch (error) {
    console.log('failed to forget password catch error >>>>', error);
  }
};
