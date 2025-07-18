import React from "react";
import { FaShieldAlt, FaGlobeAmericas } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaShieldAlt className="text-indigo-600" /> Privacy Policy
      </h1>

      <p className="mb-4">
        Last updated: July 18, 2025
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Mi Alegria Daycare (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://mialegriadaycare.ca" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://mialegriadaycare.ca</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p>
          We collect personal information you voluntarily provide to us, such as your name, email address, phone number, and information about your child when you contact us or register for services.
        </p>
        <p>
          We may also collect non-personal information automatically such as IP addresses, browser type, and usage data through cookies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
        <p>
          We use your information to:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-5">
          <li>Provide and manage daycare services.</li>
          <li>Respond to inquiries and communicate important updates.</li>
          <li>Improve our website and services.</li>
          <li>Comply with legal requirements.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Sharing Your Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to others. We may share information with trusted third parties only as necessary to provide our services or comply with the law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information by contacting us.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Children&#39;s Privacy</h2>
        <p>
          We do not knowingly collect personal information from children under 13 without parental consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>

      <section className="mb-8 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <FaShieldAlt className="text-indigo-600" /> Contact Us
        </h2>
        <p>
          If you have questions about this Privacy Policy, please contact us:
        </p>
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
          This website operates in compliance with the{" "}
          <a
            href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/03063_01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Personal Information Protection Act (PIPA) of British Columbia
          </a>{" "}
          and applicable Canadian laws.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
