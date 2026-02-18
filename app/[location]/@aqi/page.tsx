import AQIComponent from "@/components/AQIComponent";

const AqiPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ location: string }>;
  searchParams: Promise<Record<string, string>>;
}) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  return (
    <AQIComponent lat={parseFloat(latitude)} lon={parseFloat(longitude)} />
  );
};

export default AqiPage;
