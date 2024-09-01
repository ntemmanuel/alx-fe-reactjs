
import React from 'react';
import { useQuery } from 'react-query';

// Fetch posts function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

function PostsComponent() {
  // Using useQuery to fetch data with additional options
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching, // Indicates whether a new fetch is in progress
  } = useQuery('posts', fetchPosts, {
    staleTime: 30000, // Data will be considered fresh for 30 seconds
    cacheTime: 60000, // Data will remain in cache for 60 seconds
    refetchOnWindowFocus: true, // Refetch data when the window regains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={refetch} style={{ marginBottom: '20px' }}>
        Refetch Posts
      </button>
      {isFetching && <div>Updating posts...</div>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
