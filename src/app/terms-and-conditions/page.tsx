import PageTop from "../../components/PageTop";

const RELATED_QUESTIONS = [
  { id: "acceptance", label: "Acceptance of terms" },
  { id: "ownership", label: "Ownership and property" },
  { id: "privacy", label: "Privacy and data usage" },
  { id: "account", label: "Account responsibilities" },
  { id: "platform-role", label: "Platform role and limitations" },
  { id: "facilitator", label: "We are a facilitator" },
  { id: "product-warranty", label: "Product warranty disclaimer" },
  { id: "service-availability", label: "Service availability" },
  { id: "third-party-links", label: "Third-party links" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "limitation-liability", label: "Limitation of liability" },
  { id: "severability", label: "Severability" },
  { id: "changes-terms", label: "Changes to terms" },
  { id: "governing-law", label: "Governing law" },
] as const;

const RelatedQuestions = () => (
  <nav
    className="sticky top-8 rounded-lg border border-white/10 bg-black/50 p-5 shadow-[0_4px_6px_rgba(0,0,0,0.3)] backdrop-blur-[10px]"
    aria-label="Related questions"
  >
    <h3 className="mb-3 text-[15px] font-semibold uppercase tracking-wider text-white">
      Related Questions
    </h3>
    <ul className="m-0 list-none space-y-2 p-0">
      {RELATED_QUESTIONS.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className="block py-1 text-sm text-white/85 transition-colors hover:text-[#b7a221] focus:text-[#b7a221] focus:outline-none"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default function TermsAndConditions() {
  return (
    <>
      <PageTop pageName="Terms and Conditions" />

      <div className="flex min-h-screen w-full items-center justify-center bg-[url('/assets/bgherodesk.svg')] bg-cover bg-center bg-no-repeat py-8 max-md:bg-[url('/assets/bgheromob.svg')] max-md:py-4">
        <div className="flex w-[90%] gap-20 md:w-4/5 max-md:my-7 max-md:flex-col-reverse max-md:gap-5">
          {/* Sidebar */}
          <aside className="flex-none max-md:order-2 md:w-60">
            <RelatedQuestions />
          </aside>

          {/* Main Content */}
          <main className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/50 p-10 shadow-[0_4px_6px_rgba(0,0,0,0.3)] backdrop-blur-[10px] max-md:order-1 max-md:p-6">
            {/* Header */}
            <div className="mb-8 border-b-2 border-white/20 pb-4">
              <p className="mb-1 text-sm text-white/70">Version 1.0</p>
              <p className="text-sm font-semibold text-white/85">
                Last Updated: November 17, 2025
              </p>
            </div>

            {/* Section 1 - Acceptance */}
            <section id="acceptance" className="mb-10">
              <h1 className="mb-6 text-2xl font-bold tracking-wider text-white max-md:text-xl">
                Terms and Conditions of Website and Mobile Application
              </h1>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Please read these conditions carefully before using the
                datcarts.com website and mobile application. By using the
                datcarts.com website and its mobile application, you signify
                your agreement to be bound by our Conditions of Use. By using
                our services, you agree that you are above 18 years of age.
              </p>
            </section>

            {/* Section 2 - Ownership */}
            <section
              id="ownership"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Ownership and Property
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                The website datcarts.com and mobile application datcarts is the
                sole and exclusive property of Connecting Dots Tech Ventures
                Private Limited, having its registered office at Mettungal,
                Manakkapady, Mannam, Paravur, Ernakulam, Kerala – 683520.
              </p>
            </section>

            {/* Section 3 - Privacy */}
            <section
              id="privacy"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Privacy and Data Usage
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Please review our{" "}
                <a
                  href="/privacy-policy"
                  className="text-[#b7a221] transition-colors hover:text-[#d4c42e] hover:underline"
                >
                  Privacy Policy
                </a>
                , which also governs your use of our website and mobile
                application. Your personal information provided to us by you
                during the course of usage of our website and mobile application
                will be treated as strictly confidential and stored in
                accordance with the privacy policy and applicable laws and
                regulations.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Only the general purchase preferences and aggregate age & gender
                of users (without linking it to identity/name of any individual
                customer) will be shared with third parties. Our website uses
                cookies to monitor browsing preferences. If you do allow cookies
                to be used, your personal information may be stored by us for
                use by third parties.
              </p>
            </section>

            {/* Section 4 - Account */}
            <section
              id="account"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Account Responsibilities
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Our services offered on or through the website and mobile
                application may require you to open an account (including
                setting up an ID and password). If you use the website or
                application, you are responsible for maintaining the
                confidentiality of your account and password and for restricting
                access to your computer/mobile device to prevent unauthorised
                access to your account.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                You agree to accept responsibility for all activities that occur
                under your account or password.
              </p>
            </section>

            {/* Section 5 - Platform Role */}
            <section
              id="platform-role"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Platform Role and Limitations
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                The website and mobile application are only an online platform
                that enables you to engage with the store. All information
                provided on the platform is based on inputs given by the store
                and we are not responsible for any information including the
                price, which is uploaded by the store.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                We do not promise that any content, service or feature of the
                website and mobile application will be error-free or
                uninterrupted. We do not provide any guarantee that the products
                listed for sale by the store will always be available at the
                store.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                The Products available at a store may be mispriced, described
                inaccurately, or unavailable, and there may be delays in
                updating information regarding the products. We cannot and do
                not guarantee the accuracy or completeness of any information,
                including prices, product images, specifications, availability,
                and services.
              </p>
            </section>

            {/* Section 6 - Facilitator */}
            <section
              id="facilitator"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                We Are a Facilitator
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                By using our website and mobile application you also agree that
                Connecting Dots Tech Ventures Private Limited is only a
                facilitator and not the seller of the products purchased from
                the store. There is no profit sharing or partnership or joint
                venture of any kind between the store owner and Connecting Dots
                Tech Ventures Private Limited.
              </p>
            </section>

            {/* Section 7 - Product Warranty */}
            <section
              id="product-warranty"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Product Warranty Disclaimer
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Connecting Dots Tech Ventures Private Limited is not responsible
                for the sale of the product that is purchased from the store. We
                do not provide any warranty or guarantee for the products
                purchased and are not responsible for any loss/damage suffered
                by the user as a result of the purchase or for defective product
                or deficient service of the seller/store.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                All grievances related to products purchased must be addressed
                to the store owner or the manufacturer.
              </p>
            </section>

            {/* Section 8 - Service Availability */}
            <section
              id="service-availability"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Service Availability and Accuracy
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                We reserve the right to change or update information and to
                correct errors, inaccuracies, or omissions at any time without
                prior notice. Information regarding the products available at a
                store may contain inaccuracies or errors and we expressly
                exclude liability for any such inaccuracies or errors.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                The website/mobile application and its content are delivered on
                an "as-is" and "as-available" basis. All information provided on
                the website/mobile application is subject to change without
                notice.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                We cannot ensure that any files or other data you download from
                the website or mobile application will be free of viruses or
                contamination or destructive features.
              </p>
              <h3 className="mb-3 mt-5 text-lg font-semibold text-white/95">
                No Warranties
              </h3>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                We do not make any representation or warranty of any kind,
                express or implied:
              </p>
              <ul className="mb-4 ml-8 mt-4 list-disc space-y-2">
                <li className="leading-relaxed text-white/90">
                  As to the information, content, and materials or products
                  included thereon
                </li>
                <li className="leading-relaxed text-white/90">
                  That the service will be uninterrupted or error-free
                </li>
                <li className="leading-relaxed text-white/90">
                  As to the accuracy, reliability, or currency of any
                  information or content provided through the Service
                </li>
                <li className="leading-relaxed text-white/90">
                  That the service, its servers, the content, or e-mails sent
                  from or on behalf of the company are free of viruses, scripts,
                  trojan horses, worms, malware or other harmful components
                </li>
              </ul>
            </section>

            {/* Section 9 - Third Party Links */}
            <section
              id="third-party-links"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Third-Party Links
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                From time to time this website may also include links to other
                websites. These links are provided for your convenience to
                provide further information or promotions. They do not signify
                that we endorse the website(s). We have no responsibility for
                the content of the linked website(s).
              </p>
            </section>

            {/* Section 10 - Intellectual Property */}
            <section
              id="intellectual-property"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Intellectual Property
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                This website or any portion of this website and application
                shall not be reproduced, duplicated, copied, sold, resold,
                visited, distributed or otherwise exploited for any personal or
                commercial purpose.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                This website contains material which is owned by or licensed to
                us. This material includes, but is not limited to, the design,
                layout, look, appearance and graphics. Unauthorised use of this
                website may give rise to a claim for damages and/or be a
                criminal offence.
              </p>
            </section>

            {/* Section 11 - Limitation of Liability */}
            <section
              id="limitation-liability"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Limitation of Liability
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Except where prohibited by law, Connecting Dots Tech Ventures
                Private Limited will not be liable to you for any indirect,
                consequential, exemplary, incidental or punitive damages on
                account of the purchase of any product using our website or app.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                If Connecting Dots Tech Ventures Private Limited is found to be
                liable to you for any damage or loss which arises out of or is
                in any way connected with your use of the website or
                application, Connecting Dots Tech Ventures Private Limited's
                liability shall in no event exceed the amount spent on purchase
                of the product.
              </p>
            </section>

            {/* Section 12 - Severability */}
            <section
              id="severability"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Severability
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                If any provision of these Terms is held to be unenforceable or
                invalid, such provision will be changed and interpreted to
                accomplish the objectives of such provision to the greatest
                extent possible under applicable law and the remaining
                provisions will continue in full force and effect.
              </p>
            </section>

            {/* Section 13 - Changes to Terms */}
            <section
              id="changes-terms"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Changes to Terms
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                The terms and conditions mentioned herein are subject to change
                and users are requested to periodically check this website/link
                for any changes/updates in our terms and conditions.
              </p>
            </section>

            {/* Section 14 - Governing Law */}
            <section
              id="governing-law"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Governing Law and Jurisdiction
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Your use of this website and any dispute arising out of such use
                of the website is subject to the laws of India and all disputes
                shall be within the sole and exclusive jurisdiction of competent
                courts in Cochin/Ernakulam city.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
