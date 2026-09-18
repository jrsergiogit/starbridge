import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Telegram environment variables are missing" },
        { status: 500 }
      );
    }

    const message = `
⭐ <b>StarBridge Operation Completed</b>

🔄 <b>Type:</b> ${body.type || "Swap / Bridge"}

📤 <b>From:</b> ${body.fromChain || "Unknown"}
📥 <b>To:</b> ${body.toChain || "Unknown"}

💰 <b>Token:</b> ${body.token || "Unknown"}
📊 <b>Amount:</b> ${body.amount || "Unknown"}

💵 <b>Volume:</b> ${
      body.volumeUSD
        ? `$${Number(body.volumeUSD).toFixed(2)}`
        : "Unknown"
    }



🕐 <b>Time:</b> ${new Date().toLocaleString("pt-BR", {
      dateStyle: "medium",
      timeStyle: "short",
    })}

🧾 <b>Transaction:</b> ${body.txHash || "Completed successfully"}
    `.trim();

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const error = await telegramResponse.text();

      console.error("Telegram error:", error);

      return NextResponse.json(
        {
          error: "Failed to send Telegram message",
          details: error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram alert error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

