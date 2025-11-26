import Image from "next/image";

const HOW_IT_WORKS_STEPS = [
  {
    title: "Select Your Audience",
    description:
      "Define your target demographic based on shopping habits, demographics, and purchase history.",
  },
  {
    title: "Upload Your Creative",
    description:
      "Easily upload your ad creatives, ensuring they meet our specifications for optimal display.",
  },
  {
    title: "Display On DATCARTS",
    description:
      "Your ads are displayed on DATCARTS, reaching shoppers at the point of purchase.",
  },
  {
    title: "Track Performance",
    description:
      "Access detailed reports on impressions, engagement, and conversions to measure ROI.",
  },
] as const;

const Brand = () => (
  <section className="flex w-full flex-col items-center justify-center bg-[url('/assets/bgherodesk.svg')] bg-cover bg-center bg-no-repeat py-12">
    {/* Header Content */}
    <div className="flex w-[90%] flex-col text-lg font-medium text-white md:w-4/5">
      <h2 className="text-2xl font-extrabold leading-tight text-white">
        <span className="font-extrabold text-[#ffd600]">
          EMPOWER YOUR BRAND
        </span>
        <br />
        INSIDE THE STORE
      </h2>
      <p className="w-full font-light leading-relaxed text-[#d6e6d6] md:w-[70%]">
        DATCARTS transforms in-store advertising by delivering personalized,
        dynamic content directly to shoppers. Engage customers with targeted
        messages that resonate, driving higher conversion rates and brand
        loyalty.
      </p>
    </div>

    {/* How It Works Section */}
    <div className="flex w-[90%] flex-col items-center justify-center md:w-4/5 md:flex-row">
      {/* Steps List */}
      <div className="w-full md:w-1/2">
        <h3 className="mb-4 mt-2 text-lg font-bold tracking-wide text-white">
          HOW IT WORKS
        </h3>
        <ul className="mb-6 space-y-5 p-0 md:mb-0">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <li
              key={index}
              className="relative w-[90%] pl-8 text-base font-medium text-white md:w-[60%]"
            >
              {/* Custom Dot */}
              <span className="absolute left-0 top-1 inline-block h-2 w-2 rounded-full border-[7px] border-[#01200c] bg-[#e5c925] shadow-[0px_0px_3px_0.2px_#848383]" />

              <strong className="font-medium">{step.title}</strong>
              <br />
              <span className="text-xs font-light text-[#d6e6d6]">
                {step.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image and Success Card */}
      <div className="relative mb-32 flex w-full items-center justify-center md:w-1/2">
        <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px]">
          <Image
            src="/assets/sidtrolly1.svg"
            alt="Smart Cart"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 240px, 400px"
          />
        </div>

        {/* Success Card - Positioned absolutely below the cart */}
        <div className="absolute top-full w-[232px] rounded-lg border border-[#4e5a52] bg-[#091c12] p-4 md:w-[400px]">
          <div className="mb-2 text-base font-bold text-white">
            BRAND SUCCESS STORY
          </div>
          <div className="text-xs font-normal text-[#d6e6d6] md:text-sm">
            A leading beverage company increased{" "}
            <span className="font-bold text-[#1db954]">Sales by 20% in</span>{" "}
            participating stores by leveraging DATCARTS's targeted advertising
            capabilities.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Brand;
