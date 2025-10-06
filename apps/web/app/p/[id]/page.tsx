import { mockProfiles } from "@/app/mocks/data";

type Params = { params: Promise<{ id: string }> };

export default async function Page({ params }: Params) {
  const { id } = await params;
  const u = mockProfiles.find(x => x.id === id);
  if (!u) return <div className="text-white/70 p-8">Not found</div>;

  return (
    <div className="flex items-center gap-6 p-8">
      <img
        src={u.avatar}
        alt={u.name}
        width={128}
        height={128}
        className="rounded-2xl ring-2 ring-pink-400/30"
      />
      <div>
        <div className="text-2xl font-bold">{u.name} • {u.age} • {u.state}</div>
        <div className="text-white/70">{u.bio}</div>
      </div>
    </div>
  );
}
