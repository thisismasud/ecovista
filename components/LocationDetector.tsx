'use client'
import { useEffect, useState } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import Image from "next/image"


const LocationDetector = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    useEffect(() =>{
        setLoading(true)
        const params = new URLSearchParams(searchParams)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set('latitude', position.coords.latitude.toString())
                params.set('longitude', position.coords.longitude.toString())
                setLoading(false)
                router.push(`/current?${params.toString()}`)

            }, (error) => {
                console.error("Error getting location:", error)
                setLoading(false)
            })
        }else{
            console.error("Geolocation is not supported by this browser.")
            setLoading(false)
        }

    }, [router, pathname, searchParams])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-700 text-white">
      <Image src="/network.gif" width={200} height={200} alt="Loading..." className="border rounded-md my-4" priority />
      <p className="text-4xl text-center">Detecting location...</p>
    </div>
  )
}

export default LocationDetector