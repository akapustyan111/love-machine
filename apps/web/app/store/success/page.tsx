import NeonTitle from "@/components/NeonTitle";

export default function SuccessPage({ searchParams }: { searchParams: { pack?: string }}) {
  return (
    <section className="space-y-4">
      <NeonTitle text="PAYMENT DEMO" />
      <p className="text-white/75">Payment mocked. Pack: <b>{searchParams.pack || "-"}</b></p>
    </section>
  );
}
