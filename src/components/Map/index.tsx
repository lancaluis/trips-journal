'use client'

import dynamic from 'next/dynamic'

const Map = dynamic(
  () => import('@/components/Map/Map').then((component) => component.Map),
  { ssr: false }
)

const DynamicMap = () => {
  return <Map places={[]} />
}

export default DynamicMap
