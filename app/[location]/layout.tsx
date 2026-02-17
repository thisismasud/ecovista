import React from 'react'

const LocationLayout = ({children, aqi, wind, temperature, weather}) => {
  return (
    <div className='wrapper'>
        {children}
        {weather}
        {aqi}
        {wind}
        {temperature}
    </div>
  )
}

export default LocationLayout