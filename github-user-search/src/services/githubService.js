import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

// Basic user data fetch by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

// Advanced search by username, location, and minRepos using GitHub Search API
export const fetchAdvancedSearchResults = async ({ username, location, minRepos, page = 1 }) => {
  let query = '';

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const formattedQuery = query.trim();

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${formattedQuery}&page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error('Search failed');
  }
};
