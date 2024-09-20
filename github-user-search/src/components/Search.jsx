import React, { useState } from 'react';
import { fetchUserData, fetchAdvancedSearchResults } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [useAdvancedSearch, setUseAdvancedSearch] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSearchResults([]);
    setUserData(null);

    try {
      // If advanced search fields are filled in, use advanced search
      if (useAdvancedSearch || location || minRepos) {
        const data = await fetchAdvancedSearchResults({ username, location, minRepos });
        setSearchResults(data.items);
        setUseAdvancedSearch(true);
      } else {
        // Otherwise, perform a basic search by username
        const user = await fetchUserData(username);
        setUserData(user);
        setUseAdvancedSearch(false);
      }
    } catch (err) {
      setError('Something went wrong with the search.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories (optional)"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {userData && !useAdvancedSearch && (
        <div className="mt-4 p-4 border rounded">
          <img src={userData.avatar_url} alt={`${userData.login} avatar`} className="w-16 h-16 rounded-full" />
          <h2 className="font-bold">{userData.name || userData.login}</h2>
          <p>Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      )}

      {searchResults.length > 0 && useAdvancedSearch && (
        <div className="mt-4 space-y-4">
          {searchResults.map((user) => (
            <div key={user.id} className="p-4 border rounded flex items-center space-x-4">
              <img src={user.avatar_url} alt={`${user.login} avatar`} className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="font-bold">{user.login}</h2>
                <p>Repos: {user.public_repos}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
