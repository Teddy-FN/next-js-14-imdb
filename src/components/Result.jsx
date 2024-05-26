import React from "react";

export default function Result({ result }) {
  return (
    <div>
      {result.map((items, index) => (
        <div key={index}>
          <h2>{items.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
