"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-[#F9F6F3] text-[#2D2D2D] p-6 font-sans">
        <div className="w-full max-w-md bg-white border border-[#E5D5CB] rounded-3xl p-8 text-center shadow-lg">
          <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-3xl mx-auto mb-6">
            ⚠️
          </div>
          <h1 className="text-2xl font-black text-neutral-900 mb-2">Something went wrong</h1>
          <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
            Dukani encountered an unexpected error. Don't worry, your inventory database and local shop logs are safe.
          </p>
          <button
            onClick={() => reset()}
            className="w-full py-2.5 bg-[#D48166] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#B5634A] active:scale-95 transition-all"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
