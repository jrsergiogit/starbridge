const networks = [
  ["Ethereum", "Ξ", "eth"],
  ["Arbitrum", "A", "arb"],
  ["Base", "B", "base"],
  ["Solana", "S", "sol"],
  ["Polygon", "M", "poly"],
  ["Optimism", "O", "op"],
  ["BNB Chain", "B", "bnb"]
];

export default function NetworkIcons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "networkIcons compact" : "networkIcons"}>
      {networks.map(([name, mark, cls]) => (
        <div className="networkItem" key={name} title={name}>
          <div className={`networkIcon ${cls}`}>{mark}</div>
          {!compact && <span>{name}</span>}
        </div>
      ))}
    </div>
  );
}