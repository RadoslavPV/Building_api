import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <Link href={"/get-names"}>Get names api</Link>
    </main>
  );
}
