import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

export const fetchAdvancedSearchResults = async ({ username, location, minRepos, page = 1 }) => {
  let query = '';

  // Construct the query with username, location, and repository count filters
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  // Remove any leading/trailing whitespace from the query string
  const formattedQuery = query.trim();

  try {
    const response = await axios.get(`${GITHUB_API_URL}?q=${formattedQuery}&page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error('Search failed');
  }
};
