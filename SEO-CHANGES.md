# SEO changes (starbridge.finance)

- `public/sitemap.xml` (static, 11 URLs) removed so `app/sitemap.ts` is the only sitemap (~312 URLs: core pages, every route page Google had already indexed plus the curated core routes, and all /learn articles).
- Route pages (`/bridge/...`): indexable = curated core routes (ethereum, arbitrum, base, optimism, polygon, bnb-chain, avalanche, solana; USDC/USDT between the first four) + the 213 route pages Google had already indexed (`lib/indexed-routes.ts`). Everything else works for users but is `noindex, follow` and out of the sitemap. Review after ~30 days with impression data.
- Route pages now show pair-specific notes (gas tokens, network type, Solana wallet note, L2 withdrawal note) from `lib/chain-info.ts`, and the content now comes before the widget in a plain article layout (`.seoProse`), with a "Go to the bridge" jump link. The widget itself is unchanged (no pre-selected networks).
- `/chains` lists the popular routes (internal links) and has its own canonical; `/about` canonical added (both used to inherit the home canonical).
- Removed the duplicated " | StarBridge" suffix from page titles (the layout template adds it).
- 107 old /learn URLs (92 that returned 404 plus 15 Google still had indexed) now 308-redirect to the closest article (`lib/legacy-learn-redirects.ts`, wired in `next.config.ts`).
- All canonicals, the sitemap, robots and llms files now use `https://www.starbridge.finance` (Vercel: apex 308-redirects to www, www is production).
