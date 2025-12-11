import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="w-full bg-black py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 text-white">
          Proven Impact. <span className="text-gold-light">Real Results.</span>
        </h2>

        <p className="text-white/60 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Every campaign we’ve run has delivered measurable revenue uplift for
          our brand partners — from household category leaders to fast-growing
          new entrants.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Case Study A */}
          <div
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 
                          backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.03)]
                          hover:shadow-[0_0_40px_rgba(183,162,33,0.15)]
                          hover:border-gold-light/30 transition-all duration-300 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Brand Logo */}
            <div className="mb-6">
              <Image
                height="140"
                width="160"
                src="/assets/brands/wellway.png"
                alt="Weelway Brand Logo"
                className="rounded-xs object-contain opacity-90"
              />
            </div>

            <h3 className="text-xl font-semibold text-gold mb-3">
              Category Leader Uplift
            </h3>

            <p className="text-green text-4xl font-bold mb-4 tracking-tight">
              30% Sales Uplift
            </p>

            <p className="text-gray-light leading-relaxed">
              A leading cooking oil company leveraged Datcarts’ targeted ads
              campaign to convert undecided shoppers - resulting in significant
              sales uplift and measurable influence at point of sale
            </p>
          </div>

          {/* Case Study B */}
          <div
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 
                          backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.03)]
                          hover:shadow-[0_0_40px_rgba(183,162,33,0.15)]
                          hover:border-gold-light/30 transition-all duration-300 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Brand Logo */}
            <div className="mb-6">
              <Image
                height="140"
                width="160"
                src="/assets/brands/elements.png"
                alt="Elements Brand Logo"
                className="rounded-xs object-contain opacity-90"
              />
            </div>

            <h3 className="text-xl font-semibold text-gold mb-3">
              Precision Targeting Win
            </h3>

            <p className="text-green-dark text-4xl font-bold mb-4 tracking-tight">
              100% Target Achieved
            </p>

            <p className="text-gray-light leading-relaxed">
              A new healthcare entrant hit their entire monthly sales target
              within weeks by reaching verified in-store shoppers aligned with
              their exact demographic and category intent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
