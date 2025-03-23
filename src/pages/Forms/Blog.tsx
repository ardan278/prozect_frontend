import { useState } from "react";
import { motion } from "framer-motion";

const forms = [
  { name: "Registration", component: <RegistrationForm /> },
  { name: "Installations", component: <InstallationForm /> },
  { name: "Service", component: <ServiceForm /> },
  { name: "Requests", component: <RequestForm /> },
];

export default function BlogForms() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Forms Section
      </h2>
      <div className="flex justify-around border-b pb-2 mb-4">
        {forms.map((form, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-lg font-semibold border-b-2 transition duration-300 ${
              activeTab === index
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {form.name}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {forms[activeTab].component}
      </motion.div>
    </div>
  );
}
