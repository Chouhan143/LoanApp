import {BaseUrl} from '../constant/BaseUrl';

export const fetchSliderImages = async () => {
  try {
    let response = await fetch(`${BaseUrl}/slider`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    if (response.ok) {
      let data = await response.json();
        // console.log('slicer images >>>>>', data);

      return data.data;
    } else {
      let data = await response.json();
      return data.data;
    }
  } catch (error) {
    console.log('sldier image catch error >>>>>', error);
  }
};
