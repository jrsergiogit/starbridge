import { INDEXED_CHAIN_ROUTES, INDEXED_TOKEN_ROUTES } from "./indexed-routes";
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
const LEGACY_TOKEN_PAIRS = () => chainPairParams().slice(0,20).flatMap((pair) => SEO_TOKENS.map((token) => ({token:token.slug,pair:`${pair.from}-to-${pair.to}`})));

/** Networks with enough search demand to deserve an indexed route page. */
export const CORE_CHAINS = ["ethereum","arbitrum","base","optimism","polygon","bnb-chain","avalanche","solana"];
/** Networks and tokens for indexed token-route pages. */
export const CORE_TOKEN_CHAINS = ["ethereum","arbitrum","base","optimism"];
export const CORE_TOKENS = ["usdc","usdt"];

const INDEXED_CHAIN = new Set(INDEXED_CHAIN_ROUTES);
const INDEXED_TOKEN = new Set(INDEXED_TOKEN_ROUTES);
/** Indexable = curated core set plus pages Google already indexed. */
export function isIndexableChainPair(from:string,to:string){ return from!==to && ((CORE_CHAINS.includes(from) && CORE_CHAINS.includes(to)) || INDEXED_CHAIN.has(`${from}-to-${to}`)); }
export function isIndexableTokenPage(token:string,from:string,to:string){ return from!==to && ((CORE_TOKENS.includes(token) && CORE_TOKEN_CHAINS.includes(from) && CORE_TOKEN_CHAINS.includes(to)) || INDEXED_TOKEN.has(`${token}/${from}-to-${to}`)); }
export function indexableChainPairParams(){ return chainPairParams().filter((p)=>isIndexableChainPair(p.from,p.to)); }
export function indexableTokenPairParams(){ return SEO_TOKENS.map((t)=>t.slug).flatMap((token)=>chainPairParams().filter((p)=>isIndexableTokenPage(token,p.from,p.to)).map((p)=>({token,pair:p.pair}))); }

/** All token pages that must keep resolving: the previous set plus the curated one. */
export function tokenPairParams() {
  const seen = new Set<string>();
  return [...LEGACY_TOKEN_PAIRS(), ...indexableTokenPairParams()].filter((x) => { const k = `${x.token}/${x.pair}`; if (seen.has(k)) return false; seen.add(k); return true; });
}
export function chainPairUrl(from:string,to:string){return `/bridge/${from}-to-${to}`;}
export function tokenPairUrl(token:string,from:string,to:string){return `/bridge/${token}/${from}-to-${to}`;}
