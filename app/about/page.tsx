import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | StarBridge",
  description:
    "Learn how StarBridge approaches cross-chain transfers, security, routing and user experience.",
};

export default function About() {
  return (
    <main className="site innerPage aboutPage">
      <section className="aboutHero">
        <div className="eyebrow">ABOUT STARBRIDGE</div>

        <h1>
          Connecting worlds.
          <br />
          <span>Moving value.</span>
        </h1>

        <p>
          Moving assets between blockchains should not feel like solving a
          technical puzzle. StarBridge was created to make cross-chain
          transfers simple, transparent and accessible from one interface.
        </p>
      </section>

      <section className="aboutStory">
        <article className="storyBlock">
          <span>01</span>
          <div>
            <h2>One interface for a fragmented world</h2>
            <p>
              The blockchain ecosystem has grown into many networks, each with
              its own assets, liquidity and infrastructure. StarBridge brings
              that complexity into one place: choose the origin, destination
              and asset, then review the available route.
            </p>
          </div>
        </article>

        <article className="storyBlock">
          <span>02</span>
          <div>
            <h2>Routes built for speed and efficiency</h2>
            <p>
              StarBridge uses LI.FI routing infrastructure to search available
              cross-chain paths. The goal is simple: help users find practical
              routes with competitive fees and efficient execution while
              keeping the experience easy to understand.
            </p>
          </div>
        </article>

        <article className="storyBlock">
          <span>03</span>
          <div>
            <h2>Security starts with control</h2>
            <p>
              StarBridge is designed as a non-custodial interface. We do not
              ask users to deposit funds into an account controlled by us. Your
              wallet remains yours and you approve transactions from your own
              wallet.
            </p>
          </div>
        </article>

        <article className="storyBlock">
          <span>04</span>
          <div>
            <h2>Built for beginners and experienced users</h2>
            <p>
              Whether you are making your first cross-chain transfer or moving
              assets regularly, the experience is designed to keep supported
              networks, routes, estimated costs and transaction status in one
              place.
            </p>
          </div>
        </article>
      </section>

      <section className="benefitGrid">
        <article>
          <div className="benefitIcon">✓</div>
          <h3>Secure by design</h3>
          <p>Your wallet stays in control of your assets.</p>
        </article>

        <article>
          <div className="benefitIcon">↗</div>
          <h3>Smart routing</h3>
          <p>LI.FI helps identify available cross-chain routes.</p>
        </article>

        <article>
          <div className="benefitIcon">ϟ</div>
          <h3>Less friction</h3>
          <p>One interface instead of jumping between ecosystems.</p>
        </article>
      </section>

      <section className="supportBox">
        <div>
          <span>NEED HELP?</span>
          <h2>We are here for you.</h2>
          <p>Questions, feedback or partnership requests?</p>
        </div>

        <a href="mailto:support@starbridge.finance">
          support@starbridge.finance
        </a>
      </section>

      <section className="disclaimer">
        <strong>Important</strong>

        <p>
          Route availability, fees and execution times are determined by the
          underlying protocols and LI.FI infrastructure.
        </p>
      </section>

      <Footer />
    </main>
  );
}