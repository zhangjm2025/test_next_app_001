import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/about">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />About
    </Link>
  );
}
