import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/posts">
        <a>All posts</a>
      </Link>
    </div>
  );
}
