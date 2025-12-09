import Link from "next/link";
import React from "react";

export const PersonaSplit: React.FC = () => {
  return (
    <section className="w-full border-t border-white/6 bg-[linear-gradient(180deg,#08120f00,#08120f)] py-12">
      <div className="mx-auto max-w-screen-xl px-6">
        <h2 className="text-center text-sm font-semibold uppercase text-white/70">
          Who we serve
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-white/80">
          Two sides of the in-store advertising ecosystem — both win with
          Datcarts.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/6 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/6">
                {/* store icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white/90"
                >
                  <path fill="currentColor" d="M3 9.5V21h18V9.5L12 3 3 9.5z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">Retailers</h3>
                <p className="mt-1 text-sm text-white/80">
                  Unlock new revenue inside your store and gain aisle-level
                  insights for brands.
                </p>
                <Link
                  href="/retailers"
                  className="mt-3 inline-block text-sm font-medium text-white/90 underline"
                >
                  For Retailers →
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/6 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/6">
                {/* brand icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white/90"
                >
                  <path fill="currentColor" d="M12 2l4 4H8l4-4zM6 8h12v12H6z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">Brands</h3>
                <p className="mt-1 text-sm text-white/80">
                  Capture high-intent shoppers at the moment of decision and
                  measure real in-store impact.
                </p>
                <Link
                  href="/brands"
                  className="mt-3 inline-block text-sm font-medium text-white/90 underline"
                >
                  For Brands →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
