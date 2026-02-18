import WeatherComponent from "@/components/WeatherComponent";

const WeatherPage = async ({params,searchParams,}: { params: Promise<{ location: string }>;searchParams: Promise<Record<string, string>>;}) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  return <WeatherComponent lat={parseFloat(latitude)} lon={parseFloat(longitude)} />;
};

export default WeatherPage;
