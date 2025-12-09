import Image from "next/image";

export default function TrustBar() {
  const partners = [
    { name: "Ajmi", src: "/assets/brands/ajmi.jpg" },
    { name: "Elements", src: "/assets/brands/elements.png" },
    { name: "Wellway", src: "/assets/brands/wellway.png" },
    { name: "Family Big mart", src: "/assets/SR/family.PNG" },
    { name: "Rolla", src: "/assets/SR/rolla.jpg" },
    { name: "Moolans", src: "/assets/SR/moolans.png" },
  ];

  return (
    <>
      <section className="w-full bg-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-lg font-medium tracking-wide text-white/60 mb-10">
            Powering In-Store Intelligence For
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
            {partners.map((logo) => (
              <div
                key={logo.name}
                className="w-32 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-sm"
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
            Why Datcarts Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-medium mb-3 text-white">
                Connect Digital & Physical
              </h3>
              <p className="text-white/70 leading-relaxed">
                Replicate e-commerce tracking, attribution, and intent capture
                directly inside physical aisles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-medium mb-3 text-white">
                High-Intent Audience
              </h3>
              <p className="text-white/70 leading-relaxed">
                Engage shoppers at the exact moment of decision — influencing up
                to 12.5% of total cart value.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-medium mb-3 text-white">
                Verifiable Impact
              </h3>
              <p className="text-white/70 leading-relaxed">
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
