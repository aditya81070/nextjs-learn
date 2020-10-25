import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/users">
        <a>All Users</a>
      </Link>
    </div>
  );
}
