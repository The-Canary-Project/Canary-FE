const DEV_URL = 'http://localhost:7890';

export const getAllPrompts = async() => {
  const res = await fetch(`${DEV_URL}/api/v1/prompts`);

  const json = await res.json();
  if(!res.ok) throw ('Failed to fetch prompts from API');

  return json;
};
