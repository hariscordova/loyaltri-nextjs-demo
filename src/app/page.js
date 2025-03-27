import React from 'react';
import authorType from '../sanity/schemaTypes/authorType'; // Adjusted path based on your project structure
import { client } from '../sanity/lib/client';

// This is a server component by default in the App Router
const Page = async () => {
  // Fetch authors data from Sanity
  const authors = await client.fetch('*[_type == "authorType"]');

  console.log('Fetched authors data:', authors);

  return (
    <div>
      <h1>Authors List</h1>
      {authors.map((author) => (
        <div key={author._id} style={{ marginBottom: '20px' }}>
          <h2>{author.name}</h2>
          {author.image && (
            <img
              src={author.image.asset.url}
              alt={author.name}
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
