STARBRIDGE - WALLET FIX

This version intentionally uses the same LI.FI/Wagmi dependency stack as the working Dust Sweeper integration.

IMPORTANT BEFORE TESTING:
1. Close the dev server.
2. Delete the project's node_modules folder.
3. Delete the .next folder.
4. Run: npm install
5. Run: npm run dev
6. Test Connect wallet locally before deploying to Vercel.

Do NOT reuse the old node_modules from the previous StarBridge LI.FI v4 setup.
The wallet menu depends on the installed package versions, not only package.json.
