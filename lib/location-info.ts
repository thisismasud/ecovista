export const getLocationData = async(lat: number, lon: number) =>{
    try{
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
        const data = await response.json()
        return data

    }catch(error){
        console.error("Error fetching location data:", error?.message)
    }
}

export const getLocationLatLongList = async(location: string) =>{
    try{
        const response = await fetch(`https://localhost:3000/api/location/${location}`)
        const data = await response.json()
        return data

    }catch(error){
        console.error("Error fetching location data:", error?.message)
    }
}