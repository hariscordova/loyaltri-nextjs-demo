import { client } from '../../../sanity/lib/client';
import { urlFor } from '../../../sanity/lib/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // Fetch all slugs to pre-build static pages
  const pages = await client.fetch(`*[_type == "page"]{ slug }`);
  return pages.map((page) => ({ slug: page.slug.current }));
}

// Fetch page data based on the slug
export default async function Page({ params }) {
  "use server"; // ✅ Ensure it's treated as a server component

  if (!params || !params.slug) return notFound(); // ✅ Handle missing params properly

  const slug = params.slug; // ✅ Now safely use slug

  // Fetch page content from Sanity
  const query = `*[_type == "page" && slug.current == $slug][0]`;
  const pageData = await client.fetch(query, { slug });

  // Handle 404 if page not found
  if (!pageData) {
    return notFound();
  }

  // ✅ Debugging: Log fetched authors to check data in the console
  console.log('Fetched data:', pageData);


  return (
    <div style={{ padding: '20px' }}>
      {/* Hero Image */}
      {pageData.image && (
        <img
          src={urlFor(pageData.image).url()} // ✅ Convert to string
          alt={pageData.title}
          style={{ width: "10%", borderRadius: "10px" }}
        />
      )}

      {/* SEO Title (H1) */}
      <h1>{pageData.title}</h1>

      {/* Subtitle */}
      <h2>{pageData.subtitle}</h2>

      {/* Page Content */}
      <p>{pageData.content}</p>
    </div>
  );
}
