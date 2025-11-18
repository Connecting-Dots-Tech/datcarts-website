import PageTop from "../../components/PageTop";
import "./legal.css";

const RelatedQuestions = () => (
  <nav className="legal-related" aria-label="Related questions">
    <h3>Related Questions</h3>
    <ul>
      <li><a href="#your-privacy">Your privacy</a></li>
      <li><a href="#what-info">What information do we collect</a></li>
      <li><a href="#sharing">Sharing your personal information</a></li>
      <li><a href="#returns">Accessing personal information</a></li>
      <li><a href="#Protection-information">Protection of information</a></li>
      <li><a href="#consent-information">Consent on data usage</a></li>
      <li><a href="#Legal-Enforcement">Legal enforcement</a></li>
      <li><a href="#policy-changes">Policy changes</a></li>
    </ul>
  </nav>
);

export default function PrivacyPolicy() {
  return (
    <>
      <PageTop pageName={"Privacy Policy"} />
      <div className="legal-wrapper">
        <div className="legal-container">
          <aside className="legal-sidebar">
            <RelatedQuestions />
          </aside>

          <main className="legal-content">
            <div className="legal-header">
              <p className="legal-version">Version 1.0</p>
              <p className="legal-date">Last Updated: November 17, 2025</p>
            </div>

            <section id="your-privacy" className="legal-section">
              <h1>Your Privacy</h1>
              <p>
                This Privacy Policy describes how Connecting Dots Tech Ventures
                Private Limited collects, uses, shares or otherwise processes your
                personal data through datcarts.com website and datcarts mobile
                application. By visiting/using our website and downloading/using
                our mobile application, and providing your information or
                availing our service, you expressly agree to be bound by the
                terms and conditions of this Privacy Policy. If you do not
                agree, please do not use or access our website and mobile
                application.
              </p>
            </section>

            <section id="what-info" className="legal-section">
              <h2>What information do we collect and how do we use it?</h2>
              <p>
                We do not knowingly solicit or collect personal information from
                children under the age of 18 years and use of our website and
                mobile application is only meant for persons above 18 years of
                age. By using our website and its mobile application, you agree
                that you are above 18 years of age.
              </p>
              <p>
                While using our website and its mobile application, we may ask
                you to provide us with certain personal information that can be
                used to contact or identify you. Personal information may
                include, but is not limited to:
              </p>
              <ul>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Name</li>
                <li>Address</li>
                <li>Gender</li>
                <li>Age</li>
              </ul>
            </section>

            <section id="sharing" className="legal-section">
              <h2>Sharing your personal information</h2>
              <p>
                Your personal information provided to us by you during the
                course of usage of our service will be treated as strictly
                confidential. The said information (except for age and gender as
                explained below) will not be shared with any third party and
                will only be used in accordance with our privacy policy and
                applicable laws. It is clarified that your identity and name
                will remain confidential and shall not be shared with any third
                party.
              </p>
              <p>
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
              <p>
                Apart from the above, our website uses cookies to monitor
                browsing preferences. If you do allow cookies to be used, your
                browsing preferences may be stored by us for use by third
                parties.
              </p>
              <p>
                We may use your personal information to recommend features,
                products, and services that might be of interest to you,
                identify your preferences, and personalize your experience with
                us.
              </p>
              <p>
                We may use your personal information to contact you with
                newsletters, marketing or promotional materials and other
                information that may be of interest to you. You can opt-out of
                receiving any or all of these communications from us by
                following the unsubscribe link or instructions provided in any
                email we send or by contacting us.
              </p>
              <p>
                We may use your personal information to display interest-based
                ads for features, products and services that might be of
                interest to you. We do not use information that personally
                identifies you to display interest-based ads.
              </p>
              <p>
                Our website and app may include third-party advertising and
                links to other websites and apps. Third-party advertising
                partners may collect information about you when you interact
                with their content, advertising, and services and you can
                visit such third party links and websites at your own risk and
                choice.
              </p>
              <p>
                From time to time this website may also include links to other
                websites. These links are provided for your convenience to
                provide further information or promotions. They do not signify
                that we endorse the website(s). We have no responsibility for
                the content of the linked website(s).
              </p>
            </section>

            <section id="returns" className="legal-section">
              <h2>Accessing My Personal Information</h2>
              <p>
                With your consent, we may have access to your SMS, instant
                messages, location, camera, photo gallery and device information
                for better usage of the mobile application.
              </p>
              <p>
                We may provide an option for online payment within the Service.
                In such a case, we may use third-party services for payment
                processing. We will not store or collect your payment card
                details. That information is provided directly to our
                third-party payment processors whose use of your personal
                information and payment information (credit cards, debit cards
                etc) is governed by their Privacy Policy.
              </p>
              <p>
                In the unlikely event of reorganisation, acquisition,
                amalgamation, restructuring or insolvency resolution of our
                company, user information and account related information will
                be one of the transferred assets. Should such a transaction
                occur, another business entity (or the new combined entity)
                will be required to follow this Privacy Policy with respect to
                your personal information and user data.
              </p>
            </section>

            <section id="Protection-information" className="legal-section">
              <h2>Protection of my Information</h2>
              <p>
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

            <section id="consent-information" className="legal-section">
              <h2>Consent on Data Usage</h2>
              <p>
                By using our services you are giving consent to allow us to
                store your personal information. You have the right to withdraw
                your consent on using your personal data by writing to us. If
                you withdraw your consent, we may not be able to provide you
                with our services.
              </p>
            </section>

            <section id="Legal-Enforcement" className="legal-section">
              <h2>Legal Enforcement</h2>
              <p>
                In accordance with Information Technology Act, 2000 and rules
                made thereunder, the name and contact details of the Grievance
                Officer are provided below:
              </p>
              <p>
                You can reach our customer support team to address any of your
                queries or complaints related to our services.
              </p>
              <p>
                Your personal information and user data may be shared with law
                enforcement agencies or government authorities if required under
                law.
              </p>
            </section>

            <section id="policy-changes" className="legal-section">
              <h2>Policy Changes</h2>
              <p>
                Please check our Privacy Policy periodically for changes. We
                may update this Privacy Policy depending on changes to our
                information collection practices or to comply with any mandatory
                requirement of law. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the "Last Updated"
                date at the top of this Privacy Policy.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}