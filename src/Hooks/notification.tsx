import {BaseUrl} from '../constant/BaseUrl';
type Details = {
  user_id: any;
};

export const getNotification = async (details: Details) => {
  try {
    const res = await fetch(`${BaseUrl}/get_message/${details.user_id}`);
    const data = await res.json(); // Parse response JSON
    return data; // Return parsed data
  } catch (error) {
    console.log('error', error);
  }
};
