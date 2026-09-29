"use client";

import { useEffect } from "react";
import { useWidgetEvents, WidgetEvent } from "@lifi/widget";
import type { Route } from "@lifi/sdk";

const GOOGLE_ADS_WALLET_CONNECTED =
  "AW-10796225601/_uqSCLG2hYodEMGohZwo";

type GoogleAdsGtag = (
  command: "event",
  eventName: "conversion",
  params: {
    send_to: string;
  }
) => void;

export default function BridgeEvents() {
  const widgetEvents = useWidgetEvents();

  useEffect(() => {
    const onWalletConnected = () => {
      console.log("🔗 STARBRIDGE: Wallet connected");

      try {
        // Evita disparos duplicados na mesma aba/sessão.
        const alreadySent = sessionStorage.getItem(
          "sb_google_ads_wallet_connected_sent"
        );

        if (alreadySent === "1") {
          console.log(
            "ℹ️ STARBRIDGE: Wallet conversion already sent this session"
          );
          return;
        }

        const gtag = (
          window as Window & {
            gtag?: GoogleAdsGtag;
          }
        ).gtag;

        if (typeof gtag !== "function") {
          console.warn(
            "⚠️ STARBRIDGE: Google Ads gtag is not available yet"
          );
          return;
        }

        gtag("event", "conversion", {
          send_to: GOOGLE_ADS_WALLET_CONNECTED,
        });

        sessionStorage.setItem(
          "sb_google_ads_wallet_connected_sent",
          "1"
        );

        console.log(
          "✅ STARBRIDGE: Google Ads Wallet Connected conversion sent"
        );
      } catch (error) {
        console.error(
          "❌ STARBRIDGE: Google Ads conversion error:",
          error
        );
      }
    };

    const onRouteExecutionCompleted = async (route: Route) => {
      console.log("⭐ STARBRIDGE: Route completed!", route);

      try {
        console.log("📨 STARBRIDGE: Sending Telegram alert...");

        const response = await fetch("/api/telegram-alert", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "Swap / Bridge",
            fromChain: String(route.fromChainId ?? "Unknown"),
            toChain: String(route.toChainId ?? "Unknown"),
            token: route.fromToken?.symbol ?? "Unknown",
            amount: route.fromAmount ?? "Unknown",
            volumeUSD: route.fromAmountUSD ?? 0,
            txHash: "Completed successfully",
          }),
        });

        const data = await response.json();

        console.log(
          "📬 STARBRIDGE: Telegram response:",
          response.status,
          data
        );
      } catch (error) {
        console.error("❌ STARBRIDGE Telegram alert error:", error);
      }
    };

    console.log("🔔 STARBRIDGE: Widget event listeners active");

    widgetEvents.on(
      WidgetEvent.WalletConnected,
      onWalletConnected
    );

    widgetEvents.on(
      WidgetEvent.RouteExecutionCompleted,
      onRouteExecutionCompleted
    );

    return () => {
      widgetEvents.off(
        WidgetEvent.WalletConnected,
        onWalletConnected
      );

      widgetEvents.off(
        WidgetEvent.RouteExecutionCompleted,
        onRouteExecutionCompleted
      );
    };
  }, [widgetEvents]);

  return null;
}