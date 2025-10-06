export default function NeonTitle({ text }: { text: string }) {
  return (
    <div className="select-none">
      <div className="text-3xl md:text-5xl font-extrabold tracking-wider
        text-[#ffd395] drop-shadow-[0_0_8px_rgba(255,140,0,0.8)]
        [text-shadow:_0_0_8px_rgba(255,140,0,0.6),_0_0_18px_rgba(255,90,0,0.6)]">
        {text}
      </div>
      <div className="h-1 mx-auto mt-2 w-32 rounded-full bg-orange-400 blur-sm opacity-70"></div>
    </div>
  );
}
