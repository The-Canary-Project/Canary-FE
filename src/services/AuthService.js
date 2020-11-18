const DEV_URL = 'http://localhost:7890';
export const postSignUp = async(user) => {
  const res = await fetch(`${DEV_URL}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(user)
  });

  const json = await res.json();
  if(!res.ok) throw ('Failed to Sign Up');

  return json;
};

export const postLogin = async(user) => {
  const res = await fetch(`${DEV_URL}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(user)
  });

  const json = await res.json();

  if(!res.ok) throw ('Log In Failed');

  return json;
};

export const getVerify = async () => {
  const res = await fetch(`${DEV_URL}/api/v1/auth/verify`,
  {
    credentials: 'include'
  });

  const json = await res.json();
 
  if (!res.ok) return (res);
  
  return json;
};
