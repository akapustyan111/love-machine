import NeonTitle from "@/components/NeonTitle";
import { MOCK_USERS } from "@/app/mocks/data";

export default function MePage() {
  const u = MOCK_USERS[0]; // MOCK
  return (
    <section className="space-y-6">
      <NeonTitle text="My page" />
      <div className="rounded-2xl bg-white/5 p-6">
        <div className="text-xl font-semibold">{u.name}</div>
        <div className="text-white/70">{u.age} • {u.state}</div>
        <p className="mt-2 text-white/70">{u.bio}</p>
      </div>
    </section>
  );
}
