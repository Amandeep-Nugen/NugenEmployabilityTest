"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Card = () => {
  const router = useRouter();
  const nestedRouting = () => {
    router.push("/Card/Button");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      <button onClick={nestedRouting} className="border border-black p-2">
        Nested page route
      </button>
    </div>
  );
};

export default Card;
