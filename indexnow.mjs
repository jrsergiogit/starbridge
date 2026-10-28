
const HOST = "www.starbridge.finance";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

const KEY = process.env.INDEXNOW_KEY;

if (!KEY) {
  console.error("Defina INDEXNOW_KEY no PowerShell.");
  process.exit(1);
}

const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function main() {
  console.log("Lendo sitemap:", SITEMAP_URL);

  const sitemapResponse = await fetch(SITEMAP_URL);

  if (!sitemapResponse.ok) {
    throw new Error(`Sitemap HTTP ${sitemapResponse.status}`);
  }

  const xml = await sitemapResponse.text();

  // Extrai as URLs do sitemap XML.
  const urls = Array.from(
    xml.matchAll(/<loc>(.*?)<\/loc>/gi),
    (match) => match[1].trim()
  )
    .map((url) =>
      url
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
    )
    .filter((url) => {
      try {
        const parsed = new URL(url);
        return (
          parsed.protocol === "https:" &&
          parsed.hostname === HOST
        );
      } catch {
        return false;
      }
    });

  const uniqueUrls = [...new Set(urls)];

  if (uniqueUrls.length === 0) {
    throw new Error("Nenhuma URL encontrada no sitemap.");
  }

  console.log(`URLs únicas encontradas: ${uniqueUrls.length}`);

  const response = await fetch(
    "https://api.indexnow.org/indexnow",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: uniqueUrls.slice(0, 10000),
      }),
    }
  );

  console.log("Resposta IndexNow: HTTP", response.status);

  if (response.status === 200 || response.status === 202) {
    console.log("Solicitação aceita pelo IndexNow.");
  } else {
    console.error("Resposta:", await response.text());
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("Erro:", error.message);
  process.exitCode = 1;
});
