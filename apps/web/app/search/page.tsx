import NeonTitle from "@/components/NeonTitle";
import SlotMachine from "@/components/SlotMachine";
import { mockProfiles } from "@/app/mocks/data";

export default function SearchPage() {
  return (
    <section className="p-6 space-y-6">
      <NeonTitle className="text-3xl">LOVE MACHINE • SEARCH</NeonTitle>
      <SlotMachine profiles={mockProfiles} />
    </section>
  );
}
