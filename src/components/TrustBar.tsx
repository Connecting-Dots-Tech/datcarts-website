"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function TrustBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 0.4; // speed
      container.scrollLeft = scrollAmount;

      // Loop when reaching end
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  const partners = [
    { name: "Ajmi", src: "/assets/brands/ajmi.jpg" },
    { name: "Elements", src: "/assets/brands/elements.png" },
    { name: "Wellway", src: "/assets/brands/wellway.png" },
    { name: "Family Big mart", src: "/assets/SR/family.PNG" },
    { name: "Rolla", src: "/assets/SR/rolla.jpg" },
    { name: "Moolans", src: "/assets/SR/moolans.png" },
    { name: "Allay", src: "/assets/brands/allay.jpg" },
    { name: "Kabani", src: "/assets/brands/kabani.jpg" },
    { name: "Orgello", src: "/assets/brands/orgello.png" },
  ];

  const looped = [...partners, ...partners];

  return (
    <>
      <section className="w-full bg-black py-14 border-t border-white/10">
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-16 px-8 py-4 whitespace-nowrap overflow-x-scroll no-scrollbar"
          >
            {looped.map((logo, idx) => (
              <div
                key={logo.name + idx}
                className="flex items-center justify-center shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-300 "
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={70}
                  className="object-contain rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="w-full bg-black py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-white">
            Why <span className="text-gold-light">Datcarts Works</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-medium mb-3 text-gray-lighter">
                Connect Digital & Physical
              </h3>
              <p className="text-gray-light leading-relaxed">
                Replicate e-commerce tracking, attribution, and intent capture
                directly inside physical aisles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-medium mb-3 text-gray-lighter">
                High-Intent Audience
              </h3>
              <p className="text-gray-light leading-relaxed">
                Engage shoppers at the exact moment of decision — influencing up
                to 12.5% of total cart value.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-medium mb-3 text-gray-lighter">
                Verifiable Impact
              </h3>
              <p className="text-gray-light leading-relaxed">
                Guaranteed ROAS with real-time attribution — not vague claims of
                "brand awareness."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
