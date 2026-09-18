import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="topbar">
      <Link href="/" className="brand">
        <Image
          src="/logo-horizontal-transparent.png"
          alt="StarBridge"
          width={320}
          height={100}
          priority
        />
      </Link>

      <nav className="navLinks">
        <Link className="active" href="/">
          Bridge
        </Link>

        <Link href="/transactions">
          Transactions
        </Link>

        <Link href="/chains">
          Supported Chains
        </Link>

        <Link href="/learn">
          Learn
        </Link>

        <Link href="/about">
          About
        </Link>
      </nav>

      <div className="headerControls" aria-hidden="true">
        <span className="sun">☼</span>
        <span className="switch">
          <i />
        </span>
      </div>
    </header>
  );
}