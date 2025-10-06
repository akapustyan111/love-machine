import NeonTitle from "@/components/NeonTitle";
const packs = [
  { id: "c200",  title: "200 Coins",  price: "$4.99",  bonus: "+30 bonus" },
  { id: "c550",  title: "550 Coins",  price: "$9.99" },
  { id: "c1200", title: "1200 Coins", price: "$19.99", tag: "BEST VALUE" },
  { id: "c2600", title: "2600 Coins", price: "$39.99" },
];

export default function StorePage() {
  return (
    <section className="space-y-6">
      <NeonTitle text="SELECT COINS" />
      <div className="space-y-3">
        {packs.map(p => (
          <div key={p.id} className="neon-card p-4 flex items-center justify-between">
            <div>
              <div className="font-semibold">{p.title}</div>
              <div className="text-xs text-white/50">{p.bonus || ""}</div>
            </div>
            <div className="flex items-center gap-3">
              {p.tag && <span className="text-[10px] rounded bg-orange-500/20 px-2 py-1 border border-orange-400/40">{p.tag}</span>}
              <span className="text-white/80">{p.price}</span>
              <a href={`/store/success?pack=${p.id}`} className="rounded bg-orange-500/80 hover:bg-orange-500 text-black font-semibold px-3 py-1">
                Pay (mock)
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
