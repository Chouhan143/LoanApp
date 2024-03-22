export type Details = {
  email: string;
  password: string;
};

export const userLogin = async (details: Details) => {
  let payload = {
    email: details.email,
    password: details.password,
  };
  try {
    let response = await fetch(
      'https://srninfotech.com/projects/loanApp/api/login',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      },
    );
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      let data = await response.json();
      return data;
    }
  } catch (error) {
    console.log('failed to login >>>>>', error);
    return error
  }
};
