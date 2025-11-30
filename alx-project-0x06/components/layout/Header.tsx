
"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/redux/store";

export default function Header() {
  // Access global counter state
  const counter = useSelector((state: RootState) => state.counter.value);

  return (
    <header className="w-full p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">My App</h1>

      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/counter-app">Counter App</Link>
      </nav>

      <div>
        <span className="font-semibold">Counter: {counter}</span>
      </div>
    </header>
  );
}


