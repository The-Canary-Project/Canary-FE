const url = process.env.SOCKET_URL;

export const getAllPrompts = async() => {
  const res = await fetch(`${url}/api/v1/prompts`);

  const json = await res.json();
  if(!res.ok) throw ('Failed to fetch prompts from API');

  return json;
};
