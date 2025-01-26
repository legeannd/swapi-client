const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchSwapi = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error('fetch error');
  }

  return response.json();
}