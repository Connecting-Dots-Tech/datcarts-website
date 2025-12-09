"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative w-full bg-[var(--color-black)] py-20 md:py-28">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 to-black/40 pointer-events-none" />

      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* ------------------------------------------------------------------ */}
          {/* LEFT: HEADLINE + SUBHEAD + PERSONA CARDS */}
          {/* ------------------------------------------------------------------ */}
          <div className="flex flex-col gap-10">
            {/* HEADLINE */}
            <div>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl text-white">
                Influence the Purchase Decision.{" "}
                <span className="text-[var(--color-gold-light)]">
                  Right at the Shelf.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-lg text-white/80">
                Datcarts bridges the digital and physical divide by turning
                everyday shopping carts into intelligent, high-margin
                advertising engines.
              </p>
            </div>

            {/* PERSONA CARDS */}
            <div className="flex flex-col gap-6 sm:flex-row">
              <PersonaCard
                title="For Retailers"
                subtitle="Generate Revenue"
                bullets={[
                  "Monetize in-store audiences with immediate impact",
                  "Compete with e-commerce using real shopper insights",
                  "Turn carts into modern, high-margin media assets",
                ]}
                href="/retailers"
              />

              <PersonaCard
                title="For Brands"
                subtitle="Boost In-Store Sales"
                bullets={[
                  "Capture shoppers at the exact moment of decision",
                  "Run targeted, behavior-based campaigns",
                  "Maximize ROI with transparent real-time analytics",
                ]}
                href="/brands"
              />
            </div>
          </div>

          <div className="order-first mb-6 sm:order-last sm:mb-0">
            <div className="mx-auto max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[var(--color-black-light)] shadow-2xl shadow-black/60">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/ZIzf3r2bonc"
                  title="Datcarts Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function PersonaCard({
  title,
  subtitle,
  bullets,
  href,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  href: string;
}) {
  return (
    <div
      className="
        w-full max-w-md rounded-xl border border-white/10
        bg-[var(--color-black-light)] p-6 shadow-lg
        transition-all hover:border-[var(--color-gold-light)]
      "
    >
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-gold-light)]">
          {subtitle}
        </div>
        <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-[var(--color-gold-light)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="
          mt-5 inline-flex items-center gap-2 rounded-md
          bg-[var(--color-green)] px-4 py-2 text-sm font-semibold text-black
          hover:bg-[var(--color-green-dark)]
          transition-colors
        "
      >
        Learn more →
      </Link>
    </div>
  );
}
