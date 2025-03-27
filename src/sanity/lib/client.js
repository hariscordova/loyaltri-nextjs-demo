import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })

export const client = createClient({
  projectId: 'en7lxebw',  // Replace with your actual Project ID
  dataset: 'production',         // Or your dataset name
  apiVersion: '2024-03-24',      // Ensure it's a recent date
  useCdn: false,                 // Set to true for faster responses but may return stale data
});