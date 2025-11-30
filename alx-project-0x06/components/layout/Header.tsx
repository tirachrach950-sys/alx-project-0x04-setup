"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

const Header = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <Link href="/">Home</Link>

      <nav className="flex gap-4">
        <Link href="/counter-app">Counter App</Link>
      </nav>

      <span>Counter: {count}</span>
    </header>
  );
};

export default Header;

