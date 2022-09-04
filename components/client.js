// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2022-09-04', // use a UTC date string
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true // `false` if you want to ensure fresh data
})