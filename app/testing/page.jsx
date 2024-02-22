// Import necessary modules
'use client'
import { useState } from 'react';
import useSWR from 'swr';

// Define a fetcher function that fetches data from your API
const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Your component
function MyComponent() {
  const [isFetching, setIsFetching] = useState(false);

  // SWR key, which could be any unique identifier for your API request
  const apiEndpoint = 'https://jsonplaceholder.typicode.com/todos/1'; // Replace with your API endpoint

  // Use useSWR hook to fetch data
  const { data, error, mutate } = useSWR(isFetching ? apiEndpoint : null, fetcher);

  // Event handler for button click
  const handleClick = () => {
    setIsFetching(true);
  };

  // Render your component
  return (
    <div>
      <button onClick={handleClick} className='text-white'>Fetch Data</button>

      {isFetching && <p>Loading...</p>}

      {error && <p>Error fetching data</p>}

      {data && (
        <div>
          {/* Render your data here */}
          <p className='text-yellow-400'>{data.title}</p>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
