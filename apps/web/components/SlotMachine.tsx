"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MOCK_USERS } from "@/app/mocks/data";

export default function SlotMachine() {
  const [spinning, setSpinning] = useState(false);
  const [pick, setPick] = useState(0);
  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    const target = Math.floor(Math.random() * MOCK_USERS.length);
    setTimeout(() => {
      setPick(target);
      setSpinning(false);
    }, 1200);
  };

  const u = MOCK_USERS[pick];

  return (
    <div className="mx-auto mt-10 w-full max-w-xl rounded-3xl border border-pink-500/30 bg-gradient-to-b from-pink-500/10 to-violet-500/10 p-6 text-center shadow-[0_0_40px_#ff3c0033]">
      <div className={`mx-auto h-48 w-48 overflow-hidden rounded-2xl ring-2 ring-pink-400/40 ${spinning ? "animate-pulse" : ""}`}>
        <div className={`h-full w-full transition-transform duration-700 ${spinning ? "-translate-y-full" : "translate-y-0"}`}>
          <div className="flex h-full w-full items-center justify-center bg-black/40">
            <Image alt={u.name} src={u.avatar} width={120} height={120} />
          </div>
        </div>
      </div>

      <div className="mt-4 text-lg font-semibold">{u.name} • {u.age} • {u.state}</div>
      <div className="mt-1 text-white/70 text-sm">{u.bio}</div>

      <button
        onClick={spin}
        className="mt-6 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 px-8 py-3 font-medium text-black shadow hover:brightness-105 active:scale-95"
      >
        {spinning ? "Spinning..." : "SPIN"}
      </button>
    </div>
  );
}