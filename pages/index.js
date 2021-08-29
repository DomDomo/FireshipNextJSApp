import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        prefetch={true}
        href={{ pathname: "/[username]", query: { username: "jeffd234" } }}
      >
        <a>Jeff's profile'</a>
      </Link>
    </div>
  );
}
