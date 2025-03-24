import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-8 lg:px-16">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-gray-600 text-sm text-center mb-4">Effective Date: 1/04/2025</p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to VTSTechCorp. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and timestamps.</li>
            <li><strong>Cookies & Tracking:</strong> Used to enhance user experience and analyze website traffic.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
          <p className="text-gray-700">
            We use the collected information to improve our services, respond to inquiries, send updates, analyze performance, and ensure security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. How We Protect Your Information</h2>
          <p className="text-gray-700">
            We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Sharing Your Information</h2>
          <p className="text-gray-700">
            We do not sell your data. We may share it with service providers or for legal requirements if necessary.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights & Choices</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of marketing emails.</li>
            <li>Disable cookies via browser settings.</li>
          </ul>
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

export default PrivacyPolicy;