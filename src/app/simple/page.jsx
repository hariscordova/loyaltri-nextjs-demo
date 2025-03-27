// Import the Sanity client to fetch data from the backend
import { client } from '../../sanity/lib/client';

// This is a Server Component (runs only on the server in Next.js App Router)
export default async function AuthorsPage() {
  /*
   * ✅ Sanity GROQ Query to Fetch Authors Data
   * - Fetch `_id` and `name` from `simpleAuthor` document type
   * - Extract `image.asset->url` and store it as `imageUrl`
   * - The `->` operator is used to dereference the `asset` object
   */
  const query = `*[_type == "simpleAuthor"]{ _id, name, "imageUrl": image.asset->url }`;
  
  // Fetch data from Sanity
  const authors = await client.fetch(query);

  // ✅ Debugging: Log fetched authors to check data in the console
  console.log('Fetched authors data:', authors);

  return (
    <div>
      {/* Page Title */}
      <h1>Authors List</h1>

      {/* Loop through the list of authors and display their data */}
      {authors.map((author) => (
        <div key={author._id} style={{ marginBottom: '20px' }}>
          {/* Display Author Name */}
          <h2>{author.name}</h2>

          {/* Display Author Image (only if an image exists) */}
          {author.imageUrl && (
            <img
              src={author.imageUrl} // Dynamically load image from Sanity
              alt={author.name} // Set alt text for accessibility & SEO
              style={{
                width: '100px', // Fixed width
                height: '100px', // Fixed height
                objectFit: 'cover' // Ensure image scales properly
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
