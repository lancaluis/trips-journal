import { InfoIcon } from 'lucide-react'

import DynamicMap from '@/components/Map'
import { MapProps } from '@/components/Map/Map'
import LinkWrapper from '@/components/LinkWrapper'

const PlaceTemplate = ({ places }: MapProps) => {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoIcon aria-label="About" />
      </LinkWrapper>
      <DynamicMap places={places} />
    </>
  )
}

export default PlaceTemplate
