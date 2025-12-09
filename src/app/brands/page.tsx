export default function Brands() {
  return (
    <main className="min-h-screen w-full bg-[var(--color-black)] text-white">
      {/* Hero */}{" "}
      <section className="relative w-full pt-24 pb-32 overflow-hidden">
        {" "}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative mx-auto max-w-screen-xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              The "Last Mile" of Advertising.
            </h1>
            <p className="mt-6 text-lg text-[var(--color-gold)] max-w-lg">
              Capture high-intent shoppers at the exact moment they pick a
              product off the shelf.
            </p>
          </div>
        </div>
      </section>
      {/* Why Datcarts */}
      <section className="py-20 border-t border-white/10 bg-[var(--color-black-light)]">
        <div className="mx-auto max-w-screen-xl px-6">
          <h2 className="text-3xl font-semibold mb-10">Why Datcarts?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hyper-Contextual Targeting",
                desc: "Target customers based on their precise physical location in the store—no guesswork.",
              },
              {
                title: "Closed-Loop Measurement",
                desc: "Move past impressions. Attribute ad spend to actual basket value with verifiable sales data.",
              },
              {
                title: "Real-Time Intelligence",
                desc: "See live shopper engagement and campaign performance inside the physical aisle.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-gold-light)]">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Campaign Types */}
      <section className="py-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <h2 className="text-3xl font-semibold mb-10">Campaign Types</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Campaigns",
                desc: "Serve dynamic ads based on customer profiles and past behavior.",
              },
              {
                title: "New Product Launch",
                desc: "Drive instant trials and accelerate discovery inside the aisle.",
              },
              {
                title: "Brand Loyalty",
                desc: "Retarget frequent buyers with rewards and contextual offers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-3 text-[var(--color-gold-light)]">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA + Form */}
      {/* <section className="py-24 bg-[var(--color-black-light)] border-t border-white/10">
        <div className="mx-auto max-w-screen-lg px-6">
          <h2 className="text-3xl font-semibold mb-6">Start Your Campaign</h2>
          <p className="text-white/70 max-w-xl mb-12">
            Connect with our marketing team to plan, launch, and measure your
            next high-impact in-store campaign.
          </p>

          <form className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm w-full focus:border-[var(--color-gold)]"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm w-full focus:border-[var(--color-gold)]"
            />
            <input
              type="text"
              placeholder="Job Title"
              className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm w-full focus:border-[var(--color-gold)]"
            />
            <select className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm w-full focus:border-[var(--color-gold)]">
              <option>Area of Interest</option>
              <option>Brand Advertising</option>
              <option>Retailer Partnership</option>
            </select>

            <textarea
              placeholder="Tell us about your campaign goals..."
              className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm w-full md:col-span-2 h-32 focus:border-[var(--color-gold)]"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-[var(--color-gold)] text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[var(--color-gold-light)]"
            >
              Submit
            </button>
          </form>
        </div>
      </section> */}
      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black/80 to-black">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to take your digital advertising approach further?
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Book a meeting and explore how Datcarts can turn your store into a
            revenue engine.
          </p>

          {/* Google Calendar Embed */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl">
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-[var(--color-green)]/20 to-[var(--color-green)]/10 border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[var(--color-green)]" />
                <h3 className="text-lg font-semibold text-white/90">
                  Schedule Your Consultation
                </h3>
              </div>
            </div>

            {/* Calendar Container */}
            <div className="p-6 bg-gradient-to-b from-black/20 to-black/40">
              <div className="rounded-xl overflow-hidden border border-white/5 shadow-inner">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3zrcbzdTP48PUQtRo_b7QkLhnNBqulyUzxiPtz6BlGgHd3UnZ1aSbKlvJber4qxbBDvYV0u2oX?gv=true"
                  title="retail_appointment_booking"
                  className="w-full h-[600px] border-0"
                  style={{
                    colorScheme: "dark",
                  }}
                />
              </div>
            </div>

            {/* Footer Note */}
            <div className="px-6 py-4 bg-black/40 border-t border-white/10">
              <p className="text-sm text-white/70 text-center">
                Select a time that works best for you • 30-minute consultation
              </p>
            </div>
          </div>

          {/* Additional styling info */}
          <p className="mt-8 text-sm text-white/50">
            All times are shown in your local timezone
          </p>
        </div>
      </section>
    </main>
  );
}
