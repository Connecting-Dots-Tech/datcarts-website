const MissionSection = () => (
  <section className="w-full bg-gradient-to-b from-black to-black-light py-32">
    <div className="mx-auto max-w-4xl px-6 text-center">
      {/* Section Tagline */}
      <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gold-light/80">
        Purpose & Vision
      </p>

      {/* Mission Header */}
      <h2 className="mb-6 text-4xl font-semibold tracking-tight text-gold-light drop-shadow-[0_0_12px_rgba(255,215,0,0.15)]">
        Our Mission
      </h2>

      {/* Mission Statement */}
      <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-gray-light/90">
        To bring the intelligence, precision, and accountability of e-commerce
        into physical retail — creating measurable value for retailers, brands,
        and every shopper walking down the aisle.
      </p>

      {/* Divider */}
      <div className="mx-auto mb-12 h-px w-24 bg-gold-light/40" />

      {/* Story — Now broken into short sections */}
      <div className="mx-auto max-w-3xl space-y-8 text-left">
        <div>
          <p className="text-base leading-relaxed text-gray-light/80">
            Physical stores remain the place where most purchase decisions
            actually happen — yet they are still the least measurable
            environments in all of advertising.
          </p>
        </div>

        <div>
          <p className="text-base leading-relaxed text-gray-light/80">
            Datcarts was created to change that. By transforming shopping carts
            into real-time, high-intent media surfaces, we unlock a new level of
            intelligence for retailers and performance clarity for brands.
          </p>
        </div>

        <div>
          <p className="text-base leading-relaxed text-gray-light/80">
            Our mission is simple: make in-store marketing as smart,
            transparent, and ROI-driven as digital — without compromising the
            shopper experience.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MissionSection;
