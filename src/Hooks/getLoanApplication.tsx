import {BaseUrl} from '../constant/BaseUrl';
type GetApplicationListProps = {
  user_id: number;
};

export const getLoanApplication = async (details: GetApplicationListProps) => {
  // console.log('loan application uer details>>>>>', details);

  try {
    let response = await fetch(`${BaseUrl}/view-loandetail`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(details),
    });
    if (response.ok) {
      let data = await response.json();
      // console.log('loan application >>>>', data);
      return data.products;
    } else {
      let data = await response.json();
      // console.log('loan application >>>>', data);
      return data;
    }
  } catch (error) {
    console.log('failed to fetch loan application', error);
  }
};
