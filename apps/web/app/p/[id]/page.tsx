export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <main className="p-8 text-2xl">Profile page – ID: {id}</main>;
}
