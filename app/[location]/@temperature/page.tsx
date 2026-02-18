import TemperatureComponent from '@/components/TemperatureComponent';
import React from 'react'

const TemperaturePage = async ({params,searchParams,}: { params: Promise<{ location: string }>;searchParams: Promise<Record<string, string>>;}) => {
    const { location } = await params;
    const { latitude, longitude } = await searchParams;
    
    return (
        <TemperatureComponent lat={parseFloat(latitude)} lon={parseFloat(longitude)} />
    )
}

export default TemperaturePage