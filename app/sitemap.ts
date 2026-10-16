import type { MetadataRoute } from "next";
import {
  chainPairUrl,
  indexableChainPairParams,
  indexableTokenPairParams,
  tokenPairUrl,
} from "@/lib/seo-data";
import { LEARN_ARTICLES } from "@/lib/learn-data";

const baseUrl = "https://www.starbridge.finance";
const lastModified = new Date("2026-10-15T00:00:00.000Z");

/**
 * Only pages meant to rank are listed. Route pages outside the curated core
 * set still work for users but are noindex and intentionally left out.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const fixedPaths = [
    "/",
    "/transactions",
    "/chains",
    "/about",
    "/crypto-bridge",
    "/cross-chain-bridge",
    "/token-bridge",
    "/usdc-bridge",
    "/base-bridge",
    "/arbitrum-bridge",
    "/stargate-alternative",
    "/learn",
    "/security",
    "/privacy",
    "/terms",
  ];

  const fixedPages: MetadataRoute.Sitemap = fixedPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));

  const chainPages: MetadataRoute.Sitemap = indexableChainPairParams().map(
    ({ from, to }) => ({
      url: `${baseUrl}${chainPairUrl(from, to)}`,
      lastModified,
    }),
  );

  const tokenPages: MetadataRoute.Sitemap = indexableTokenPairParams().map(
    ({ token, pair }) => {
      const [from, to] = pair.split("-to-");
      return {
        url: `${baseUrl}${tokenPairUrl(token, from, to)}`,
        lastModified,
      };
    },
  );

  const learnPages: MetadataRoute.Sitemap = LEARN_ARTICLES.map(({ slug }) => ({
    url: `${baseUrl}/learn/${slug}`,
    lastModified,
  }));

  return [...fixedPages, ...chainPages, ...tokenPages, ...learnPages];
}
