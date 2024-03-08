"use client";

export default function IdPage({ params }) {
  async function getName(params) {
    const response = await fetch("http://localhost:3000/api/");
    const names = await response.json();

    let nameToDisplay;

    names.forEach((element) => {
      if (element.id == params.id) {
        nameToDisplay = element.name;
      }
    });
    return nameToDisplay;
  }

  return <>{getName(params)}</>;
}
