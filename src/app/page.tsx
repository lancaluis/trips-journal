import PlaceTemplate from '@/components/PlaceTemplate'
import { getPlaces } from '@/graphql/client'

const Home = async () => {
  const { places } = await getPlaces()
  return <PlaceTemplate places={places} />
}

export default Home
