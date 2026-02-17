export const getWeatherData = async(lat: number, lon: number) => {
    try{
        const apiKey = process.env.WEATHER_API_KEY
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        const data = await response.json()
        return data?.weather[0]

    }catch(error){
        console.error("Error fetching weather data:", error?.message)
    }

}
export const getTemperatureData = async(lat: number, lon: number) => {
    try{
        const apiKey = process.env.WEATHER_API_KEY
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        const data = await response.json()
        return data?.main

    }catch(error){
        console.error("Error fetching weather data:", error?.message)
    }

}
export const getWindData = async(lat: number, lon: number) => {
    try{
        const apiKey = process.env.WEATHER_API_KEY
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        const data = await response.json()
        return data?.wind

    }catch(error){
        console.error("Error fetching weather data:", error?.message)
    }

}

export const getAqiData = async(lat: number, lon: number) => {
    try{
        const apiKey = process.env.WEATHER_API_KEY
        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        const data = await response.json()
        return data?.list[0]

    }catch(error){
        console.error("Error fetching weather data:", error?.message)
    }
}