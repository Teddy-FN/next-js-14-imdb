import React from "react";
import Card from "./Card";

export default function Result({ result }) {
  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 w-full">
      {result.map((items, index) => (
        <Card key={index} item={items} />
      ))}
    </div>
  );
}
