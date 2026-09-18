export type Chain = { slug: string; name: string };
export type Token = { slug: string; name: string; symbol: string };
export const SEO_CHAINS: Chain[] = [
  ["ethereum","Ethereum"],["arbitrum","Arbitrum"],["base","Base"],["optimism","Optimism"],["polygon","Polygon"],["avalanche","Avalanche"],["bnb-chain","BNB Chain"],["fantom","Fantom"],["gnosis","Gnosis"],["linea","Linea"],["scroll","Scroll"],["zksync","zkSync"],["zora","Zora"],["mantle","Mantle"],["blast","Blast"],["mode","Mode"],["celo","Celo"],["moonbeam","Moonbeam"],["moonriver","Moonriver"],["solana","Solana"]
].map(([slug,name]) => ({slug,name}));
export const SEO_TOKENS: Token[] = [
  ["usdc","USD Coin","USDC"],["usdt","Tether USD","USDT"],["eth","Ether","ETH"],["weth","Wrapped Ether","WETH"],["dai","Dai","DAI"],["wbtc","Wrapped Bitcoin","WBTC"]
].map(([slug,name,symbol]) => ({slug,name,symbol}));
export function chainBySlug(slug: string) { return SEO_CHAINS.find((x) => x.slug === slug); }
export function tokenBySlug(slug: string) { return SEO_TOKENS.find((x) => x.slug === slug); }
export function chainPairParams() { return SEO_CHAINS.flatMap((from) => SEO_CHAINS.filter((to) => to.slug !== from.slug).map((to) => ({pair:`${from.slug}-to-${to.slug}`,from:from.slug,to:to.slug}))); }
export function tokenPairParams() { return chainPairParams().slice(0,20).flatMap((pair) => SEO_TOKENS.map((token) => ({token:token.slug,pair:`${pair.from}-to-${pair.to}`}))); }
export function chainPairUrl(from:string,to:string){return `/bridge/${from}-to-${to}`;}
export function tokenPairUrl(token:string,from:string,to:string){return `/bridge/${token}/${from}-to-${to}`;}
