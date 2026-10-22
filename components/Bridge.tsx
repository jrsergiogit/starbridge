"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { trackStarBridgeEvent } from "@/lib/analytics/tracker";

const LiFiWidget = dynamic(
  () => import("@lifi/widget").then((module) => module.LiFiWidget),
  { ssr: false }
);

export default function Bridge() {
  const [isCompact, setIsCompact] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    trackStarBridgeEvent("bridge_opened", { feature: "lifi_widget_view" });
  }, []);

  useEffect(() => {
    const compactMedia = window.matchMedia("(max-width: 1199px)");
    const mobileMedia = window.matchMedia("(max-width: 767px)");

    const updateCompact = () => setIsCompact(compactMedia.matches);
    const updateMobile = () => setIsMobile(mobileMedia.matches);

    updateCompact();
    updateMobile();
    compactMedia.addEventListener("change", updateCompact);
    mobileMedia.addEventListener("change", updateMobile);

    return () => {
      compactMedia.removeEventListener("change", updateCompact);
      mobileMedia.removeEventListener("change", updateMobile);
    };
  }, []);

  const config = useMemo(
    () => ({
      appearance: "dark" as const,

      variant: (isCompact ? "compact" : "wide") as "compact" | "wide",

      // Split mantém as abas Bridge + Swap
      subvariant: "split" as const,

      // Mobile: desativa rotas relayer/Permit2 como teste de compatibilidade
      // com carteiras móveis que não apresentam o pedido de assinatura.
      // Desktop permanece com o comportamento anterior.
      useRelayerRoutes: !isMobile,

      // Taxa de 1% cobrada pela integradora (StarBridge) em cada transação.
      // Requer que a carteira/integrator "BridgeSaver" esteja habilitada
      // para coleta de fees no painel da LI.FI (portal.li.fi), senão a
      // taxa não é efetivamente cobrada mesmo estando configurada aqui.
      fee: 0.01,

      exchanges: {
        deny: ["nordstern"],
      },

      theme: {
        palette: {
          primary: {
            main: "#8B5CF6",
          },
          background: {
            paper: "#121215",
            default: "#09090b",
          },
        },

        container: {
          border: "none",
          borderRadius: "22px",
          boxShadow: "none",
          width: "100%",
          maxWidth: "100%",
          maxHeight: 720,
        },

        typography: {
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        },
      },
    }),
    [isCompact, isMobile]
  );

  return (
    <section className="lifi-widget-wrap bridge-default">
      <LiFiWidget
        key={isCompact ? "compact" : "wide"}
        integrator="BridgeSaver"
        config={config}
      />
    </section>
  );
}