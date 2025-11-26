import PageTop from "../../components/PageTop";

const RELATED_QUESTIONS = [
  { id: "your-privacy", label: "Your privacy" },
  { id: "what-info", label: "What information do we collect" },
  { id: "sharing", label: "Sharing your personal information" },
  { id: "returns", label: "Accessing personal information" },
  { id: "Protection-information", label: "Protection of information" },
  { id: "consent-information", label: "Consent on data usage" },
  { id: "Legal-Enforcement", label: "Legal enforcement" },
  { id: "policy-changes", label: "Policy changes" },
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

export default function PrivacyPolicy() {
  return (
    <>
      <PageTop pageName="Privacy Policy" />

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

            {/* Section 1 - Your Privacy */}
            <section id="your-privacy" className="mb-10">
              <h1 className="mb-6 text-2xl font-bold tracking-wider text-white max-md:text-xl">
                Your Privacy
              </h1>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                This Privacy Policy describes how Connecting Dots Tech Ventures
                Private Limited collects, uses, shares or otherwise processes
                your personal data through datcarts.com website and datcarts
                mobile application. By visiting/using our website and
                downloading/using our mobile application, and providing your
                information or availing our service, you expressly agree to be
                bound by the terms and conditions of this Privacy Policy. If you
                do not agree, please do not use or access our website and mobile
                application.
              </p>
            </section>

            {/* Section 2 - What Information */}
            <section
              id="what-info"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                What information do we collect and how do we use it?
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                We do not knowingly solicit or collect personal information from
                children under the age of 18 years and use of our website and
                mobile application is only meant for persons above 18 years of
                age. By using our website and its mobile application, you agree
                that you are above 18 years of age.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                While using our website and its mobile application, we may ask
                you to provide us with certain personal information that can be
                used to contact or identify you. Personal information may
                include, but is not limited to:
              </p>
              <ul className="mb-4 ml-8 mt-4 list-disc space-y-2">
                <li className="leading-relaxed text-white/90">Phone number</li>
                <li className="leading-relaxed text-white/90">Email address</li>
                <li className="leading-relaxed text-white/90">Name</li>
                <li className="leading-relaxed text-white/90">Address</li>
                <li className="leading-relaxed text-white/90">Gender</li>
                <li className="leading-relaxed text-white/90">Age</li>
              </ul>
            </section>

            {/* Section 3 - Sharing */}
            <section
              id="sharing"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Sharing your personal information
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Your personal information provided to us by you during the
                course of usage of our service will be treated as strictly
                confidential. The said information (except for age and gender as
                explained below) will not be shared with any third party and
                will only be used in accordance with our privacy policy and
                applicable laws. It is clarified that your identity and name
                will remain confidential and shall not be shared with any third
                party.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                While using our services, your purchase preference and
                restricted personal information (i.e. age and gender) along with
                the purchase preferences of other users may be collected for
                detailed study and dissemination. We use this information to do
                research on our users' demographics, interests, and behavior to
                better understand, protect and serve our users. It may even be
                shared with third parties. However, the purchase preference of a
                single user will never be identified with the identity or name
                of any user and purchase preference data will always remain
                anonymous to third party (if being shared). This information
                will always be compiled and analysed on an aggregated basis.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Apart from the above, our website uses cookies to monitor
                browsing preferences. If you do allow cookies to be used, your
                browsing preferences may be stored by us for use by third
                parties.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                We may use your personal information to recommend features,
                products, and services that might be of interest to you,
                identify your preferences, and personalize your experience with
                us.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                We may use your personal information to contact you with
                newsletters, marketing or promotional materials and other
                information that may be of interest to you. You can opt-out of
                receiving any or all of these communications from us by
                following the unsubscribe link or instructions provided in any
                email we send or by contacting us.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                We may use your personal information to display interest-based
                ads for features, products and services that might be of
                interest to you. We do not use information that personally
                identifies you to display interest-based ads.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Our website and app may include third-party advertising and
                links to other websites and apps. Third-party advertising
                partners may collect information about you when you interact
                with their content, advertising, and services and you can visit
                such third party links and websites at your own risk and choice.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                From time to time this website may also include links to other
                websites. These links are provided for your convenience to
                provide further information or promotions. They do not signify
                that we endorse the website(s). We have no responsibility for
                the content of the linked website(s).
              </p>
            </section>

            {/* Section 4 - Accessing Personal Information */}
            <section
              id="returns"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Accessing My Personal Information
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                With your consent, we may have access to your SMS, instant
                messages, location, camera, photo gallery and device information
                for better usage of the mobile application.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                We may provide an option for online payment within the Service.
                In such a case, we may use third-party services for payment
                processing. We will not store or collect your payment card
                details. That information is provided directly to our
                third-party payment processors whose use of your personal
                information and payment information (credit cards, debit cards
                etc) is governed by their Privacy Policy.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                In the unlikely event of reorganisation, acquisition,
                amalgamation, restructuring or insolvency resolution of our
                company, user information and account related information will
                be one of the transferred assets. Should such a transaction
                occur, another business entity (or the new combined entity) will
                be required to follow this Privacy Policy with respect to your
                personal information and user data.
              </p>
            </section>

            {/* Section 5 - Protection of Information */}
            <section
              id="Protection-information"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Protection of my Information
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                We maintain reasonable physical, electronic and procedural
                safeguards to protect your information. Once your information is
                in our possession, we adhere to our security guidelines to
                protect it against unauthorized access. However, by using our
                website and mobile application, the users accept the inherent
                security implications of data transmission over the internet and
                the World Wide Web which cannot always be guaranteed as
                completely secure, and therefore, there would always remain
                certain inherent risks regarding use of our services. Users are
                responsible for ensuring the protection of login and password
                details of their respective accounts.
              </p>
            </section>

            {/* Section 6 - Consent on Data Usage */}
            <section
              id="consent-information"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Consent on Data Usage
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                By using our services you are giving consent to allow us to
                store your personal information. You have the right to withdraw
                your consent on using your personal data by writing to us. If
                you withdraw your consent, we may not be able to provide you
                with our services.
              </p>
            </section>

            {/* Section 7 - Legal Enforcement */}
            <section
              id="Legal-Enforcement"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Legal Enforcement
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                In accordance with Information Technology Act, 2000 and rules
                made thereunder, the name and contact details of the Grievance
                Officer are provided below:
              </p>
              <div className="my-4 rounded border-l-4 border-[#b7a221] bg-[#b7a221]/15 p-6">
                <p className="my-2 text-white/95">
                  <strong className="font-semibold text-[#b7a221]">
                    Name:
                  </strong>{" "}
                  Nevin Michael
                </p>
                <p className="my-2 text-white/95">
                  <strong className="font-semibold text-[#b7a221]">
                    Designation:
                  </strong>{" "}
                  Managing Director
                </p>
                <p className="my-2 text-white/95">
                  <strong className="font-semibold text-[#b7a221]">
                    Address:
                  </strong>{" "}
                  C/O CONNECTING DOTS TECH VENTURES PRIVATE LIMITED
                  <br />
                  3/494G, Mettungal, Manakkapady, Ernakulam - 683520
                </p>
                <p className="my-2 text-white/95">
                  <strong className="font-semibold text-[#b7a221]">
                    E-mail:
                  </strong>{" "}
                  <a
                    href="mailto:connectingdotstech@hotmail.com"
                    className="text-[#b7a221] transition-colors hover:text-[#d4c42e] hover:underline"
                  >
                    connectingdotstech@hotmail.com
                  </a>
                </p>
              </div>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                You can reach our customer support team to address any of your
                queries or complaints related to our services.
              </p>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Your personal information and user data may be shared with law
                enforcement agencies or government authorities if required under
                law.
              </p>
            </section>

            {/* Section 8 - Policy Changes */}
            <section
              id="policy-changes"
              className="mb-10 border-t border-white/10 pt-6"
            >
              <h2 className="mb-4 mt-6 text-xl font-semibold text-white max-md:text-lg">
                Policy Changes
              </h2>
              <p className="mb-4 font-light leading-relaxed text-white/90">
                Please check our Privacy Policy periodically for changes. We may
                update this Privacy Policy depending on changes to our
                information collection practices or to comply with any mandatory
                requirement of law. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the "Last
                Updated" date at the top of this Privacy Policy.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
