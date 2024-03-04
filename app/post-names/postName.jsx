"use client";
import { useState } from "react";

// This is message from the vscode.dev

export default function PostName() {
  const [nameInputField, setNameInputField] = useState("");

  function handleInputChange(event) {
    setNameInputField(event.target.value);
  }

  function handleClick() {
    console.log(nameInputField);
    fetch("http://localhost:3000/api", {
      method: "POST",
      body: JSON.stringify({
        name: nameInputField,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    setNameInputField("");
  }

  return (
    <>
      <input
        type="text"
        value={nameInputField}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleClick}>POST</button>
    </>
  );
}
