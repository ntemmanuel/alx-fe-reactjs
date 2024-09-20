import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users?q';

export const fetchAdvancedSearchResults = async ({ username, location, minRepos, page = 1 }) => {
  // Construct the query with username, location, and repository count filters
  let query = '';

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  // Clean up any unnecessary whitespace
  const formattedQuery = query.trim();

  try {
    // Perform the API request using Axios
    const response = await axios.get(`${GITHUB_API_URL}?q=${formattedQuery}&page=${page}`);
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle any errors during the API call
    throw new Error('Search failed');
  }
};
