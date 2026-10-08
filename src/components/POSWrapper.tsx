"use client";

import dynamic from "next/dynamic";

const POSSimulator = dynamic(() => import("./POSSimulator"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-5xl mx-auto p-12 rounded-3xl bg-white border border-secondary-300 shadow-md text-center text-neutral-500 flex flex-col items-center justify-center min-h-[400px]">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-3"></div>
      <p className="text-xs font-semibold">Loading POS Simulator...</p>
    </div>
  ),
});

export default function POSWrapper() {
  return <POSSimulator />;
}
