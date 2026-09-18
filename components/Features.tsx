const items = [
  ["ϟ", "Fast", "Best routes"],
  ["♢", "Secure", "Your keys, your assets"],
  ["↗", "Cross-Chain", "Many networks"],
  ["◎", "Simple", "One bridge"]
];

export default function Features() {
  return (
    <div className="featureRow">
      {items.map(([icon, title, text]) => (
        <div className="feature" key={title}>
          <div className="featureIcon">{icon}</div>
          <strong>{title}</strong>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}