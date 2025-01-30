import { GET_PAGE_BY_SLUG, GET_PAGES, GET_PLACES } from './queries'

export async function getPages() {
  const response = await fetch(
    'https://us-west-2.cdn.hygraph.com/content/cm6hticj101el08w3m8qy3i2f/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`
      },
      body: JSON.stringify({
        query: GET_PAGES,
        variables: {
          first: 3
        }
      })
    }
  )
  const json = await response.json()
  return json.data.pages
}

export async function getPageBySlug(slug: string) {
  const response = await fetch(
    'https://us-west-2.cdn.hygraph.com/content/cm6hticj101el08w3m8qy3i2f/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`
      },
      body: JSON.stringify({
        query: GET_PAGE_BY_SLUG,
        variables: {
          slug: slug
        }
      })
    }
  )
  const json = await response.json()
  return json.data.page
}

export async function getPlaces() {
  const response = await fetch(
    'https://us-west-2.cdn.hygraph.com/content/cm6hticj101el08w3m8qy3i2f/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`
      },
      body: JSON.stringify({
        query: GET_PLACES
      })
    }
  )
  const json = await response.json()
  return json.data
}
