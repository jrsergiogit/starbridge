import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerBrand">
        <strong>StarBridge</strong>
        <span>Non-custodial · You control your wallet</span>
      </div>
      <nav className="footerLinks" aria-label="Footer navigation">
        <Link href="/security">Security</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/learn">Learn</Link>
        <a href="mailto:support@starbridge.finance">Support</a>
      </nav>
    </footer>
  );
}
