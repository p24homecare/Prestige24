import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy & HIPAA Notice | Prestige 24 Home Care",
  description:
    "Learn about how Prestige 24 Home Care protects your personal health information and our commitment to HIPAA compliance.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-navy text-white py-8">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sky hover:text-sky-200 text-sm font-medium transition-colors"
          >
            &larr; Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mt-4">
            Privacy Policy & HIPAA Notice
          </h1>
          <p className="text-navy-200 mt-2">Last updated: January 2024</p>
        </div>
      </header>

      {/* Content */}
      <main className="container-max px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <div className="prose prose-navy max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-navy mb-4">
              Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prestige 24 Home Care (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) is committed to protecting the privacy and
              security of your personal information. This Privacy Policy
              describes how we collect, use, and safeguard information obtained
              through our website at p24homecare.com.
            </p>

            <h3 className="text-lg font-bold text-navy mt-6 mb-3">
              Information We Collect
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              When you use our contact form, we may collect the following
              information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1.5 mb-4">
              <li>Full name and contact information (phone number, email address)</li>
              <li>Patient age and relationship to patient</li>
              <li>Type of service requested</li>
              <li>Insurance or Medicaid status</li>
              <li>Preferred contact method</li>
              <li>Any additional information you provide in the message field</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mt-6 mb-3">
              How We Use Your Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the information collected to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1.5 mb-4">
              <li>Respond to your inquiry about our home care services</li>
              <li>Evaluate your eligibility for specific programs (such as GAPP)</li>
              <li>Coordinate care services and develop personalized care plans</li>
              <li>Communicate with you about your care needs</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mt-6 mb-3">
              How We Protect Your Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1.5 mb-4">
              <li>
                Secure transmission of all form data over encrypted HTTPS
                connections
              </li>
              <li>
                Email notifications that do not contain protected health
                information (PHI)
              </li>
              <li>
                Access controls limiting who can view submitted information
              </li>
              <li>
                Staff training on privacy and confidentiality requirements
              </li>
            </ul>

            <h3 className="text-lg font-bold text-navy mt-6 mb-3">
              Third-Party Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use third-party services to operate our website and process
              communications. These services are selected with privacy and
              security as key criteria. We do not sell, rent, or share your
              personal information with third parties for marketing purposes.
            </p>
          </section>

          <section id="hipaa" className="mb-10 pt-4 border-t border-gray-200">
            <h2 className="text-2xl font-serif font-bold text-navy mb-4">
              HIPAA Notice of Privacy Practices
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a home care provider, Prestige 24 Home Care is committed to
              complying with the Health Insurance Portability and Accountability
              Act (HIPAA) and all applicable state privacy laws regarding the
              protection of your health information.
            </p>

            <h3 className="text-lg font-bold text-navy mt-6 mb-3">
              Your Rights Under HIPAA
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1.5 mb-4">
              <li>
                <strong>Access</strong> your protected health information (PHI)
              </li>
              <li>
                <strong>Request corrections</strong> to your health records
              </li>
              <li>
                <strong>Request restrictions</strong> on certain uses and
                disclosures of your health information
              </li>
              <li>
                <strong>Receive confidential communications</strong> through
                alternative means or at alternative locations
              </li>
              <li>
                <strong>Receive an accounting</strong> of disclosures of your
                health information
              </li>
              <li>
                <strong>File a complaint</strong> if you believe your privacy
                rights have been violated
              </li>
            </ul>

            <h3 className="text-lg font-bold text-navy mt-6 mb-3">
              How We May Use and Disclose Your Health Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may use and disclose your protected health information for the
              following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1.5 mb-4">
              <li>
                <strong>Treatment:</strong> To provide, coordinate, or manage
                your health care and related services
              </li>
              <li>
                <strong>Payment:</strong> To obtain payment for health care
                services provided to you, including Medicaid billing
              </li>
              <li>
                <strong>Health Care Operations:</strong> For quality assessment,
                training, and other administrative activities
              </li>
              <li>
                <strong>As Required by Law:</strong> When required by federal,
                state, or local law
              </li>
            </ul>

            <h3 className="text-lg font-bold text-navy mt-6 mb-3">
              Our Responsibilities
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are required by law to maintain the privacy of your protected
              health information, provide you with notice of our legal duties
              and privacy practices, and follow the terms of the notice currently
              in effect.
            </p>
          </section>

          <section className="mb-10 pt-4 border-t border-gray-200">
            <h2 className="text-2xl font-serif font-bold text-navy mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, our HIPAA
              practices, or wish to exercise your privacy rights, please contact
              us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p className="text-navy font-semibold">Prestige 24 Home Care</p>
              <p className="text-gray-700">
                Phone:{" "}
                <a href="tel:4708843905" className="text-royal hover:underline">
                  470-884-3905
                </a>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:admin@p24homecare.com"
                  className="text-royal hover:underline"
                >
                  admin@p24homecare.com
                </a>
              </p>
              <p className="text-gray-700">Website: p24homecare.com</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-navy-200 py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center text-sm">
          &copy; 2024 Prestige 24 Home Care. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
