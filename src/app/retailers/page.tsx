export default function RetailersPage() {
  return (
    <div className="w-full bg-[var(--color-black)] text-white">
      {/* Hero Section */}
      <section className="relative w-full py-24 bg-gradient-to-b from-black to-black-light px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 to-black/20" />
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white mb-6">
              Turn Your Carts into a New Revenue Stream.
            </h1>
            <p className="text-lg text-[var(--color-gold)] max-w-xl">
              Monetize your in-store audience and compete with e-commerce data
              insights.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl font-semibold mb-10">
            What's In It For You?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "New Ad Revenue",
                text: "Unlock untapped 'Point of Sale' media budgets as brands shift spend from search/social to physical retail.",
              },
              {
                title: "Data Superiority",
                text: "Gain real-time inventory visibility and insights into shopper behavior previously only available online.",
              },
              {
                title: "Zero Disruption",
                text: "Low cost of entry with rapid deployment that integrates seamlessly with your existing operations.",
              },
              {
                title: "Shopper Retention",
                text: "100% retention across supermarket chains—customers love the smart, guided shopping experience.",
              },
              {
                title: "Real-Time Analytics",
                text: "Get access to rich behavioral data about shopper journeys, engagement, and in-aisle decisions.",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-gold-light)]">
                  {b.title}
                </h3>
                <p className="text-sm text-white/80">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-[var(--color-black-light)]/40 border-t border-white/10">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl font-semibold mb-12">How It Works</h2>

          <div className="grid gap-10 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Deploy",
                text: "We equip your cart fleet with Datcarts smart screens — fast rollout and minimal disruption.",
              },
              {
                step: "02",
                title: "Engage",
                text: "Shoppers log in, scan items, search products, and browse personalized offers.",
              },
              {
                step: "03",
                title: "Monetize",
                text: "You earn revenue from brand ads displayed dynamically during each trip.",
              },
              {
                step: "04",
                title: "Analyze",
                text: "Access real-time insights and analytics about shopper behavior and in-aisle interactions.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md backdrop-blur-sm hover:-translate-y-1 transition"
              >
                <div className="text-4xl font-bold text-[var(--color-green)] mb-4 opacity-80">
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-white/80">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
