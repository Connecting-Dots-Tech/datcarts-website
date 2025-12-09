export default function CaseStudies() {
  return (
    <section className="w-full bg-black py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-white">
          Proven Impact. Real Results.
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Case Study A */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-2xl font-semibold text-white mb-4">
              The Beverage Giant
            </h3>

            <p className="text-green-400 text-4xl font-bold mb-4 tracking-tight">
              20% Sales Uplift
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              A leading beverage company leveraged Datcarts' targeted
              aisle-level ads to convert undecided shoppers — resulting in
              immediate uplift and measurable influence at the moment of
              decision.
            </p>

            {/* <button className="mt-auto text-green-400 font-medium tracking-wide hover:text-green-300 transition-colors">
              View Full Case Study →
            </button> */}
          </div>

          {/* Case Study B */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-2xl font-semibold text-white mb-4">
              The Healthcare Entrant
            </h3>

            <p className="text-green-400 text-4xl font-bold mb-4 tracking-tight">
              100% Target Achievement
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              A new healthcare brand reached precise in-store demographics and
              achieved their entire monthly sales target — all within weeks of
              activating Datcarts' real-time shopper targeting.
            </p>

            {/* <button className="mt-auto text-green-400 font-medium tracking-wide hover:text-green-300 transition-colors">
              View Full Case Study →
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
