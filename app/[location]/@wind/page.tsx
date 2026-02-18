import WindComponent from '@/components/WindComponent'

const WindPage = async ({params,searchParams,}: { params: Promise<{ location: string }>;searchParams: Promise<Record<string, string>>;}) => {
    const { location } = await params;
    const { latitude, longitude } = await searchParams;


  return (
    <WindComponent lat={parseFloat(latitude)} lon={parseFloat(longitude)} />
  )
}

export default WindPage