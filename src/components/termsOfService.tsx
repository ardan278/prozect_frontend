import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-8 lg:px-16">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>
        <p className="text-gray-600 text-sm text-center mb-4">Effective Date: [Insert Date]</p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to VTSTechCorp. These Terms of Service govern your use of our website and services. By accessing our site, you agree to these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>You must use our services lawfully and ethically.</li>
            <li>Do not engage in activities that harm our platform or other users.</li>
            <li>Ensure the accuracy of the information you provide.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
          <p className="text-gray-700">
            All content, trademarks, and services on this site belong to VTSTechCorp. Unauthorized use of our intellectual property is prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
          <p className="text-gray-700">
            We are not liable for damages resulting from the use of our website or services. Your use of our platform is at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
          <p className="text-gray-700">
            We reserve the right to terminate accounts that violate these terms without prior notice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
          <p className="text-gray-700">
            We may update these terms periodically. Continued use of our site means acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions, contact us at: <strong>support@vtstechcorp.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
