import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <Link href={"/get-names"}>
        <>
          <button>Get names api</button>
        </>
      </Link>
    </main>
  );
}
