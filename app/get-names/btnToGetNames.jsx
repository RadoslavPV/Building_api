"use client";
import { useState } from "react";

export default function FetchDataButton() {
  const [namesToDisplay, setNamesToDisplay] = useState([]);

  async function fetchUsers() {
    const response = await fetch("http://localhost:3000/api");
    const names = await response.json();

    const elements = await names.map((name) => {
      return <div key={name.id}>{name.name}</div>;
    });

    setNamesToDisplay(elements);
    return elements;
  }

  return (
    <div>
      <button onClick={fetchUsers}>FetchUsers</button>
      {namesToDisplay}
    </div>
  );
}
