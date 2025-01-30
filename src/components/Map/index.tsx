'use client'

import dynamic from 'next/dynamic'
import { MapProps } from '@/components/Map/Map'

const Map = dynamic(
  () => import('@/components/Map/Map').then((component) => component.Map),
  { ssr: false }
)

const DynamicMap = ({ places }: MapProps) => {
  return <Map places={places} />
}

export default DynamicMap
