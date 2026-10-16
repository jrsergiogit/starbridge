/**
 * Factual, per-network details used on route pages so each page says
 * something specific about its pair (gas tokens, network type, wallet notes).
 * Keep entries conservative: only state what is stable and well known.
 */
export type ChainInfo = {
  /** LI.FI chain id used to pre-select the network in the widget */
  id: number;
  gas: string;
  kind: string;
  evm: boolean;
  blurb: string;
};

export const CHAIN_INFO: Record<string, ChainInfo> = {
  ethereum: { id: 1, gas: "ETH", kind: "layer-1 network", evm: true, blurb: "Ethereum is the largest smart-contract network and the settlement layer for many Ethereum layer-2 networks." },
  arbitrum: { id: 42161, gas: "ETH", kind: "Ethereum layer-2 (optimistic rollup)", evm: true, blurb: "Arbitrum is an Ethereum layer-2 network that batches transactions with optimistic rollup technology and settles them on Ethereum." },
  base: { id: 8453, gas: "ETH", kind: "Ethereum layer-2 (OP Stack)", evm: true, blurb: "Base is an Ethereum layer-2 network built on the OP Stack and incubated by Coinbase." },
  optimism: { id: 10, gas: "ETH", kind: "Ethereum layer-2 (OP Stack)", evm: true, blurb: "OP Mainnet (Optimism) is an Ethereum layer-2 network and the origin of the OP Stack that other layer-2 networks, including Base, build on." },
  polygon: { id: 137, gas: "POL (formerly MATIC)", kind: "EVM-compatible network", evm: true, blurb: "Polygon PoS is an EVM-compatible network commonly used for low-cost transfers and apps. Its gas token is POL, formerly MATIC." },
  avalanche: { id: 43114, gas: "AVAX", kind: "EVM-compatible network (C-Chain)", evm: true, blurb: "Avalanche's C-Chain is the EVM-compatible chain most users interact with, and gas is paid in AVAX." },
  "bnb-chain": { id: 56, gas: "BNB", kind: "EVM-compatible network", evm: true, blurb: "BNB Chain is an EVM-compatible network where gas is paid in BNB." },
  fantom: { id: 250, gas: "FTM", kind: "EVM-compatible network", evm: true, blurb: "Fantom is an EVM-compatible network whose ecosystem has been moving toward Sonic, so confirm the network and gas token shown in the live quote." },
  gnosis: { id: 100, gas: "xDAI", kind: "EVM-compatible network", evm: true, blurb: "Gnosis Chain is an EVM-compatible network where gas is paid in xDAI, a dollar-pegged token." },
  linea: { id: 59144, gas: "ETH", kind: "Ethereum layer-2 (zk rollup)", evm: true, blurb: "Linea is an Ethereum layer-2 network that uses zero-knowledge rollup technology and was developed by Consensys." },
  scroll: { id: 534352, gas: "ETH", kind: "Ethereum layer-2 (zk rollup)", evm: true, blurb: "Scroll is an Ethereum layer-2 network that uses zero-knowledge rollup technology." },
  zksync: { id: 324, gas: "ETH", kind: "Ethereum layer-2 (zk rollup)", evm: true, blurb: "zkSync Era is an Ethereum layer-2 network that uses zero-knowledge rollup technology." },
  zora: { id: 7777777, gas: "ETH", kind: "Ethereum layer-2 (OP Stack)", evm: true, blurb: "Zora Network is an Ethereum layer-2 network built on the OP Stack, focused on creator and NFT apps." },
  mantle: { id: 5000, gas: "MNT", kind: "Ethereum layer-2 network", evm: true, blurb: "Mantle is an Ethereum layer-2 network whose gas token is MNT." },
  blast: { id: 81457, gas: "ETH", kind: "Ethereum layer-2 network", evm: true, blurb: "Blast is an Ethereum layer-2 network that launched with a focus on native yield for ETH and stablecoins." },
  mode: { id: 34443, gas: "ETH", kind: "Ethereum layer-2 (OP Stack)", evm: true, blurb: "Mode is an Ethereum layer-2 network built on the OP Stack and focused on DeFi." },
  celo: { id: 42220, gas: "CELO", kind: "EVM-compatible network", evm: true, blurb: "Celo is an EVM-compatible network designed for mobile-friendly payments, with CELO as its native token." },
  moonbeam: { id: 1284, gas: "GLMR", kind: "EVM-compatible network (Polkadot ecosystem)", evm: true, blurb: "Moonbeam is an EVM-compatible network in the Polkadot ecosystem, and gas is paid in GLMR." },
  moonriver: { id: 1285, gas: "MOVR", kind: "EVM-compatible network (Kusama ecosystem)", evm: true, blurb: "Moonriver is Moonbeam's sister network in the Kusama ecosystem, and gas is paid in MOVR." },
  solana: { id: 1151111081099710, gas: "SOL", kind: "non-EVM network", evm: false, blurb: "Solana is a high-throughput network that is not EVM-compatible, so it uses different wallets and address formats than Ethereum-style chains." },
};

/** Networks whose native withdrawals to Ethereum use a long challenge period. */
const OPTIMISTIC = new Set(["arbitrum", "optimism", "base", "zora", "mode"]);

export type RouteNote = { title: string; body: string };

export function routeNotes(
  from: { slug: string; name: string },
  to: { slug: string; name: string },
): RouteNote[] {
  const a = CHAIN_INFO[from.slug];
  const b = CHAIN_INFO[to.slug];
  if (!a || !b) return [];

  const notes: RouteNote[] = [
    {
      title: `About ${from.name}`,
      body: a.blurb,
    },
    {
      title: `About ${to.name}`,
      body: b.blurb,
    },
    {
      title: `Gas you will need`,
      body:
        a.gas === b.gas
          ? `Both ${from.name} and ${to.name} use ${a.gas} for network fees, so the same asset can cover gas on each side. Keep a small balance of ${a.gas} on ${from.name} for the transaction and on ${to.name} for whatever you do after arriving.`
          : `${from.name} fees are paid in ${a.gas} and ${to.name} fees are paid in ${b.gas}. You need ${a.gas} on ${from.name} to send the transaction, and you will want some ${b.gas} on ${to.name} to move or use the funds after they arrive. Some routes can include a small amount of destination gas, so check the quote.`,
    },
  ];

  if (!a.evm || !b.evm) {
    const other = a.evm ? from.name : to.name;
    notes.push({
      title: "Different wallets on each side",
      body: `Solana is not EVM-compatible, so it uses a different wallet type and address format than ${other}. A route between them needs a compatible wallet for each network and a destination address in the correct format. Double-check the address before you confirm.`,
    });
  }

  if (OPTIMISTIC.has(from.slug) && to.slug === "ethereum") {
    notes.push({
      title: "Native withdrawal versus a bridge route",
      body: `Withdrawing from ${from.name} to Ethereum through its native bridge uses a challenge period that can take around a week. Routes shown by StarBridge may use other providers and finish sooner, so compare the estimated time in the live quote.`,
    });
  } else if (from.slug === "ethereum" && OPTIMISTIC.has(to.slug)) {
    notes.push({
      title: "Moving into a layer-2",
      body: `${to.name} is an Ethereum layer-2 network, so transactions there are usually cheaper than on Ethereum mainnet. Compare the total cost of the route, including the source-network gas on Ethereum, before you confirm.`,
    });
  }

  return notes;
}
