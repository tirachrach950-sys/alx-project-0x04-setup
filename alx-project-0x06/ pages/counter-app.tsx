"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { increment, decrement } from "@/redux/counterSlice";

export default function CounterApp() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Global Counter App</h1>

      <p className="text-xl mb-4">Current Value: {counter}</p>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
