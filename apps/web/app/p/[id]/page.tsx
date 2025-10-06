type Props = { params: { id: string } }
export default function Page({ params }: Props){ return <main className="p-8 text-2xl">Profile /p/{params.id}</main>; }
