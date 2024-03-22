import {BaseUrl} from '../constant/BaseUrl';

type Details = {
  user_id: any;
};
export const fetchUserDetails = async (details: Details) => {
  try {
    let response = await fetch(`${BaseUrl}/user_detail`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(details),
    });
    if (response.ok) {
      let data = await response.json();
      // console.log('user details >>>>>', data);
      if (data.data.user_detail) {
        return data.data.user_detail;
      }
    } else {
      let data = await response.json();
      console.log('user failed details >>>>>', data);
      return data;
    }
  } catch (error) {
    console.log('failed to fetch user details', error);
  }
};
