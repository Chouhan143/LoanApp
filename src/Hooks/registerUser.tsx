import {BaseUrl} from '../constant/BaseUrl';

export type UserDetails = {
  name: string;
  firm_name: string;
  mobile: string;
  email: string;
  password: string;
  location: string;
  role: 'customer' | 'partner' | 'associate';
};

export const registerUser = async (details: UserDetails) => {
  // console.log('details with role>>>>', details);
  try {
    const response = await fetch(`${BaseUrl}/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(details),
    });

    if (response.ok) {
      let data = await response.json();
      console.log('register user data>>>>', data);
      return data;
    } else {
      let data = await response.json();
      return data;
    }
  } catch (error) {
    console.log('registration failed catch error >>>>', error);
    return error;
  }
};
