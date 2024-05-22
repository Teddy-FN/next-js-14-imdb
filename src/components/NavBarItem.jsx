"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`hover:bg-amber-500 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
