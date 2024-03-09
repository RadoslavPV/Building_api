"use client";

export default function DeleteAll() {
  async function DeleteAllNames() {
    fetch("http://localhost:3000/api", {
      method: "DELETE",
    });
  }
  return (
    <>
      <button onClick={DeleteAllNames}>DELETE ALL USERS</button>
    </>
  );
}
