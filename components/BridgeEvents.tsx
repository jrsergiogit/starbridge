"use client";

import { useEffect } from "react";
import { useWidgetEvents, WidgetEvent } from "@lifi/widget";
import type { Route } from "@lifi/sdk";

export default function BridgeEvents() {
  const widgetEvents = useWidgetEvents();

  useEffect(() => {
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

    console.log("🔔 STARBRIDGE: Telegram event listener active");

    widgetEvents.on(
      WidgetEvent.RouteExecutionCompleted,
      onRouteExecutionCompleted
    );

    return () => {
      widgetEvents.off(
        WidgetEvent.RouteExecutionCompleted,
        onRouteExecutionCompleted
      );
    };
  }, [widgetEvents]);

  return null;
}