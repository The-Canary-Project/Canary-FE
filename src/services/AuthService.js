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
  if(!res.ok) throw json;
  // error handling for unique userName
  return json;

};
