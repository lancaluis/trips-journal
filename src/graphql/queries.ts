export const GET_PAGES = `
  query GetPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PLACES = `
  query GetPlaces {
  places {
    id
    slug
    name
    description {
      html
    }
    location {
      latitude
      longitude
    }
    gallery {
      url
      width
      height
    }
  }
}
`
