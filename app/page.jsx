import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Name from "@/app/components/name";
import Link from "next/link";

async function getNames() {
  const response = await fetch("http://localhost:3000/api");
  const names = await response.json();
  const namesToRender = await names.map((name) => {
    <div key={name.id}>{name.name}</div>;
  });

  return namesToRender;
}

export default async function Home() {
  const names = await getNames();
  return (
    <main>
      <Link href={"/add-name"}>Add Name</Link>
      <h1>Feed</h1>
      {names}
    </main>
  );
}
