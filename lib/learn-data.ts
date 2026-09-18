export type LearnCategory = 'guides' | 'education' | 'comparisons';
export type LearnArticle = { slug: string; title: string; description: string; category: LearnCategory; sections: [string, string][]; related: string[] };
export const LEARN_ARTICLES: LearnArticle[] = [
  {
    "slug": "what-is-a-crypto-bridge",
    "title": "What Is a Crypto Bridge?",
    "description": "Learn what a crypto bridge does, how cross-chain transfers work, and what to review before moving assets.",
    "category": "guides",
    "sections": [
      [
        "The short answer",
        "A crypto bridge connects assets and blockchain networks that do not natively share the same state. In practice, a bridge route coordinates a source transaction with delivery or representation of an asset on another network. The exact mechanism varies by bridge and route."
      ],
      [
        "How it works",
        "Start by identifying the source chain, destination chain, token and wallet. A token with the same symbol can exist as different contracts on different networks, so the destination network and asset shown by the route matter as much as the symbol."
      ],
      [
        "Why it matters",
        "Bridge quotes can change with liquidity, gas prices, provider availability and network conditions. Compare the amount received, estimated fees and transaction steps immediately before signing rather than relying on an earlier quote."
      ],
      [
        "Practical takeaway",
        "Use a wallet you control, verify the destination network and token, and review every transaction approval. StarBridge provides a non-custodial interface for reviewing supported routes; the underlying bridge and networks determine execution and availability."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "how-does-a-crypto-bridge-work",
    "title": "How Does a Crypto Bridge Work?",
    "description": "Understand the basic flow of a cross-chain transfer, from choosing a route to receiving assets on the destination network.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "A cross-chain transfer begins with a source asset on one network and an intended destination asset on another. A routing system finds a supported path, which may involve a bridge, liquidity venue, or multiple providers."
      ],
      [
        "Review the live route",
        "The user normally selects the source chain, destination chain, token and amount. The route then presents an expected output and transaction steps. Some routes use locking and minting, while others use liquidity pools or swaps along the way."
      ],
      [
        "Complete the transfer carefully",
        "Execution depends on confirmations, liquidity, gas and the providers available at that moment. A route can become unavailable or less attractive while you are preparing a transaction, so the live quote is the authoritative view."
      ],
      [
        "Practical takeaway",
        "The safest workflow is simple: confirm the chain, asset, amount, recipient and quoted output, then sign only the transactions you understand. Keep enough native gas token on the source network for required transactions."
      ]
    ],
    "related": [
      "/cross-chain-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "how-to-bridge-crypto",
    "title": "How to Bridge Crypto Between Networks",
    "description": "A practical walkthrough for selecting, reviewing and completing a cross-chain crypto transfer.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Choose the network where your asset currently lives and the network where you want to use it. Then select the exact token and amount. Avoid choosing a route solely because two networks support similarly named tokens."
      ],
      [
        "Review the live route",
        "Review the route before approving anything. Check estimated received amount, network fees, route fees, minimums, price impact where applicable, and the number of transactions you will sign."
      ],
      [
        "Complete the transfer carefully",
        "After the source transaction is submitted, allow the bridge or routing provider to complete its required steps. Do not resend the transfer simply because the destination balance has not appeared immediately."
      ],
      [
        "Practical takeaway",
        "Keep the transaction hash and verify the destination wallet on the correct network. If a transfer is pending, use the provider's status information and blockchain explorers rather than signing unrelated transactions."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "how-to-bridge-usdc",
    "title": "How to Bridge USDC Between Networks",
    "description": "What to check when moving USDC across supported blockchain networks.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "USDC can exist on multiple blockchain networks, and the network is part of the asset's identity. Before bridging, confirm which USDC contract or native representation you hold and which version the destination route supports."
      ],
      [
        "Review the live route",
        "Compare the amount you send with the estimated destination amount. Review source gas, route fees, destination costs if shown, and any minimum or liquidity limitations."
      ],
      [
        "Complete the transfer carefully",
        "Do not assume that every USDC route is interchangeable. Different networks can have different liquidity and settlement behavior, and a route may use a swap in addition to the cross-chain step."
      ],
      [
        "Practical takeaway",
        "Use the live route to confirm the final destination asset and network. For a practical route, StarBridge's USDC bridge page can be used to review available options before signing."
      ]
    ],
    "related": [
      "/usdc-bridge",
      "/bridge/usdc/ethereum-to-base"
    ]
  },
  {
    "slug": "how-to-bridge-usdt",
    "title": "How to Bridge USDT Between Networks",
    "description": "A practical guide to checking routes, fees and destination assets when bridging USDT.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "USDT is issued across multiple networks, so the same ticker does not guarantee the same token contract or transfer method. Identify the source network first and select a supported destination representation."
      ],
      [
        "Review the live route",
        "Review the quote for the amount received, fees and route steps. On some paths, the system may bridge directly; on others, it may swap through an intermediate asset."
      ],
      [
        "Complete the transfer carefully",
        "Keep enough native gas token on the source network and make sure your wallet supports the destination network. A token balance alone is not proof that you can complete the required transaction."
      ],
      [
        "Practical takeaway",
        "Before signing, verify the destination network and token shown in the route. If you want a live route, StarBridge's supported USDT paths can be reviewed through the bridge interface."
      ]
    ],
    "related": [
      "/bridge/usdt/ethereum-to-base",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "how-to-bridge-eth",
    "title": "How to Bridge ETH Between Networks",
    "description": "What to verify when moving ETH across blockchain networks.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "ETH is the native asset of Ethereum, while other networks may use their own native gas assets and wrapped representations. A cross-chain route therefore needs to distinguish the source ETH from the destination asset."
      ],
      [
        "Review the live route",
        "Check whether the destination route delivers native ETH, a wrapped representation, or another asset. Also verify that you have enough source-chain gas to authorize and submit the transaction."
      ],
      [
        "Complete the transfer carefully",
        "Fees can include source gas, routing costs and differences in exchange rates or liquidity. The quoted output is more useful than comparing a single fee number in isolation."
      ],
      [
        "Practical takeaway",
        "Review the destination network carefully before signing. For a common example, the Ethereum-to-Base bridge route lets you inspect the current route rather than relying on a static estimate."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "how-to-bridge-weth",
    "title": "How to Bridge WETH Between Networks",
    "description": "Understand WETH representations and what to verify before a cross-chain transfer.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "WETH is a tokenized representation of ETH used by many smart contracts. Because WETH is an ERC-20-style token on Ethereum, it should not be treated as identical to native ETH when selecting a route."
      ],
      [
        "Review the live route",
        "Confirm the exact WETH asset on the source network and the asset expected on the destination. A route can involve an unwrap, swap, or bridge depending on the available infrastructure."
      ],
      [
        "Complete the transfer carefully",
        "Check the quoted output and transaction sequence before approving. If an unwrap or approval is required, make sure you understand why the step appears and which contract you are interacting with."
      ],
      [
        "Practical takeaway",
        "Keep a record of the source transaction and verify the destination balance on the correct network. StarBridge can be used to review supported cross-chain routes for assets such as WETH."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "how-to-bridge-wbtc",
    "title": "How to Bridge WBTC Between Networks",
    "description": "A guide to checking WBTC routes, representations and destination details.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "WBTC is a tokenized Bitcoin representation used on compatible smart-contract networks. Its contract address and liquidity can differ by network, so the ticker alone is not enough when selecting a route."
      ],
      [
        "Review the live route",
        "Before bridging, confirm the exact source token and destination token. Check whether the route delivers the same representation or uses a swap into another supported asset."
      ],
      [
        "Complete the transfer carefully",
        "Liquidity is especially important for larger transfers because the amount received can vary with available markets. Review the quote, minimums and estimated output immediately before signing."
      ],
      [
        "Practical takeaway",
        "Use a wallet you control and verify the destination network. Never paste a token contract address from an untrusted source; use the route and established network information to confirm what you are receiving."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "how-to-bridge-dai",
    "title": "How to Bridge DAI Between Networks",
    "description": "How to review DAI cross-chain routes and avoid common mistakes.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "DAI can be represented on multiple smart-contract networks, and a cross-chain route must account for the exact token and network. Start by checking where your DAI balance currently exists."
      ],
      [
        "Review the live route",
        "Compare direct and routed options by looking at destination amount, fees, liquidity and transaction count. A cheaper-looking route can be less attractive if it produces a materially lower output."
      ],
      [
        "Complete the transfer carefully",
        "Approvals and gas are part of the process for many ERC-20 transfers. Read the wallet prompt and confirm that the spender and amount correspond to the action you intended."
      ],
      [
        "Practical takeaway",
        "After completion, verify the destination token and network. If a route is unavailable, do not force an unsupported transfer; choose a currently supported path instead."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "how-to-choose-a-crypto-bridge",
    "title": "How to Choose a Crypto Bridge",
    "description": "The main factors to compare before choosing a cross-chain route.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "A good bridge choice starts with compatibility: source network, destination network and exact asset. If a route does not support the asset you actually hold, headline fees or speed do not matter."
      ],
      [
        "Review the live route",
        "Compare the amount received, total transaction costs, route complexity, provider availability and expected execution time. Treat quoted speed as an estimate because block times and network congestion can change."
      ],
      [
        "Complete the transfer carefully",
        "Security should be considered at the route level. Understand which contracts and providers are involved, avoid approving unexpected transactions, and use established wallet and network information."
      ],
      [
        "Practical takeaway",
        "Use a live quote immediately before signing. StarBridge brings supported cross-chain routes into one interface so you can compare what is currently available rather than relying on a static bridge list."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/cross-chain-bridge"
    ]
  },
  {
    "slug": "how-to-check-bridge-fees",
    "title": "How to Check Crypto Bridge Fees",
    "description": "How network gas, route fees and quoted output affect the amount you receive.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Bridge cost is not always one fee. Depending on the route, you may see source-chain gas, bridge or routing fees, swap costs, price impact, and destination-side costs."
      ],
      [
        "Review the live route",
        "The most useful comparison is the final amount you expect to receive relative to the amount you send. A route with a lower visible fee can still produce less output because of liquidity or exchange-rate differences."
      ],
      [
        "Complete the transfer carefully",
        "Network congestion can change gas costs quickly. Review the quote when you are ready to transact, and avoid treating a fee displayed several minutes earlier as guaranteed."
      ],
      [
        "Practical takeaway",
        "Before signing, read the full route summary and wallet transaction. StarBridge displays available routes through its routing infrastructure so users can review the current trade-offs."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/cross-chain-bridge"
    ]
  },
  {
    "slug": "crypto-bridge-fees-explained",
    "title": "Crypto Bridge Fees Explained",
    "description": "A clear explanation of gas, route fees, liquidity and other costs that can affect cross-chain transfers.",
    "category": "education",
    "sections": [
      [
        "What affects the cost",
        "Crypto bridge fees are the combined costs of moving value from one network to another. Some costs are explicit, while others appear through exchange rates, liquidity or price impact."
      ],
      [
        "Why the quote changes",
        "Gas is paid to blockchain validators or sequencers for transactions on a network. A route may also include fees charged by a bridge, liquidity provider, or swap venue."
      ],
      [
        "What to compare",
        "Liquidity affects the output you receive. When a route has limited liquidity, a larger transfer can move the market price and increase the effective cost even when the advertised fee is small."
      ],
      [
        "Practical takeaway",
        "The best practice is to compare final output and transaction requirements, not just one fee line. Always review a live quote and keep enough native gas asset to complete the source-side transaction."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/cross-chain-bridge"
    ]
  },
  {
    "slug": "crypto-bridge-vs-exchange",
    "title": "Crypto Bridge vs Crypto Exchange",
    "description": "Understand the difference between moving an asset across networks and trading one asset for another.",
    "category": "comparisons",
    "sections": [
      [
        "The key difference",
        "A bridge is primarily about moving an asset or value between blockchain networks. An exchange is primarily about trading one asset for another, although modern routing systems can combine both actions."
      ],
      [
        "Where each approach fits",
        "If you already hold USDC on Ethereum and need USDC on Base, a cross-chain route is the relevant problem. If you hold ETH and want USDC on the same network, a swap is usually the more direct action."
      ],
      [
        "What to compare",
        "Some cross-chain routes include swaps because the most efficient bridge path may require an intermediate asset. That does not make every bridge route equivalent to using a centralized exchange."
      ],
      [
        "Bottom line",
        "Choose based on the task you actually need to complete: network transfer, asset conversion, or both. Review the live route to see which steps are included."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "bridge-vs-swap",
    "title": "Bridge vs Swap: What's the Difference?",
    "description": "Learn when a bridge, a swap, or a combined route is the right tool for a crypto transaction.",
    "category": "comparisons",
    "sections": [
      [
        "The key difference",
        "A swap changes one asset into another, usually on the same blockchain. A bridge moves an asset or value between blockchain networks. The two concepts answer different questions."
      ],
      [
        "Where each approach fits",
        "If the network stays the same and you need a different token, look for a swap. If the token stays the same but the network changes, look for a bridge. Some real transactions require both."
      ],
      [
        "What to compare",
        "Cross-chain aggregators can combine bridging and swapping into one route. The route may therefore show multiple steps even when the user starts with one token and expects another token on the destination chain."
      ],
      [
        "Bottom line",
        "Always check both dimensions before signing: which asset you are sending and which network you will receive it on. This avoids the common mistake of confirming a correct token on the wrong chain."
      ]
    ],
    "related": [
      "/cross-chain-bridge",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "native-vs-wrapped-tokens",
    "title": "Native vs Wrapped Tokens Across Chains",
    "description": "Why native and wrapped versions of the same asset can behave differently across networks.",
    "category": "education",
    "sections": [
      [
        "The key difference",
        "A native asset is built into a blockchain's base protocol and is often used to pay transaction fees. A wrapped token is a tokenized representation designed to make an asset usable within smart-contract systems."
      ],
      [
        "Where each approach fits",
        "ETH on Ethereum is native ETH, while WETH is a token contract representing ETH. On another network, an ETH representation can have a different contract and liquidity profile."
      ],
      [
        "What to compare",
        "Because representations differ, wallets and applications should identify assets by network and contract, not only by ticker. A familiar symbol can refer to a different token on another chain."
      ],
      [
        "Bottom line",
        "When bridging, verify exactly what the destination route delivers and whether your intended application supports it. If you need native gas, make sure the destination asset is actually usable for that purpose."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "what-is-cross-chain-liquidity",
    "title": "What Is Cross-Chain Liquidity?",
    "description": "How liquidity influences route availability, price impact and the amount received in cross-chain transfers.",
    "category": "education",
    "sections": [
      [
        "What affects the cost",
        "Cross-chain liquidity is the capital available to facilitate movement or conversion between assets and networks. Without enough liquidity, a route may have poor pricing, large slippage, or no executable path."
      ],
      [
        "Why the quote changes",
        "Liquidity can come from pools, market makers, bridge-specific liquidity, or other routing providers. Aggregators can compare several sources to find a route that fits the requested transaction."
      ],
      [
        "What to compare",
        "Large transactions are more sensitive to liquidity because they can consume a larger share of available depth. The quoted output should therefore be evaluated relative to the transfer size."
      ],
      [
        "Practical takeaway",
        "Liquidity changes continuously. A route that works well today may be less competitive later, which is why live route information matters more than a static list of bridge capabilities."
      ]
    ],
    "related": [
      "/cross-chain-bridge",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "what-is-a-cross-chain-transfer",
    "title": "What Is a Cross-Chain Transfer?",
    "description": "A beginner-friendly explanation of moving crypto value from one blockchain network to another.",
    "category": "education",
    "sections": [
      [
        "The short answer",
        "A cross-chain transfer moves an asset or its value from a source blockchain to a destination blockchain. The networks maintain separate state, so an intermediary mechanism is required to coordinate the transfer."
      ],
      [
        "How it works",
        "The route can use a bridge, liquidity provider, swap, or several services. What the user sees is usually a sequence of transactions that results in an asset arriving on the destination network."
      ],
      [
        "Why it matters",
        "Fees and timing depend on both networks and the route. Confirmations, gas prices, liquidity and provider availability can all affect execution."
      ],
      [
        "Practical takeaway",
        "Before sending, confirm the source and destination networks, exact token, amount, recipient and expected output. These checks prevent many avoidable cross-chain errors."
      ]
    ],
    "related": [
      "/cross-chain-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "what-is-a-blockchain-bridge",
    "title": "What Is a Blockchain Bridge?",
    "description": "An introduction to blockchain bridges, interoperability and cross-network asset movement.",
    "category": "education",
    "sections": [
      [
        "The short answer",
        "A blockchain bridge is infrastructure that helps users or applications move assets or information between separate blockchain environments. Asset bridges commonly coordinate deposits on one network with delivery or representation on another."
      ],
      [
        "How it works",
        "Different bridge designs use different trust and security assumptions. Some rely on smart contracts and external validation, while others use liquidity or messaging systems with their own mechanisms."
      ],
      [
        "Why it matters",
        "For users, the practical questions are simpler: does the bridge support the networks and asset, what will I receive, what will it cost, and what transactions must I sign?"
      ],
      [
        "Practical takeaway",
        "Never assume that two networks are interchangeable because they share a token ticker. Verify the destination asset and network using the route details before confirming a transaction."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/cross-chain-bridge"
    ]
  },
  {
    "slug": "what-is-a-token-bridge",
    "title": "What Is a Token Bridge?",
    "description": "Learn how token bridges help move compatible assets between blockchain networks.",
    "category": "education",
    "sections": [
      [
        "The short answer",
        "A token bridge connects representations of an asset across networks. Depending on the design, the source asset can be locked, burned, transferred into liquidity, or otherwise accounted for while a destination representation becomes available."
      ],
      [
        "How it works",
        "The user experience can look like a single transfer even when the infrastructure performs several operations. The route determines which contracts, liquidity sources and transactions are involved."
      ],
      [
        "Why it matters",
        "Compatibility is essential. The token, source network and destination network must all be supported, and the destination application must recognize the resulting asset."
      ],
      [
        "Practical takeaway",
        "Use live route information and verify the destination contract or token representation when required. A bridge is not a guarantee that every token can move to every chain."
      ]
    ],
    "related": [
      "/token-bridge",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "how-long-does-a-crypto-bridge-take",
    "title": "How Long Does a Crypto Bridge Take?",
    "description": "What determines cross-chain transfer time and why bridge estimates can change.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Bridge time depends on the source chain, destination chain, route design, required confirmations, liquidity and provider processing. There is no universal bridge time for every asset and network pair."
      ],
      [
        "Review the live route",
        "Fast routes can complete quickly when networks are healthy and liquidity is available. Congestion, slow confirmations, provider delays, or additional swap steps can increase the total time."
      ],
      [
        "Complete the transfer carefully",
        "Treat an estimated time as a live estimate rather than a promise. The blockchain transaction status is the best way to tell whether the source transaction has been accepted."
      ],
      [
        "Practical takeaway",
        "If a transfer is pending, avoid submitting a duplicate transaction. Check the transaction hash, route status and destination network before taking further action."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "are-crypto-bridges-safe",
    "title": "Are Crypto Bridges Safe?",
    "description": "A practical framework for thinking about bridge risk, wallet approvals and cross-chain security.",
    "category": "guides",
    "sections": [
      [
        "What the risk means",
        "No bridge should be treated as risk-free. Cross-chain infrastructure can introduce smart-contract, liquidity, provider, oracle, messaging and operational risks in addition to the normal risks of using a blockchain wallet."
      ],
      [
        "Checks before signing",
        "Users can reduce avoidable risk by checking the domain, verifying the destination network and token, reviewing contract approvals, and refusing transactions that do not match the intended action."
      ],
      [
        "Wallet safety",
        "Route aggregation can improve convenience, but it can also involve multiple providers. Review the route details and understand which steps are being requested by your wallet."
      ],
      [
        "Practical takeaway",
        "StarBridge is a non-custodial interface; users retain control of their wallet and approve transactions themselves. The security and availability of the underlying route remain dependent on the networks and providers involved."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/cross-chain-bridge"
    ]
  },
  {
    "slug": "crypto-bridge-security-checklist",
    "title": "Crypto Bridge Security Checklist",
    "description": "A concise checklist for reducing mistakes before signing a cross-chain transaction.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Confirm the official site and wallet connection before starting. Phishing pages often imitate bridge interfaces, so do not follow bridge links from unsolicited messages."
      ],
      [
        "Review the live route",
        "Check source chain, destination chain, token, amount and recipient. Then review the estimated output, fees, transaction count and any approval request."
      ],
      [
        "Complete the transfer carefully",
        "Read wallet prompts carefully. An approval should correspond to the token and action you selected, and an unexpected contract interaction is a reason to stop and investigate."
      ],
      [
        "Practical takeaway",
        "After submission, save the transaction hash and verify the destination network. Do not share seed phrases or private keys with any bridge, support agent or website."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/transactions"
    ]
  },
  {
    "slug": "what-is-a-non-custodial-bridge",
    "title": "What Is a Non-Custodial Crypto Bridge?",
    "description": "Understand what non-custodial means and how wallet-controlled cross-chain transactions work.",
    "category": "education",
    "sections": [
      [
        "The short answer",
        "Non-custodial means the user retains control of the wallet and private keys rather than depositing funds into an account controlled by the service. The interface helps coordinate transactions but does not take ownership of the user's wallet."
      ],
      [
        "How it works",
        "In a non-custodial route, the wallet normally signs blockchain transactions directly. The service can present quotes and transaction data, but the user decides whether to approve each action."
      ],
      [
        "Why it matters",
        "Non-custodial does not mean risk-free. Smart contracts, bridge providers, networks, liquidity and user mistakes can still create risk."
      ],
      [
        "Practical takeaway",
        "Before signing, verify the route and wallet prompt. StarBridge is designed as a non-custodial interface, so users should maintain normal wallet security practices at every step."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/about"
    ]
  },
  {
    "slug": "how-to-bridge-from-ethereum-to-base",
    "title": "How to Bridge from Ethereum to Base",
    "description": "A practical guide to moving supported assets from Ethereum to Base.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Ethereum and Base are separate networks, so moving an asset between them requires a supported cross-chain route. Start by selecting Ethereum as the source and Base as the destination."
      ],
      [
        "Review the live route",
        "Choose the exact token and amount, then review the estimated Base output and source transaction cost. For ERC-20 assets, the wallet may also require an approval transaction."
      ],
      [
        "Complete the transfer carefully",
        "Base uses ETH as its native gas asset, so consider what you will need after arriving on the destination network. The route should make clear what asset is expected to arrive."
      ],
      [
        "Practical takeaway",
        "Use the live Ethereum-to-Base bridge route immediately before signing because prices, fees and provider availability can change."
      ]
    ],
    "related": [
      "/bridge/ethereum-to-base",
      "/base-bridge"
    ]
  },
  {
    "slug": "how-to-bridge-from-ethereum-to-arbitrum",
    "title": "How to Bridge from Ethereum to Arbitrum",
    "description": "How to review a supported Ethereum-to-Arbitrum cross-chain route.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Ethereum and Arbitrum are separate networks with different transaction environments. To move a supported asset, select Ethereum as the source and Arbitrum as the destination."
      ],
      [
        "Review the live route",
        "Review the token, amount, estimated received amount and fees. If the token requires approval, confirm the approval is associated with the transaction you intend to make."
      ],
      [
        "Complete the transfer carefully",
        "Arbitrum uses ETH for gas, so consider whether you will have enough destination gas for your next transaction. Do not confuse the destination chain with the token's network representation."
      ],
      [
        "Practical takeaway",
        "Use the live route rather than a fixed fee estimate. Availability and pricing depend on current liquidity and network conditions."
      ]
    ],
    "related": [
      "/bridge/ethereum-to-arbitrum",
      "/arbitrum-bridge"
    ]
  },
  {
    "slug": "how-to-bridge-from-base-to-ethereum",
    "title": "How to Bridge from Base to Ethereum",
    "description": "What to check when moving supported assets from Base back to Ethereum.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Base and Ethereum maintain separate balances, so a Base asset cannot simply be sent to an Ethereum address without using a compatible route. Select Base as the source and Ethereum as the destination."
      ],
      [
        "Review the live route",
        "Review the destination asset and expected output before signing. Ethereum gas can be materially different from Base gas, so check the route's costs and consider the destination transaction environment."
      ],
      [
        "Complete the transfer carefully",
        "Some routes may use liquidity or a swap rather than a direct canonical bridge. The live quote shows the path currently available."
      ],
      [
        "Practical takeaway",
        "Confirm the recipient address and destination network, then keep the transaction hash for reference. Do not repeat the transaction if the route is still processing."
      ]
    ],
    "related": [
      "/bridge/base-to-ethereum",
      "/base-bridge"
    ]
  },
  {
    "slug": "how-to-bridge-from-arbitrum-to-ethereum",
    "title": "How to Bridge from Arbitrum to Ethereum",
    "description": "A practical guide to reviewing an Arbitrum-to-Ethereum transfer.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "To move a supported asset from Arbitrum to Ethereum, select Arbitrum as the source and Ethereum as the destination. The route will determine how the asset is transferred or exchanged."
      ],
      [
        "Review the live route",
        "Check the destination representation, estimated output and transaction requirements. A route may require approvals or additional steps depending on the token."
      ],
      [
        "Complete the transfer carefully",
        "Ethereum destination transactions can have different cost and timing characteristics from Arbitrum. Review the current quote instead of assuming that a previous transfer will have the same cost."
      ],
      [
        "Practical takeaway",
        "Verify the destination network and asset before signing. Keep enough source gas for every transaction the route requires."
      ]
    ],
    "related": [
      "/bridge/arbitrum-to-ethereum",
      "/arbitrum-bridge"
    ]
  },
  {
    "slug": "how-to-bridge-from-ethereum-to-polygon",
    "title": "How to Bridge from Ethereum to Polygon",
    "description": "What to review when moving supported assets from Ethereum to Polygon.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Ethereum and Polygon are distinct networks, so select Ethereum as the source and Polygon as the destination when starting the route."
      ],
      [
        "Review the live route",
        "Confirm the exact token and the destination representation. Review estimated output, fees and whether the route includes a swap or multiple providers."
      ],
      [
        "Complete the transfer carefully",
        "Polygon has its own transaction environment and supported gas assets. Make sure the asset you receive is useful for the activity you intend to perform on Polygon."
      ],
      [
        "Practical takeaway",
        "Because route availability can change, use the live quote immediately before signing. Verify the destination network in your wallet after the transfer completes."
      ]
    ],
    "related": [
      "/bridge/ethereum-to-polygon",
      "/chains"
    ]
  },
  {
    "slug": "how-to-bridge-from-ethereum-to-optimism",
    "title": "How to Bridge from Ethereum to Optimism",
    "description": "A practical guide to supported Ethereum-to-Optimism cross-chain routes.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Select Ethereum as the source and Optimism as the destination, then choose a supported token. The route should identify the asset expected on Optimism."
      ],
      [
        "Review the live route",
        "Review gas, quoted output and transaction steps. An ERC-20 transfer may require an approval before the source transaction can be completed."
      ],
      [
        "Complete the transfer carefully",
        "Optimism has its own network state and gas environment, so the destination balance must be checked on Optimism rather than Ethereum."
      ],
      [
        "Practical takeaway",
        "Do not rely on a static transfer time or fee. Use the live route and confirm the destination chain before signing."
      ]
    ],
    "related": [
      "/bridge/ethereum-to-optimism",
      "/cross-chain-bridge"
    ]
  },
  {
    "slug": "how-to-bridge-from-ethereum-to-avalanche",
    "title": "How to Bridge from Ethereum to Avalanche",
    "description": "How to review a supported Ethereum-to-Avalanche asset transfer.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Ethereum and Avalanche are separate networks with different asset and gas environments. Choose Ethereum as the source and Avalanche as the destination."
      ],
      [
        "Review the live route",
        "Check the token representation and destination network before approving. The same ticker can have different contracts and liquidity across networks."
      ],
      [
        "Complete the transfer carefully",
        "Compare the estimated output and fees, including any swap embedded in the route. Large transfers can be more sensitive to available liquidity."
      ],
      [
        "Practical takeaway",
        "Use a live quote, verify the destination chain, and keep the transaction hash. If a route is unavailable, choose a currently supported alternative rather than sending directly."
      ]
    ],
    "related": [
      "/bridge/ethereum-to-avalanche",
      "/chains"
    ]
  },
  {
    "slug": "how-to-bridge-from-ethereum-to-bnb-chain",
    "title": "How to Bridge from Ethereum to BNB Chain",
    "description": "A guide to reviewing supported Ethereum-to-BNB Chain routes.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Ethereum and BNB Chain are separate networks. Start by selecting Ethereum as the source and BNB Chain as the destination, then choose a supported token."
      ],
      [
        "Review the live route",
        "Review the destination token, estimated output, fees and required approvals. Pay attention to the network label because the same token symbol may exist in multiple forms."
      ],
      [
        "Complete the transfer carefully",
        "Consider destination gas needs after the transfer. The route should show what asset will arrive and the network on which it will arrive."
      ],
      [
        "Practical takeaway",
        "Execute only after confirming the live quote. Network conditions and liquidity can change, so historical fee estimates are not guaranteed."
      ]
    ],
    "related": [
      "/bridge/ethereum-to-bnb-chain",
      "/chains"
    ]
  },
  {
    "slug": "what-is-a-bridge-route",
    "title": "What Is a Bridge Route?",
    "description": "Understand how a cross-chain route is assembled and why two routes can produce different results.",
    "category": "education",
    "sections": [
      [
        "The short answer",
        "A bridge route is the sequence of providers and blockchain actions used to move an asset from a source state to a destination state. It can be direct or contain several steps."
      ],
      [
        "How it works",
        "Two routes for the same request can differ in liquidity source, bridge mechanism, swap venue, transaction count, fee structure and expected output."
      ],
      [
        "Why it matters",
        "Route aggregators evaluate available paths at the time of the request. A route that wins on price at one moment can change as liquidity and gas conditions move."
      ],
      [
        "Practical takeaway",
        "Always compare the complete route, not just its first transaction. The final output and all required wallet actions are what determine the practical result."
      ]
    ],
    "related": [
      "/cross-chain-bridge",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "what-is-bridge-aggregation",
    "title": "What Is Bridge Aggregation?",
    "description": "How aggregators compare multiple cross-chain paths to help users find supported routes.",
    "category": "education",
    "sections": [
      [
        "The short answer",
        "Bridge aggregation means evaluating multiple available cross-chain providers and routes for a user's requested source, destination, asset and amount. The goal is to surface viable paths without requiring users to research every provider manually."
      ],
      [
        "How it works",
        "An aggregator can consider price, liquidity, fees, execution steps and provider availability. The best route can change as market and network conditions change."
      ],
      [
        "Why it matters",
        "Aggregation does not remove the underlying risks of the providers or smart contracts used in the route. Users still need to review wallet transactions and destination details."
      ],
      [
        "Practical takeaway",
        "StarBridge uses LI.FI routing infrastructure to surface supported cross-chain paths. The live result is the best source for current route availability and pricing."
      ]
    ],
    "related": [
      "/cross-chain-bridge",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "why-bridge-routes-change",
    "title": "Why Crypto Bridge Routes Change",
    "description": "Why the best cross-chain route can change from one moment to the next.",
    "category": "education",
    "sections": [
      [
        "The short answer",
        "Cross-chain routes depend on live variables such as gas prices, liquidity, token prices, bridge capacity and provider availability. Any of these can change the ranking of available paths."
      ],
      [
        "How it works",
        "A route can disappear when liquidity falls below a required level or when a provider temporarily stops supporting a network. Another route may become cheaper when market depth or gas conditions improve."
      ],
      [
        "Why it matters",
        "Because quotes are dynamic, users should not treat a route shown earlier as guaranteed. Re-request the quote when you are ready to sign."
      ],
      [
        "Practical takeaway",
        "Review the final output, fees and transaction sequence each time. This is especially important for larger transfers where small pricing differences can become meaningful."
      ]
    ],
    "related": [
      "/cross-chain-bridge",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "what-is-bridge-slippage",
    "title": "What Is Slippage in a Crypto Bridge Route?",
    "description": "How price movement and liquidity can affect the final amount received in a cross-chain route.",
    "category": "education",
    "sections": [
      [
        "What affects the cost",
        "Slippage is the difference between an expected trade price and the price at which the transaction actually executes. It matters when a cross-chain route includes a swap or uses liquidity pools."
      ],
      [
        "Why the quote changes",
        "A direct bridge may have different pricing dynamics from a route that swaps into an intermediate asset. If the route includes a market trade, liquidity and transaction size can influence the result."
      ],
      [
        "What to compare",
        "Quoted output is an estimate until the relevant transactions execute. Larger trades can have greater price impact when available liquidity is limited."
      ],
      [
        "Practical takeaway",
        "Review the expected received amount and any slippage or price-impact information shown by the route. Do not judge a route from the bridge fee alone."
      ]
    ],
    "related": [
      "/cross-chain-bridge",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "bridge-minimums-and-limits",
    "title": "Crypto Bridge Minimums and Limits Explained",
    "description": "Why some routes have minimum amounts, maximums or liquidity constraints.",
    "category": "guides",
    "sections": [
      [
        "The short answer",
        "Routes can impose minimum or maximum amounts because of liquidity, provider requirements, operational limits, or the economics of small transactions."
      ],
      [
        "How it works",
        "A minimum may prevent a transfer from being uneconomical after gas and fees. A maximum can protect liquidity or reflect a provider's current capacity."
      ],
      [
        "Why it matters",
        "These limits can change by token and network pair. Always check the live quote rather than assuming a route supports every amount."
      ],
      [
        "Practical takeaway",
        "If a route rejects your amount, try a supported route or a different amount only when it still fits your needs. Never split transactions blindly because each transaction can add another layer of cost."
      ]
    ],
    "related": [
      "/cross-chain-bridge",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "what-is-gas-on-a-bridge",
    "title": "What Is Gas When Bridging Crypto?",
    "description": "Understand blockchain gas and why the source network's fee matters in cross-chain transfers.",
    "category": "education",
    "sections": [
      [
        "What affects the cost",
        "Gas is the resource used to pay for computation and transactions on a blockchain. In a bridge transaction, the source-chain wallet generally needs the network's native gas asset to submit the required transaction."
      ],
      [
        "Why the quote changes",
        "Token balances do not necessarily cover gas. For example, holding a stablecoin on a network does not mean you can pay the network fee unless you also have the required native asset."
      ],
      [
        "What to compare",
        "Gas prices can move with network demand, which changes the cost of a route. Some destination costs may also appear depending on the bridge design."
      ],
      [
        "Practical takeaway",
        "Before signing, confirm the wallet has enough native gas for the route's required source transactions. Review the quote because the exact number of transactions can vary."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/chains"
    ]
  },
  {
    "slug": "why-you-need-gas-to-bridge",
    "title": "Why You Need Gas to Bridge Crypto",
    "description": "Why a token balance alone may not be enough to complete a cross-chain transfer.",
    "category": "guides",
    "sections": [
      [
        "What affects the cost",
        "Most blockchain transactions require a native network asset to pay gas. If you hold only the token you want to bridge, the wallet may still be unable to submit the transaction."
      ],
      [
        "Why the quote changes",
        "ERC-20 transfers can also require an approval transaction before the bridge can spend the selected token. That approval itself can require gas."
      ],
      [
        "What to compare",
        "The exact requirements depend on the network and route. A live quote and wallet prompt will show the transactions that need to be signed."
      ],
      [
        "Practical takeaway",
        "Keep a reasonable native gas balance on the source network and avoid sending it away before completing the bridge. After arrival, check the destination gas requirements for your next transaction."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "how-to-read-a-bridge-quote",
    "title": "How to Read a Crypto Bridge Quote",
    "description": "A simple guide to understanding amount received, fees, route steps and transaction requirements.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "A bridge quote is a snapshot of the route available for a particular asset, amount, source network and destination network. It is not a permanent promise because blockchain conditions can change."
      ],
      [
        "Review the live route",
        "Start with the estimated amount received. Then review fees, exchange-rate effects, price impact, transaction count and estimated time where available."
      ],
      [
        "Complete the transfer carefully",
        "Check the route's asset labels and network names carefully. If a swap or intermediate token appears, make sure the final destination asset still matches your goal."
      ],
      [
        "Practical takeaway",
        "Only sign after the quote matches your intended transfer. If the quote changes materially, stop and review the new route rather than approving automatically."
      ]
    ],
    "related": [
      "/cross-chain-bridge",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "how-to-verify-a-bridge-transaction",
    "title": "How to Verify a Crypto Bridge Transaction",
    "description": "How to check wallet activity, transaction hashes and destination balances after bridging.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "After submitting a bridge transaction, save the transaction hash from your wallet. The hash lets you verify the source transaction independently on the relevant blockchain explorer."
      ],
      [
        "Review the live route",
        "Check whether the source transaction is pending, confirmed, or failed. A confirmed source transaction does not always mean the destination asset has already arrived if the route has additional steps."
      ],
      [
        "Complete the transfer carefully",
        "Verify the destination network and token before deciding that funds are missing. Wallets can hide tokens until the correct network or asset is selected."
      ],
      [
        "Practical takeaway",
        "If the route is still processing, use the provider's status information and do not submit a duplicate transfer. If a transaction failed, investigate the failure before trying again."
      ]
    ],
    "related": [
      "/transactions",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "bridge-wallet-checklist",
    "title": "Crypto Bridge Wallet Checklist",
    "description": "The wallet checks worth completing before and after a cross-chain transfer.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Before bridging, confirm you are connected to the intended wallet account and that you can access it independently. Never give a bridge your seed phrase or private key."
      ],
      [
        "Review the live route",
        "Confirm the source token balance plus enough native gas. Then verify the destination address and network in the route."
      ],
      [
        "Complete the transfer carefully",
        "Read every wallet prompt. Approve only the token and contract interaction required by the selected route, and stop if a prompt differs from what the interface described."
      ],
      [
        "Practical takeaway",
        "After completion, switch to the destination network and verify the received asset. Keep the source transaction hash for your records."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/transactions"
    ]
  },
  {
    "slug": "can-you-bridge-any-crypto",
    "title": "Can You Bridge Any Cryptocurrency?",
    "description": "Why cross-chain support depends on tokens, networks, liquidity and available infrastructure.",
    "category": "education",
    "sections": [
      [
        "The short answer",
        "Not every token can be bridged to every network. A route requires compatible infrastructure, sufficient liquidity, and a destination representation that the provider supports."
      ],
      [
        "How it works",
        "A token can also be technically available but uneconomical for a small transfer because fees exceed the value being moved. Support and liquidity are separate questions."
      ],
      [
        "Why it matters",
        "Token symbols are not enough to establish compatibility. The exact network and token contract or representation matter."
      ],
      [
        "Practical takeaway",
        "Use the live StarBridge route to see what is currently supported. If no route is returned, do not send the asset directly to another network and assume it will appear there."
      ]
    ],
    "related": [
      "/crypto-bridge",
      "/chains"
    ]
  },
  {
    "slug": "why-a-bridge-route-is-unavailable",
    "title": "Why Is My Crypto Bridge Route Unavailable?",
    "description": "Common reasons a cross-chain route may disappear or fail to quote.",
    "category": "guides",
    "sections": [
      [
        "The short answer",
        "A route can be unavailable because the token is unsupported, liquidity is insufficient, a provider is offline, the network is temporarily restricted, or the requested amount falls outside current limits."
      ],
      [
        "How it works",
        "Network conditions can also affect availability. Congestion, gas spikes or temporary maintenance can change which paths are practical."
      ],
      [
        "Why it matters",
        "Try checking the exact source and destination networks and token. If the route is still unavailable, a different supported provider or asset may be required."
      ],
      [
        "Practical takeaway",
        "Do not bypass the interface by sending funds to an unfamiliar contract. Wait for a supported route or verify an alternative path carefully."
      ]
    ],
    "related": [
      "/cross-chain-bridge",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "bridge-failed-transaction",
    "title": "What to Do When a Crypto Bridge Transaction Fails",
    "description": "A practical checklist for investigating failed or reverted cross-chain transactions.",
    "category": "guides",
    "sections": [
      [
        "The short answer",
        "First determine which transaction failed. A route can contain an approval, source transfer, swap, or destination step, and the remedy depends on the failed action."
      ],
      [
        "How it works",
        "Open the transaction hash on the relevant blockchain explorer and inspect the status and error when available. Confirm that the failure occurred on the expected network."
      ],
      [
        "Why it matters",
        "Do not immediately retry a failed route without understanding the error. Check token allowance, gas balance, route availability and current quote conditions."
      ],
      [
        "Practical takeaway",
        "If the source transaction failed before funds left the wallet, the asset should normally remain under your control, but always verify the wallet balance and transaction state before trying again."
      ]
    ],
    "related": [
      "/transactions",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "bridge-pending-transaction",
    "title": "Crypto Bridge Transaction Pending: What It Means",
    "description": "What a pending bridge transaction means and how to avoid duplicate transfers.",
    "category": "guides",
    "sections": [
      [
        "The short answer",
        "Pending means the relevant blockchain transaction has not yet reached its final confirmed state or the route still has additional processing steps. It does not automatically mean the funds are lost."
      ],
      [
        "How it works",
        "Check the source transaction hash and network first. If the transaction is still pending, wait for the network rather than submitting the same transfer again."
      ],
      [
        "Why it matters",
        "Once the source transaction confirms, a cross-chain provider may still need to complete destination-side operations. The route status can provide more context than the wallet balance alone."
      ],
      [
        "Practical takeaway",
        "Keep the original transaction hash and monitor the route. If the transaction fails, investigate the specific failure before taking another action."
      ]
    ],
    "related": [
      "/transactions",
      "/crypto-bridge"
    ]
  },
  {
    "slug": "bridge-ethereum-base-vs-arbitrum",
    "title": "Ethereum to Base vs Ethereum to Arbitrum Bridge",
    "description": "Compare the practical considerations when moving supported assets from Ethereum to Base or Arbitrum.",
    "category": "comparisons",
    "sections": [
      [
        "The key difference",
        "Base and Arbitrum are both Ethereum-compatible scaling networks, but they are separate destinations with different liquidity, applications and route availability. The correct choice depends on where you need to use the asset."
      ],
      [
        "Where each approach fits",
        "Compare the live amount received, fees and estimated timing for the exact token and amount. There is no permanent winner because route conditions change."
      ],
      [
        "What to compare",
        "Consider destination needs as well as transfer cost. If your application, liquidity venue or wallet activity is on Base, a slightly different quote may still be the better practical route."
      ],
      [
        "Bottom line",
        "Use the live Ethereum-to-Base or Ethereum-to-Arbitrum route to make the decision with current information rather than an old fee comparison."
      ]
    ],
    "related": [
      "/bridge/ethereum-to-base",
      "/bridge/ethereum-to-arbitrum"
    ]
  },
  {
    "slug": "base-bridge-guide",
    "title": "Base Bridge Guide: What You Need to Know",
    "description": "An overview of bridging supported assets to and from Base.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Base is an Ethereum-compatible network with its own balances and transaction environment. Assets held on Ethereum are not automatically available on Base."
      ],
      [
        "Review the live route",
        "When moving to Base, confirm the destination asset and make sure you understand what you will need for subsequent transactions. The route should show the expected destination network."
      ],
      [
        "Complete the transfer carefully",
        "Compare current quotes and liquidity rather than assuming a canonical bridge is always the cheapest or fastest option for a particular asset and amount."
      ],
      [
        "Practical takeaway",
        "StarBridge's Base bridge page provides a direct starting point for reviewing supported routes involving Base."
      ]
    ],
    "related": [
      "/base-bridge",
      "/bridge/ethereum-to-base"
    ]
  },
  {
    "slug": "arbitrum-bridge-guide",
    "title": "Arbitrum Bridge Guide: What You Need to Know",
    "description": "An overview of bridging supported assets to and from Arbitrum.",
    "category": "guides",
    "sections": [
      [
        "Start with the network and asset",
        "Arbitrum is an Ethereum-compatible scaling network with its own balances and applications. Moving an asset from Ethereum to Arbitrum requires a supported cross-chain route."
      ],
      [
        "Review the live route",
        "Check the exact destination token and gas requirements. The same symbol can represent different token contracts across networks."
      ],
      [
        "Complete the transfer carefully",
        "Current route pricing depends on liquidity, provider availability and network conditions. Compare the final output rather than relying on a single fee metric."
      ],
      [
        "Practical takeaway",
        "StarBridge's Arbitrum bridge page provides a starting point for reviewing currently supported routes involving Arbitrum."
      ]
    ],
    "related": [
      "/arbitrum-bridge",
      "/bridge/ethereum-to-arbitrum"
    ]
  },
  {
    "slug": "usdc-on-ethereum-vs-base",
    "title": "USDC on Ethereum vs Base",
    "description": "What changes when the same stablecoin is held on Ethereum compared with Base.",
    "category": "comparisons",
    "sections": [
      [
        "The key difference",
        "USDC on Ethereum and USDC on Base are balances on different networks. Even when the asset is issued by the same issuer, the wallet balance belongs to a specific chain."
      ],
      [
        "Where each approach fits",
        "Applications can support one network and not another, so moving USDC can be necessary before using a destination application. Confirm the supported network before bridging."
      ],
      [
        "What to compare",
        "Compare the live route's destination amount and fees. Base may offer different transaction economics from Ethereum, but the best route depends on current conditions."
      ],
      [
        "Bottom line",
        "Always select the correct network in your wallet and application. A USDC balance on Ethereum is not automatically spendable by a Base-only application."
      ]
    ],
    "related": [
      "/usdc-bridge",
      "/bridge/usdc/ethereum-to-base"
    ]
  },
  {
    "slug": "usdt-on-ethereum-vs-base",
    "title": "USDT on Ethereum vs Base",
    "description": "Understand the network-specific nature of USDT balances and cross-chain transfers.",
    "category": "comparisons",
    "sections": [
      [
        "The key difference",
        "USDT balances are network-specific. A USDT token on Ethereum and a USDT representation on another network can have different contracts and liquidity."
      ],
      [
        "Where each approach fits",
        "Before moving USDT, check the exact source and destination networks and the token representation offered by the route. The ticker alone is not enough."
      ],
      [
        "What to compare",
        "Compare the final amount received and transaction requirements. A route that includes a swap may have different pricing from a direct liquidity path."
      ],
      [
        "Bottom line",
        "Use the live StarBridge route and verify the destination network after completion. This reduces the risk of sending an asset to an unsupported network."
      ]
    ],
    "related": [
      "/bridge/usdt/ethereum-to-base",
      "/crypto-bridge"
    ]
  }
];
export function learnArticleBySlug(slug: string) { return LEARN_ARTICLES.find((article) => article.slug === slug); }
export function learnParams() { return LEARN_ARTICLES.map(({ slug }) => ({ slug })); }
