"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

const LiFiWidget = dynamic(
  () => import("@lifi/widget").then((module) => module.LiFiWidget),
  { ssr: false }
);

export default function Bridge() {
  const [isCompact, setIsCompact] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1199px)");

    const update = () => setIsCompact(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const config = useMemo(
    () => ({
      appearance: "dark" as const,

      variant: (isCompact ? "compact" : "wide") as "compact" | "wide",

      // Split mantém as abas Bridge + Swap
      subvariant: "split" as const,

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
    [isCompact]
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