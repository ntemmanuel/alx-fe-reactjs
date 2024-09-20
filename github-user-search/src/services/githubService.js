import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

export const fetchAdvancedSearchResults = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await axios.get(`${GITHUB_API_URL}?q=${query.trim()}`);
    return response.data;
  } catch (error) {
    throw new Error('Search failed');
  }
};
