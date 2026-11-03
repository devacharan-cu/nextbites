import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link href="/" className="brand">
        🍽️ NextBites
      </Link>
      <Link href="/">Home</Link>
    </nav>
  );
}
