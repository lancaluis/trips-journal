import LinkWrapper from '@/components/LinkWrapper'
import DynamicMap from '@/components/Map'
import { InfoIcon } from 'lucide-react'

const Home = () => {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoIcon aria-label="About" />
      </LinkWrapper>
      <DynamicMap />
    </>
  )
}

export default Home
