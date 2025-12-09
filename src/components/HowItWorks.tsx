import Link from "next/link";
import React from "react";

export const HowItWorks: React.FC = () => {
  const STEPS = [
    {
      title: "Create the Campaign",
      desc: "Brands upload creative and define goals — quick templates and best-practice defaults speed setup.",
    },
    {
      title: "Target the Right Audience",
      desc: "Select segments using real shopping behavior, store geography, or retailer audiences.",
    },
    {
      title: "Deliver Ads In-Store",
      desc: "Personalized messages appear on Datcarts screens and future in-store surfaces at the point of decision.",
    },
    {
      title: "Track Engagement & Sales Lift",
      desc: "Monitor impressions, interactions, and in-store impact with clear dashboards and exports.",
    },
    {
      title: "Generate Revenue",
      desc: "Retailers earn recurring revenue while brands measure true ROI from in-store campaigns.",
    },
  ];

  return (
    <section className="w-full bg-transparent py-16">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-white">
            How Datcarts Works
          </h2>
          <p className="mt-3 text-white/80">
            A transparent, data-driven advertising workflow that benefits both
            retailers and brands.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="rounded-lg border border-white/6 bg-white/3 p-4 text-sm"
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-green)] text-black">
                  {i + 1}
                </div>
                <div className="font-semibold text-white">{s.title}</div>
              </div>
              <div className="text-xs text-white/80">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Proof card below steps */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-2xl rounded-xl border border-white/8 bg-[#091c12] p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-base font-bold text-white">
                  Brand Success Story
                </div>
                <div className="mt-1 text-sm text-white/80">
                  A leading beverage brand increased{" "}
                  <span className="font-bold text-[#1db954]">
                    in-store sales by 20%
                  </span>{" "}
                  in participating stores using Datcarts.
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <Link
                  href="/case-study"
                  className="inline-flex items-center rounded-md bg-[var(--color-green)] px-4 py-2 text-sm font-semibold text-black"
                >
                  Read the case study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
