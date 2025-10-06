"use client";
import { useEffect, useState } from "react";
import { LIVE_EVENTS } from "@/app/mocks/data";

export default function LeaderTicker() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % LIVE_EVENTS.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="pointer-events-none fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-xs text-white shadow-lg">
      {LIVE_EVENTS[i].text}
    </div>
  );
}