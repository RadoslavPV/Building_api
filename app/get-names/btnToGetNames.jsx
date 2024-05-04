"use client";
import { useEffect, useState } from "react";

export default function FetchDataButton() {
  const [namesToDisplay, setNamesToDisplay] = useState([]);

  function handleClickDelete(ids) {
    fetch("http://localhost:3000/api", {
      method: "DELETE",
      body: JSON.stringify({
        id: ids,
      }),
    });
  }

  async function fetchUsers() {
    const response = await fetch("http://localhost:3000/api", {
      method: "GET",
    });
    const names = await response.json();

    const elements = await names.map((name) => {
      return (
        <div key={name.id}>
          {name.name}
          <button id={name.id} onClick={() => handleClickDelete(name.id)}>
            Delete
          </button>
        </div>
      );
    });

    setNamesToDisplay(elements);
    return elements;
  }

  useEffect(() => {
    fetchUsers();
  }, [namesToDisplay]);

  return (
    <div>
      {/* <button onClick={fetchUsers}>FetchUsers</button> */}
      {namesToDisplay}
    </div>
  );
}
