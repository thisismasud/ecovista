import LocationInfo from '@/components/LocationInfo';
import React from 'react'

const LocationPage = async ({params,searchParams,}: { params: Promise<{ location: string }>;searchParams: Promise<Record<string, string>>;}) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;


  return (
    <LocationInfo lat={parseFloat(latitude)} lon={parseFloat(longitude)} />
  )
}

export default LocationPage