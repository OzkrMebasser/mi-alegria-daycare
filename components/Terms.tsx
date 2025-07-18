import React from "react";
import {
  FaGavel,
  FaShieldAlt,
  FaLink,
  FaExclamationTriangle,
  FaGlobeAmericas,
  FaInfoCircle,
} from "react-icons/fa";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
        <FaGavel className="text-blue-600" /> Terms and Conditions
      </h1>
      <p className="text-sm text-gray-500 mb-4">Last updated: July 18, 2025</p>
      <p className="mb-6">
        Please read these terms and conditions carefully before using Our Service.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Interpretation and Definitions</h2>
        <h3 className="text-xl font-semibold mt-4 mb-1">Interpretation</h3>
        <p className="mb-2">
          The words of which the initial letter is capitalized have meanings defined under the following conditions...
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-1">Definitions</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control...</li>
          <li><strong>Country</strong> refers to: British Columbia, Canada</li>
          <li><strong>Company</strong> refers to Mi Alegria Daycare.</li>
          <li><strong>Device</strong> means any device that can access the Service.</li>
          <li><strong>Service</strong> refers to the Website.</li>
          <li><strong>Terms and Conditions</strong> means this agreement governing your use of the Service.</li>
          <li><strong>Third-party Social Media Service</strong> refers to external services linked via the Service.</li>
          <li><strong>Website</strong> refers to Mi Alegria Daycare,{" "}
            <a href="https://mialegriadaycare.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              https://mialegriadaycare.ca/
            </a>
          </li>
          <li><strong>You</strong> means the user accessing the Service.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Acknowledgment</h2>
        <p className="mb-2">
          These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company.
        </p>
        <p className="mb-2">
          By accessing or using the Service, You agree to be bound by these Terms and represent that you are over 18 years old.
        </p>
        <p className="mb-2">
          Our services are intended only for parents or legal guardians seeking child care services. We do not knowingly collect or process information from children under the age of 13.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <FaInfoCircle className="text-blue-500" /> Informational Content
        </h2>
        <p className="mb-2">
          Any content provided on this Website, including blogs or educational materials, is for informational purposes only and does not constitute professional or medical advice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <FaLink className="text-green-600" /> Links to Other Websites
        </h2>
        <p className="mb-2">
          Our Service may contain links to third-party websites not owned or controlled by the Company. We are not responsible for their content or privacy practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-red-600">
          <FaExclamationTriangle /> Termination
        </h2>
        <p className="mb-2">
          We may terminate or suspend access to Our Service without prior notice if You breach these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
        <p className="mb-2">
          To the maximum extent permitted by law, the Company is not liable for indirect, incidental, or consequential damages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
        <p className="mb-2">
          The Service is provided &quot;AS IS&quot; without warranties of any kind, including merchantability or fitness for a particular purpose.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
        <p className="mb-2">
          These Terms shall be governed by the laws of the Province of British Columbia and the federal laws of Canada applicable therein.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Disputes Resolution</h2>
        <p className="mb-2">
          If you have a concern or dispute, you agree to try to resolve it informally by contacting the Company first.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Severability and Waiver</h2>
        <h3 className="text-xl font-semibold mt-2 mb-1">Severability</h3>
        <p className="mb-2">
          If any provision is found unenforceable, it will be modified to reflect the intent while the rest remain in effect.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-1">Waiver</h3>
        <p className="mb-2">
          Failure to enforce any right or provision shall not constitute a waiver of future enforcement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Translation Interpretation</h2>
        <p className="mb-2">
          These Terms may have been translated. In the case of a dispute, the original English version shall prevail.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Changes to These Terms and Conditions</h2>
        <p className="mb-2">
          We reserve the right to modify or replace these Terms at any time. We will attempt to notify of material changes at least 30 days in advance.
        </p>
      </section>

      <section className="mb-8 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <FaShieldAlt className="text-indigo-600" /> Contact Us
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            By email:{" "}
            <a href="mailto:mialegriadaycare@gmail.com" className="text-blue-600 underline">
              mialegriadaycare@gmail.com
            </a>
          </li>
          <li>
            By visiting:{" "}
            <a href="https://mialegriadaycare.ca/contact" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              https://mialegriadaycare.ca/contact
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t pt-6 text-sm text-gray-600 flex items-center gap-2">
        <FaGlobeAmericas />
        <p>
          This website is operated in accordance with the{" "}
          <a
            href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/03063_01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Personal Information Protection Act (PIPA) of British Columbia
          </a>{" "}
          and applicable Canadian laws. See our{" "}
          <a href="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Terms;
