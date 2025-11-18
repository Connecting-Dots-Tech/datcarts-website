import PageTop from "../../components/PageTop";
import "../privacy-policy/legal.css";

const RelatedQuestions = () => (
  <nav className="legal-related" aria-label="Related questions">
    <h3>Related Questions</h3>
    <ul>
      <li><a href="#acceptance">Acceptance of terms</a></li>
      <li><a href="#ownership">Ownership and property</a></li>
      <li><a href="#privacy">Privacy and data usage</a></li>
      <li><a href="#account">Account responsibilities</a></li>
      <li><a href="#platform-role">Platform role and limitations</a></li>
      <li><a href="#facilitator">We are a facilitator</a></li>
      <li><a href="#product-warranty">Product warranty disclaimer</a></li>
      <li><a href="#service-availability">Service availability</a></li>
      <li><a href="#intellectual-property">Intellectual property</a></li>
      <li><a href="#limitation-liability">Limitation of liability</a></li>
      <li><a href="#governing-law">Governing law</a></li>
      <li><a href="#changes-terms">Changes to terms</a></li>
    </ul>
  </nav>
);

export default function TermsAndConditions() {
  return (
    <>
      <PageTop pageName={"Terms and Conditions"} />
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

            <section id="acceptance" className="legal-section">
              <h1>Terms and Conditions of Website and Mobile Application</h1>
              <p>
                Please read these conditions carefully before using the datcarts.com 
                website and mobile application. By using the datcarts.com website and 
                its mobile application, you signify your agreement to be bound by our 
                Conditions of Use. By using our services, you agree that you are above 
                18 years of age.
              </p>
            </section>

            <section id="ownership" className="legal-section">
              <h2>Ownership and Property</h2>
              <p>
                The website datcarts.com and mobile application datcarts is the sole 
                and exclusive property of Connecting Dots Tech Ventures Private Limited, 
                having its registered office at Mettungal, Manakkapady, Mannam, Paravur, 
                Ernakulam, Kerala – 683520.
              </p>
            </section>

            <section id="privacy" className="legal-section">
              <h2>Privacy and Data Usage</h2>
              <p>
                Please review our <a href="/privacy-policy">Privacy Policy</a>, which 
                also governs your use of our website and mobile application. Your 
                personal information provided to us by you during the course of usage 
                of our website and mobile application will be treated as strictly 
                confidential and stored in accordance with the privacy policy and 
                applicable laws and regulations.
              </p>
              <p>
                Only the general purchase preferences and aggregate age & gender of 
                users (without linking it to identity/name of any individual customer) 
                will be shared with third parties. Our website uses cookies to monitor 
                browsing preferences. If you do allow cookies to be used, your personal 
                information may be stored by us for use by third parties.
              </p>
            </section>

            <section id="account" className="legal-section">
              <h2>Account Responsibilities</h2>
              <p>
                Our services offered on or through the website and mobile application 
                may require you to open an account (including setting up an ID and 
                password). If you use the website or application, you are responsible 
                for maintaining the confidentiality of your account and password and 
                for restricting access to your computer/mobile device to prevent 
                unauthorised access to your account.
              </p>
              <p>
                You agree to accept responsibility for all activities that occur under 
                your account or password.
              </p>
            </section>

            <section id="platform-role" className="legal-section">
              <h2>Platform Role and Limitations</h2>
              <p>
                The website and mobile application are only an online platform that 
                enables you to engage with the store. All information provided on the 
                platform is based on inputs given by the store and we are not 
                responsible for any information including the price, which is uploaded 
                by the store.
              </p>
              <p>
                We do not promise that any content, service or feature of the website 
                and mobile application will be error-free or uninterrupted. We do not 
                provide any guarantee that the products listed for sale by the store 
                will always be available at the store.
              </p>
              <p>
                The Products available at a store may be mispriced, described 
                inaccurately, or unavailable, and there may be delays in updating 
                information regarding the products. We cannot and do not guarantee the 
                accuracy or completeness of any information, including prices, product 
                images, specifications, availability, and services.
              </p>
            </section>

            <section id="facilitator" className="legal-section">
              <h2>We Are a Facilitator</h2>
              <p>
                By using our website and mobile application you also agree that 
                Connecting Dots Tech Ventures Private Limited is only a facilitator 
                and not the seller of the products purchased from the store. There is 
                no profit sharing or partnership or joint venture of any kind between 
                the store owner and Connecting Dots Tech Ventures Private Limited.
              </p>
            </section>

            <section id="product-warranty" className="legal-section">
              <h2>Product Warranty Disclaimer</h2>
              <p>
                Connecting Dots Tech Ventures Private Limited is not responsible for 
                the sale of the product that is purchased from the store. We do not 
                provide any warranty or guarantee for the products purchased and are 
                not responsible for any loss/damage suffered by the user as a result 
                of the purchase or for defective product or deficient service of the 
                seller/store.
              </p>
              <p>
                All grievances related to products purchased must be addressed to the 
                store owner or the manufacturer.
              </p>
            </section>

            <section id="service-availability" className="legal-section">
              <h2>Service Availability and Accuracy</h2>
              <p>
                We reserve the right to change or update information and to correct 
                errors, inaccuracies, or omissions at any time without prior notice. 
                Information regarding the products available at a store may contain 
                inaccuracies or errors and we expressly exclude liability for any such 
                inaccuracies or errors.
              </p>
              <p>
                The website/mobile application and its content are delivered on an 
                "as-is" and "as-available" basis. All information provided on the 
                website/mobile application is subject to change without notice.
              </p>
              <p>
                We cannot ensure that any files or other data you download from the 
                website or mobile application will be free of viruses or contamination 
                or destructive features.
              </p>
              <h3>No Warranties</h3>
              <p>
                We do not make any representation or warranty of any kind, express or 
                implied:
              </p>
              <ul>
                <li>As to the information, content, and materials or products included thereon</li>
                <li>That the service will be uninterrupted or error-free</li>
                <li>As to the accuracy, reliability, or currency of any information or content provided through the Service</li>
                <li>That the service, its servers, the content, or e-mails sent from or on behalf of the company are free of viruses, scripts, trojan horses, worms, malware or other harmful components</li>
              </ul>
            </section>

            <section id="third-party-links" className="legal-section">
              <h2>Third-Party Links</h2>
              <p>
                From time to time this website may also include links to other websites. 
                These links are provided for your convenience to provide further 
                information or promotions. They do not signify that we endorse the 
                website(s). We have no responsibility for the content of the linked 
                website(s).
              </p>
            </section>

            <section id="intellectual-property" className="legal-section">
              <h2>Intellectual Property</h2>
              <p>
                This website or any portion of this website and application shall not 
                be reproduced, duplicated, copied, sold, resold, visited, distributed 
                or otherwise exploited for any personal or commercial purpose.
              </p>
              <p>
                This website contains material which is owned by or licensed to us. 
                This material includes, but is not limited to, the design, layout, 
                look, appearance and graphics. Unauthorised use of this website may 
                give rise to a claim for damages and/or be a criminal offence.
              </p>
            </section>

            <section id="limitation-liability" className="legal-section">
              <h2>Limitation of Liability</h2>
              <p>
                Except where prohibited by law, Connecting Dots Tech Ventures Private 
                Limited will not be liable to you for any indirect, consequential, 
                exemplary, incidental or punitive damages on account of the purchase 
                of any product using our website or app.
              </p>
              <p>
                If Connecting Dots Tech Ventures Private Limited is found to be liable 
                to you for any damage or loss which arises out of or is in any way 
                connected with your use of the website or application, Connecting Dots 
                Tech Ventures Private Limited's liability shall in no event exceed the 
                amount spent on purchase of the product.
              </p>
            </section>

            <section id="severability" className="legal-section">
              <h2>Severability</h2>
              <p>
                If any provision of these Terms is held to be unenforceable or invalid, 
                such provision will be changed and interpreted to accomplish the 
                objectives of such provision to the greatest extent possible under 
                applicable law and the remaining provisions will continue in full force 
                and effect.
              </p>
            </section>

            <section id="changes-terms" className="legal-section">
              <h2>Changes to Terms</h2>
              <p>
                The terms and conditions mentioned herein are subject to change and 
                users are requested to periodically check this website/link for any 
                changes/updates in our terms and conditions.
              </p>
            </section>

            <section id="governing-law" className="legal-section">
              <h2>Governing Law and Jurisdiction</h2>
              <p>
                Your use of this website and any dispute arising out of such use of 
                the website is subject to the laws of India and all disputes shall be 
                within the sole and exclusive jurisdiction of competent courts in 
                Cochin/Ernakulam city.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}