import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const pathname = usePathname();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">Splash App</Link>
        <div className="flex gap-4">
          {pathname !== "/counter-app" ? (
            <>
              <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
              <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
            </>
          ) : (
            <p className="font-semibold text-lg">Current count: {count}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
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


