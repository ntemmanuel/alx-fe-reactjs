import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const getUser = async (username) => {
  const apiKey = import.meta.env.VITE_GITHUB_API_KEY;
  
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, {
      headers: apiKey ? { Authorization: `token ${apiKey}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching the user:', error);
    throw error;
  }
};

export { getUser };
