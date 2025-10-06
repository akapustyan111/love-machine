interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <main className="p-8 text-2xl">
      Profile page – ID: {params.id}
    </main>
  );
}
